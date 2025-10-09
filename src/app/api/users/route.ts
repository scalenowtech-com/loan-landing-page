// app/api/users/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { google } from "googleapis";

// Save data to Google Sheets
async function saveToGoogleSheet(data: {
  name: string;
  phone: string;
  city: string;
  loanAmount: string;
  cibil?: string;
  salary: string;
  gclid?: string;
}) {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"), // 🔑 fix newlines
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID!;

  
  // Get the whole E:K range (or a big chunk, like E11:K1000)
const getResponse = await sheets.spreadsheets.values.get({
  spreadsheetId,
  range: "'Google Leads'!E11:L50000",
});

const rows = getResponse.data.values || [];

// Find the last non-empty row
let lastRow = 10; // because we start from row 11
for (let i = rows.length - 1; i >= 0; i--) {
  if (rows[i].some(cell => cell !== "")) {
    lastRow = 11 + i; // row number of last filled row
    break;
  }
}

const nextRow = lastRow + 1;
const range = `'Google Leads'!E${nextRow}:L${nextRow}`;

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          data.name,
          data.phone,
          data.city,
          data.loanAmount,
          data.cibil || "",
          data.salary,
          data.gclid || "",
          new Date().toISOString().replace("T", " ").replace("Z", ""),
        ],
      ],
    },
  });
}

// ✅ POST /api/users
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const { name, phone, city, loanAmount, cibil, salary, gclid } = body;

    if (!name || !phone || !city || !loanAmount || !salary) {
      return NextResponse.json(
        { message: "Name, Phone, City, Loan Amount, and Salary are required" },
        { status: 400 }
      );
    }

    // Save to MongoDB
    const newUser = new User({
      name: name.trim(),
      phone: phone.trim(),
      salary: salary.toString().trim(),
      city: city.trim(),
      loanAmount: loanAmount.toString().trim(),
      cibil: cibil ? cibil.toString().trim() : undefined,
      gclid: gclid ? gclid.trim() : undefined,
    });

    const savedUser = await newUser.save();

    // Save to Google Sheets (non-blocking)
    await saveToGoogleSheet({
      name: savedUser.name,
      phone: savedUser.phone,
      city: savedUser.city,
      loanAmount: savedUser.loanAmount,
      cibil: savedUser.cibil,
      salary: savedUser.salary,
      gclid: body.gclid,
    });

    return NextResponse.json(
      { message: "User data saved successfully!", user: savedUser },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("❌ Error saving user:", error);

    const errorMessage =
      error instanceof Error
        ? error.message
        : typeof error === "string"
        ? error
        : "Unknown error";

    return NextResponse.json(
      { message: "Error saving user", error: errorMessage },
      { status: 500 }
    );
  }
}

// app/api/users/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

// Simple GET for testing
export async function GET() {
  return NextResponse.json({ message: "Users API working ✅" });
}

// POST /api/users → Save form data
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const { name, phone, city, loanAmount, cibil, salary } = body;

    if (!name || !phone || !city || !loanAmount || !salary) {
      return NextResponse.json(
        { message: "Name, Phone, City, Loan Amount, and Salary are required" },
        { status: 400 }
      );
    }

    const newUser = new User({
      name: name.trim(),
      phone: phone.trim(),
      salary: Number(salary),
      city: city.trim(),
      loanAmount: loanAmount.toString().trim(),
      cibil: cibil ? cibil.toString().trim() : undefined,
    });

    const savedUser = await newUser.save();

    return NextResponse.json(
      { message: "User data saved successfully!", user: savedUser },
      { status: 201 }
    );
  } catch (error: unknown) {
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

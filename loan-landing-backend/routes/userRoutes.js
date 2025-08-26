import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Save form data
router.post("/", async (req, res) => {
  try {
    console.log("📩 Incoming request body:", req.body); // 🔍 Debug log

    const { name, phone, city, loanAmount, cibil } = req.body;

    // Basic validation
    if (!name || !phone || !city || !loanAmount) {
      console.warn("⚠️ Missing required fields:", { name, phone, city, loanAmount });
      return res.status(400).json({
        message: "Name, Phone, City, and Loan Amount are required",
      });
    }

    const newUser = new User({
      name: name.trim(),
      phone: phone.trim(),
      salary: salary.trim(),
      city: city.trim(),
      loanAmount: loanAmount.toString().trim(),
      cibil: cibil ? cibil.toString().trim() : undefined,
    });

    const savedUser = await newUser.save();
    console.log("✅ User saved:", savedUser);

    res.status(201).json({
      message: "User data saved successfully!",
      user: savedUser,
    });
  } catch (error) {
    console.error("❌ Error saving user:", error.message, error.stack);
    res.status(500).json({
      message: "Error saving user",
      error: error.message || error,
    });
  }
});

// Get all users
router.get("/", async (req, res) => {
  try {
    console.log("📡 Fetching all users...");
    const users = await User.find().sort({ createdAt: -1 });
    console.log(`✅ Found ${users.length} users`);
    res.json(users);
  } catch (error) {
    console.error("❌ Error fetching users:", error.message, error.stack);
    res.status(500).json({
      message: "Error fetching users",
      error: error.message || error,
    });
  }
});

export default router;

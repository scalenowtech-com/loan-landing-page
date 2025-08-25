import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Save form data
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, loanAmount } = req.body;

    const newUser = new User({ name, email, phone, loanAmount });
    await newUser.save();

    res.status(201).json({ message: "User data saved successfully!" });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ message: "Error saving user", error });
  }
});

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;

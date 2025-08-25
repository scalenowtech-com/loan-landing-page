import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  loanAmount: { type: Number, required: true },
  cibil: {
    type: String,
    enum: [
      "750+ (Excellent)",
      "700-749 (Good)",
      "650-699 (Fair)",
      "600-649 (Poor)",
      "Below 600",
      "Not Sure"
    ],
    required: false // ✅ optional field
  },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("User", userSchema);

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  loanAmount: { type: String, required: true }, 
  cibil: { type: String }, 
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("User", userSchema);

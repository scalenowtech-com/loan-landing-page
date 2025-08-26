const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  city: { type: String, required: true }, 
  loanAmount: { type: Number, required: true },
  cibil: { type: String }, // optional
  createdAt: { type: Date, default: Date.now }
});
export default mongoose.model("User", userSchema);
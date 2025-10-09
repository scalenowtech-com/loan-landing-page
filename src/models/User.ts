// models/User.ts
import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
  name: string;
  phone: string;
  salary: string;
  city: string;
  loanAmount: string;
  cibil?: string;
  gclid?: string;
  createdAt: Date;
}

// ✅ Define schema
const userSchema: Schema<IUser> = new Schema({
  name: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true }, 
  salary: { type: String, required: true },
  city: { type: String, required: true, trim: true },
  loanAmount: { type: String, required: true, trim: true },
  cibil: { type: String, trim: true },
   gclid: { type: String, trim: true },
  createdAt: { type: Date, default: Date.now },
});


const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;

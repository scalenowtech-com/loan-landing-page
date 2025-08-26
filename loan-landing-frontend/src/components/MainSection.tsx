"use client";

import { ChangeEvent, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  CheckCircle2,
  User,
  Phone,
  MapPin,
  IndianRupee,
  BarChart,
  Wallet
} from "lucide-react";
import { useRouter } from "next/navigation";


export default function MainSection() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    salary: "",
    city: "",
    loanAmount: "",
    cibil: "",
    
  });

  
  const [loading, setLoading] = useState(false);

  // handleChange for all inputs/selects
  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // handleSubmit for form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const API_BASE_URL =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

      const res = await axios.post(`${API_BASE_URL}/api/users`, formData);

      if (res.status === 201) {
        setFormData({
          name: "",
          phone: "",
          salary: "",
          city: "",
          loanAmount: "",
          cibil: "",
        });
        router.push("/thank-you");
      } else {
        toast.error("❌ Failed to submit loan request.");
      }
    } catch (error) {
      console.error("❌ Axios Error:", error);
      toast.error("⚠ Something went wrong!");
      } finally {
    setLoading(false);
    }
  };

  return (
    <section className="bg-[url('/bg.jpg')] bg-cover bg-center py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-start gap-x-20 px-6">
        {/* Left Content */}
        <div className="max-w-xl pl-6 lg:pl-12 text-white">
          <p className="text-red-400 font-semibold underline">
            Instant Loan Approval
          </p>
          <h1 className="text-5xl font-bold leading-tight mt-2">
            Get Emergency Loan <br /> in{" "}
            <span className="text-red-400">30 Minutes</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Quick, secure, and hassle-free loans for all your urgent financial
            needs. No lengthy paperwork, instant approval.
          </p>
          <div className="mt-6 flex space-x-4">
            <a
              href="#loan-form"
              onClick={(e) => {
                e.preventDefault();
                toast.success("✅ Redirecting to Loan Form...");
                setTimeout(() => {
                  const formSection = document.getElementById("loan-form");
                  formSection?.scrollIntoView({ behavior: "smooth" });
                }, 800);
              }}
              className="bg-red-600 px-6 py-3 rounded-full text-white font-semibold hover:bg-red-700 cursor-pointer"
            >
              Apply Now – Get ₹50,000
            </a>
            <a
              href="tel:6289867688"
              className="border border-white px-6 py-3 rounded-full"
            >
              Call: 6289867688
            </a>
          </div>
        </div>

        {/* Right Form */}
        <div
          id="loan-form"
          className="bg-white text-gray-800 rounded-2xl shadow-xl p-6 w-full max-w-sm mt-12 lg:mt-0 lg:ml-24"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold text-center">Get Instant Loan</h2>
            <p className="text-center text-gray-600 text-sm flex justify-center gap-3 mt-1">
              <span className="flex items-center gap-1 text-green-600">
                <CheckCircle2 size={16} /> Instant Approval
              </span>
              <span className="flex items-center gap-1 text-green-600">
                <CheckCircle2 size={16} /> No Hidden Fees
              </span>
            </p>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  placeholder="     Enter your full name"
                  className="w-full border rounded-lg p-3 pl-10 outline-none"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Mobile Number{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-2/5 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="tel"
                  name="phone"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  placeholder="      10-digit mobile number"
                  className="w-full border rounded-lg p-3 pl-10 outline-none"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Must be registered with Aadhar
                </p>
              </div>
            </div>
{/* Salary */}
<div>
  <label className="block text-sm font-medium mb-1">
    Monthly Salary (₹) <span className="text-red-500">*</span>
  </label>
  <div className="relative">
    <Wallet className="absolute left-3 top-2/5 -translate-y-1/2 text-gray-400 w-5 h-5" />
    <input
      type="number"
      name="salary"
      placeholder=" Enter your salary"
      min={35000}
      className="w-full border rounded-lg p-3 pl-10 outline-none"
      value={formData.salary}
      onChange={(e) => {
        setFormData({ ...formData, salary: e.target.value });
      }}
      onBlur={(e) => {
        if (Number(e.target.value) < 35000 && e.target.value !== "") {
          alert("Salary must be at least ₹35,000");
          setFormData({ ...formData, salary: "" });
        }
      }}
      required
    />
    <p className="text-xs text-gray-500 mt-1">
      Minimum salary should be ₹35,000
    </p>
  </div>
</div>


            {/* City */}
            <div>
              <label className="block text-sm font-medium mb-1">
                City <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                <select
                  name="city"
                  className="w-full border rounded-lg p-3 pl-10 outline-none"
                  value={formData.city}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your city</option>
                  <option>Ahmedabad</option>
                  <option>Bangalore</option>
                  <option>Chennai</option>
                  <option>Delhi/NCR</option>
                  <option>Hyderabad</option>
                  <option>Kolkata</option>
                  <option>Mumbai</option>
                  <option>New Delhi (HO)</option>
                  <option>Pune</option>
                </select>
              </div>
            </div>

            {/* Loan Amount */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Loan Amount <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                <select
                  name="loanAmount"
                  className="w-full border rounded-lg p-3 pl-10 outline-none"
                  value={formData.loanAmount}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select loan amount</option>
                  <option>₹5,000</option>
                  <option>₹10,000</option>
                  <option>₹15,000</option>
                  <option>₹20,000</option>
                  <option>₹25,000</option>
                  <option>₹30,000</option>
                  <option>₹40,000</option>
                  <option>₹50,000</option>
                  <option>₹75,000</option>
                  <option>₹1,00,000</option>
                </select>
              </div>
            </div>

            {/* CIBIL */}
            <div>
              <label className="block text-sm font-medium mb-1">
                CIBIL Score <span className="text-gray-400">(Optional)</span>
              </label>
              <div className="relative">
                <BarChart className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                <select
                  name="cibil"
                  className="w-full border rounded-lg p-3 pl-10 outline-none"
                  value={formData.cibil}
                  onChange={handleChange}
                >
                  <option value="">Select CIBIL Score range</option>
                  <option>750+ (Excellent)</option>
                  <option>700-749 (Good)</option>
                  <option>650-699 (Fair)</option>
                  <option>600-649 (Poor)</option>
                  <option>Below 600</option>
                  <option>Not Sure</option>
                </select>
              </div>
            </div>

            {/* Submit */}
            <button
  type="submit"
  disabled={loading}
  className={`w-full py-3 rounded-lg font-semibold transition ${
    loading
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-red-600 text-white hover:bg-red-700"
  }`}
>
  {loading ? "Please Wait..." : "Get Instant Approval"}
</button>

            <p className="text-xs text-gray-500 text-center mt-2">
              By proceeding, you agree to our{" "}
              <span className="underline">Terms & Conditions</span> and{" "}
              <span className="underline">Privacy Policy</span>
            </p>
          </form>

          {loading && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
      <div className="animate-spin h-10 w-10 border-4 border-red-600 border-t-transparent rounded-full mb-3"></div>
      <p className="text-gray-700 font-medium">Submitting your application...</p>
    </div>
  </div>
)}
        </div>
      </div>

      {/* Toast */}
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
}

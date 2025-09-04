"use client";

import { ChangeEvent, useState, useEffect } from "react";
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
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    salary: "",
    city: "",
    loanAmount: "",
    cibil: "",
  });

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [agree, setAgree] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.phone || !formData.salary || !formData.city || !formData.loanAmount) {
      toast.error("❌ Please fill in all required fields.");
      return;
    }

    if (formData.phone.length !== 10 || !/^\d{10}$/.test(formData.phone)) {
      toast.error("❌ Please enter a valid 10-digit phone number.");
      return;
    }

    if (Number(formData.salary) < 35000) {
      toast.error("❌ Minimum salary should be ₹35,000.");
      return;
    }

    setShowModal(true);
  };

  const handleFinalSubmit = async () => {
    if (!agree) {
      toast.error("❌ You must agree to the terms before proceeding.");
      return;
    }
    
    setLoading(true);

    try {

      const res = await axios.post("/api/users", formData);

      if (res.status === 201) {
        toast.success("✅ Loan application submitted successfully!");
        setFormData({
          name: "",
          phone: "",
          salary: "",
          city: "",
          loanAmount: "",
          cibil: "",
        });
        setTimeout(() => {
          router.push("/thank-you");
        }, 2000);
      } else {
        toast.error("❌ Failed to submit loan request.");
      }
    } catch (error) {
      console.error("❌ Axios Error:", error);
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || "Something went wrong!";
        toast.error(`⚠ ${errorMessage}`);
      } else {
        toast.error("⚠ Network error occurred!");
      }
    } finally {
      setLoading(false);
      setShowModal(false);
      setAgree(false);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    setAgree(false);
  };

  const handleScrollToForm = () => {
    toast.success("✅ Redirecting to Loan Form...");
    setTimeout(() => {
      const formSection = document.getElementById("loan-form");
      formSection?.scrollIntoView({ behavior: "smooth" });
    }, 800);
  };

  if (!mounted) {
    return (
      <section className="bg-[url('/bg.jpg')] bg-cover bg-center py-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-start gap-x-10 px-6">
          {/* Left Content */}
          <div className="max-w-xl pl-6 lg:pl-2 text-white mt-0 lg:mt-[-400px]">
            <p className="text-xl text-red-400 font-bold underline underline-offset-8 mb-4">
  Instant Loan Approval
</p>

            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold lg:font-semibold leading-tight mt-2">
              Get Emergency Loan in{" "}
              <span className="text-red-400">30 Minutes</span>
            </h1>
            <p className="mt-4 text-xl text-gray-200">
              Quick, secure, and hassle-free loans for all your urgent financial needs. No lengthy paperwork, instant approval.
            </p>
            <div className="mt-6 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <div className="text-lg bg-red-600 px-8 py-3 rounded-full text-white font-semibold">
                Apply Now - Get ₹50,000
              </div>
              <div className="text-lg border border-white px-8 py-3 rounded-full text-center flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" strokeWidth={3} />
                Call: 9266328731
              </div>
            </div>
          </div>

          <div className="bg-white text-gray-800 rounded-2xl shadow-xl p-6 w-full max-w-md lg:max-w-[28rem] mt-12 lg:mt-0 lg:ml-24">
            <div className="animate-pulse">
              <div className="h-6 bg-gray-200 rounded mb-4"></div>
              <div className="space-y-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-12 bg-gray-200 rounded"></div>
                ))}
                <div className="h-12 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[url('/bg.jpg')] bg-cover bg-center py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-start gap-x-10 px-6">
        {/* Left Content */}
        <div className="max-w-xl pl-6 lg:pl-2 text-white mt-0 lg:mt-[-400px]">
          <p className="text-red-500 font-semibold underline underline-offset-8">
            Instant Loan Approval
          </p>
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold lg:font-semibold leading-tight mt-2">
            Get Emergency Loan in{" "}
            <span className="text-red-400">30 Minutes</span>
          </h1>
          <p className="mt-4 text-xl text-gray-100">
            Quick, secure, and hassle-free loans for all your urgent financial needs. Paperless, instant approval.
          </p>
          <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <button
              onClick={handleScrollToForm}
              className="text-lg bg-red-600 px-8 py-3 rounded-full text-white font-semibold hover:bg-red-700 transition-colors cursor-pointer"
            >
              Minimum Salary ₹35,000  
              <p className="break-normal">Apply Now</p>
            </button>
            <a
              href="tel:9266328731"
              className="text-lg border border-white px-6 py-3 rounded-full hover:bg-white hover:text-gray-800 transition-colors text-center flex items-center justify-center gap-2"
            >
              <strong><Phone className="w-8 h-5 font-bold text-xl" /></strong>
              Call: 
              <span>9266328731</span>
            </a>
          </div>
        </div>

        {/* Right Form */}
        <div
          id="loan-form"
          className="bg-white text-gray-800 rounded-2xl shadow-xl p-6 w-full max-w-md lg:max-w-[28rem] mt-12 lg:mt-0 lg:ml-24"
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
                  placeholder="Enter your full name"
                  className="w-full border border-gray-400 rounded-lg p-3 pl-10 outline-none 
           focus:border-2 focus:border-black focus:ring-1 focus:ring-red-400 focus:ring-offset-0"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  minLength={2}
                  maxLength={50}
                  autoComplete="name"
                  data-form-type="name"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-2/5 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="tel"
                  name="phone"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  placeholder="10-digit mobile number"
                  className="w-full border border-gray-400 rounded-lg p-3 pl-10 outline-none 
           focus:border-2 focus:border-black focus:ring-1 focus:ring-red-400 focus:ring-offset-0"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
                  data-form-type="phone"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Enter your mobile number
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
                  className="w-full border border-gray-400 rounded-lg p-3 pl-10 outline-none 
           focus:border-2 focus:border-black focus:ring-1 focus:ring-red-400 focus:ring-offset-0"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  autoComplete="address-level2"
                  data-form-type="city"
                >
                  <option value="">Select your city</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Delhi/NCR">Delhi/NCR</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="New Delhi (HO)">New Delhi (HO)</option>
                  <option value="Pune">Pune</option>
                </select>
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
                  placeholder="Enter your salary"
                  min={formData.city === "Mumbai" ? 50000 : 35000}
                  max={10000000}
                  className="w-full border border-gray-400 rounded-lg p-3 pl-10 outline-none 
           focus:border-2 focus:border-black focus:ring-1 focus:ring-red-400 focus:ring-offset-0"
                  value={formData.salary}
                  onChange={(e) => {
                    const value = e.target.value;
                    setFormData({ ...formData, salary: value });
                  }}
                  onBlur={(e) => {
                    const value = Number(e.target.value);
                    const minSalary = formData.city === "Mumbai" ? 50000 : 35000;

                    if (value > 0 && value < minSalary) {
                      toast.error(`❌ Salary must be at least ₹${minSalary.toLocaleString()}`);
                      setFormData({ ...formData, salary: "" });
                    }
                  }}
                  required
                  autoComplete="off"
                  data-form-type="salary"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Minimum salary should be ₹
                  {formData.city === "Mumbai" ? "50,000" : "35,000"}
                </p>
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
                  className="w-full border border-gray-400 rounded-lg p-3 pl-10 outline-none 
           focus:border-2 focus:border-black focus:ring-1 focus:ring-red-400 focus:ring-offset-0"
                  value={formData.loanAmount}
                  onChange={handleChange}
                  required
                  data-form-type="loan-amount"
                >
                  <option value="">Select loan amount</option>
                  <option value="₹5,000">₹5,000</option>
                  <option value="₹10,000">₹10,000</option>
                  <option value="₹15,000">₹15,000</option>
                  <option value="₹20,000">₹20,000</option>
                  <option value="₹25,000">₹25,000</option>
                  <option value="₹30,000">₹30,000</option>
                  <option value="₹40,000">₹40,000</option>
                  <option value="₹50,000">₹50,000</option>
                  <option value="₹75,000">₹75,000</option>
                  <option value="₹1,00,000">₹1,00,000</option>
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
                  className="w-full border border-gray-400 rounded-lg p-3 pl-10 outline-none 
           focus:border-2 focus:border-black focus:ring-1 focus:ring-red-400 focus:ring-offset-0"
                  value={formData.cibil}
                  onChange={handleChange}
                  data-form-type="cibil"
                >
                  <option value="">Select CIBIL Score range</option>
                  <option value="750+ (Excellent)">750+ (Excellent)</option>
                  <option value="700-749 (Good)">700-749 (Good)</option>
                  <option value="650-699 (Fair)">650-699 (Fair)</option>
                  <option value="600-649 (Poor)">600-649 (Poor)</option>
                  <option value="Below 600">Below 600</option>
                  <option value="Not Sure">Not Sure</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-600 text-white hover:bg-red-700"
              }`}
            >
              {loading ? "Please Wait..." : "Get Instant Approval"}
            </button>

            <p className="text-xs text-gray-500 text-center mt-2">
              By proceeding, you agree to our{" "}
                <a
                  href="/terms-and-conditions"
                type="button"
                className="text-red-600 hover:text-red-700 hover:underline"
              >
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a
                  href="/privacy-policy"
                type="button"
                className="text-red-600 hover:text-red-700 hover:underline">
                Privacy Policy
              </a>
            </p>
          </form>

          {/* Confirmation Modal */}
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-lg w-96 max-w-[90vw] shadow-lg">
                <h2 className="text-xl font-semibold mb-4 text-center">Confirmation</h2>
                <p className="text-gray-600 mb-4 text-sm text-center">
                  By proceeding, you agree to our{" "}
                  <a
                  href="/terms-and-conditions"
                type="button"
                className="text-red-600 hover:text-red-700 hover:underline"
              >
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a
                  href="/privacy-policy"
                type="button"
                className="text-red-600 hover:text-red-700 hover:underline">
                Privacy Policy
              </a>.
                </p>
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="agree-checkbox"
                    checked={agree}
                    onChange={() => setAgree(!agree)}
                    className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                  />
                  <label htmlFor="agree-checkbox" className="ml-2 text-sm text-gray-700 cursor-pointer">
                    I agree to the above terms
                  </label>
                </div>
                <div className="flex justify-between gap-3">
                  <button
                    onClick={handleModalClose}
                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleFinalSubmit}
                    disabled={!agree || loading}
                    className={`px-4 py-2 rounded text-white transition-colors ${
                      loading || !agree
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-red-600 hover:bg-red-700"
                    }`}
                  >
                    {loading ? "Submitting..." : "Proceed"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Loading Spinner */}
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

      {/* Toast Container */}
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
}
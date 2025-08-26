"use client";

import { useState } from "react";

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <>
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <h2 className="text-2xl font-semibold text-red-500">LoanInNeed</h2>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed">
              Your trusted partner for instant financial solutions. Quick,
              secure, and hassle-free loans.
            </p>
            <p className="mt-3 text-sm text-gray-400">
              📞 Call:{" "}
              <a href="tel:9266328731" className="hover:text-white">
                9266328731
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-base">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Loan Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Track Application</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Support</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-base">
              <li>
                <button
                  onClick={() => setShowPrivacy(true)}
                  className="text-gray-400 hover:text-white"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setShowTerms(true)}
                  className="text-gray-400 hover:text-white"
                >
                  Terms & Conditions
                </button>
              </li>
              <li><a href="#" className="text-gray-400 hover:text-white">Refund Policy</a></li> <li><a href="#" className="text-gray-400 hover:text-white">Grievance Cell</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm md:text-base text-gray-400">
          © {new Date().getFullYear()} LoanInNeed. All rights reserved. | A Unit
          of Sashi Enterprises Ltd.
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] md:w-[500px]">
            <h2 className="text-xl font-semibold mb-4">Privacy Policy</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We value your privacy and ensure your data is secure. Your
              personal information will never be shared without your consent.
            </p>
            <div className="mt-4 text-right">
              <button
                onClick={() => setShowPrivacy(false)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Terms & Conditions Modal */}
      {showTerms && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] md:w-[500px]">
            <h2 className="text-xl font-semibold mb-4">Terms & Conditions</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              By using our services, you agree to abide by all terms and
              conditions, including eligibility and repayment policies.
            </p>
            <div className="mt-4 text-right">
              <button
                onClick={() => setShowTerms(false)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

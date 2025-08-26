"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center animate-fadeIn">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-red-600 mb-3">
          Thank You!
        </h1>

        {/* Message */}
        <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
          Your loan application has been successfully received. Our team will
          contact you shortly to proceed further.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-red-700 transition-all duration-200"
          >
            Back to Home
          </Link>

          <a
            href="https://readdy.link/preview/e923117a-e2ad-4d0d-8ec0-b704bf0e3687/1945895"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 font-medium hover:underline"
          >
            View Reference - https://readdy.link/preview/e923117a-e2ad-4d0d-8ec0-b704bf0e3687/1945895
          </a>
        </div>
      </div>

      {/* Animation Style */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

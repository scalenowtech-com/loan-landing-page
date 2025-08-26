import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6 md:p-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 md:p-10">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
        <p className="text-gray-600 mb-6">
          Your privacy is important to us. This policy explains how we collect, use, and protect your information.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-3 mb-6 text-sm text-gray-700">
          <strong>Last updated:</strong> January 2025
        </div>

        {/* Section 1 */}
        <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
        <p className="mb-3">
          We collect information that you provide directly to us when applying for our loan services. This includes:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Full name and contact details</li>
          <li>Date of birth and age</li>
          <li>Address and residential information</li>
          <li>Phone number and email address</li>
          <li>Income details and employment information</li>
          <li>Bank account details</li>
          <li>Credit score and credit history</li>
          <li>Loan amount requested and purpose</li>
        </ul>

        {/* Section 2 */}
        <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
        <p className="mb-3">
          We use the collected information for the following purposes:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Processing and evaluating loan applications</li>
          <li>Verifying your identity and creditworthiness</li>
          <li>Communicating about your application status</li>
          <li>Providing customer support and assistance</li>
        </ul>

        {/* Contact Us */}
        <h2 className="text-xl font-semibold mb-2">11. Contact Us</h2>
        <p>If you have questions about this privacy policy, please contact us:</p>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-4">
          <p><strong>LoanInNeed - A Unit of Sashi Enterprises Ltd.</strong></p>
          <p><strong>Phone:</strong> 9266328731</p>
          <p><strong>Email:</strong> customerservice@loaninneed.in</p>
          <p><strong>Privacy Officer:</strong> privacy@loaninneed.in</p>
          <p><strong>Grievance Email:</strong> grievance@loaninneed.in</p>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-3 mb-6">
          <strong>Your Trust Matters:</strong> We are committed to maintaining the highest standards of data protection and privacy.
        </div>

        {/* Back Button */}
        <div className="flex justify-center">
          <Link
            href="/"
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 text-gray-800">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Thank You!</h1>
      <p className="text-lg text-gray-700 mb-6">
        Your loan application has been received. We will contact you shortly.
      </p>
      <Link
        href="/"
        className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}

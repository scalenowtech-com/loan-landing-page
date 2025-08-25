"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-1">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Loan In Need Logo" width={150} height={30} priority />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8">
          <Link href="/about" className="text-gray-700 hover:text-red-600 font-medium">
            About
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-red-600 font-medium">
            Services
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-red-600 font-medium">
            Contact
          </Link>
          <Link
            href="/track-loan"
            className="bg-red-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-red-700 transition"
          >
            Track Loan
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <span className="text-2xl">&times;</span> // Close icon
          ) : (
            <span className="text-2xl">&#9776;</span> // Hamburger icon
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          <Link href="/about" className="block text-gray-700 hover:text-red-600 font-medium">
            About
          </Link>
          <Link href="/services" className="block text-gray-700 hover:text-red-600 font-medium">
            Services
          </Link>
          <Link href="/contact" className="block text-gray-700 hover:text-red-600 font-medium">
            Contact
          </Link>
          <Link
            href="/track-loan"
            className="block bg-red-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-red-700 transition"
          >
            Track Loan
          </Link>
        </div>
      )}
    </nav>
  );
}

"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MainSection from "@/components/MainSection";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <section id="hero">
          <MainSection />
        </section>
        <section id="about">
          <About />
        </section>
      </main>
      <footer id="contact">
        <Footer />
      </footer>
    </>
  );
}

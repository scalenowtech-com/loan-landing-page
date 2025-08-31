"use client";

import MainSection from "@/components/MainSection";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section id="hero">
        <MainSection />
      </section>
      <section id="about">
        <About />
      </section>
    </main>
  );
}

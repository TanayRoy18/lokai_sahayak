"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ChooseUs from "@/components/ChooseUs";
import FAQ from "@/components/FAQ";
import Help from "@/components/Help";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/Footer"; // ✅ Import new Footer

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        className="relative z-0 min-h-screen bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.png')" }}
      >
        <div className="absolute inset-0 bg-black/5"></div>

        {/* HERO SECTION */}
        <section className="relative flex flex-col items-center justify-center px-8 py-12">
          <div className="text-center max-w-4xl pt-20">
            <h1
              className="whitespace-nowrap text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 drop-shadow-2xl"
              style={{ color: "#002366" }}
            >
              LokAI SAHAYAK
            </h1>

            <p
              className="text-xl sm:text-2xl md:text-3xl mb-8"
              style={{ color: "#002366", opacity: 0.85 }}
            >
              AI Help for Simplifying Your Government <br /> Document in Your Own
              Language!
            </p>

            <Link href="/login">
              <Button
                className="text-lg sm:text-xl px-8 py-4 rounded-xl shadow-xl"
                style={{ backgroundColor: "#006E00", color: "#ffffff" }}
              >
                JOIN US
              </Button>
            </Link>
          </div>
        </section>

        {/*How do we help */}
        <Help />

        {/* WHY CHOOSE US SECTION */}
        <ChooseUs />

        {/* FAQ SECTION */}
        <FAQ />

        {/* TESTIMONIALS */}
        <Testimonials />
      </main>

      {/* ✅ New Footer added here */}
      <Footer />
    </>
  );
}

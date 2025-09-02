"use client";

import { motion, Variants, easeOut } from "framer-motion";
import { FileText, Scale, MessageCircle, Mic } from "lucide-react";

type HelpCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const cardVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  inView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: easeOut },
  },
};

function HelpCard({ icon, title, description }: HelpCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileInView="inView"
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ scale: 1.04, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 320, damping: 20, mass: 0.4 }}
      className="relative rounded-2xl shadow-md p-6 text-center flex flex-col items-center
                 hover:shadow-2xl transition-shadow hover:z-10 border border-black"
      style={{
        backgroundColor: "rgba(220,220,220,0.8)", // ✅ same background as ChooseUs
        maxWidth: "250px",
        margin: "0 auto",
        willChange: "transform",
      }}
    >
      <div className="flex justify-center items-center w-14 h-14 mx-auto mb-3 rounded-full bg-[#002366]/10">
        {icon}
      </div>
      <h3
        className="text-lg font-bold uppercase"
        style={{ color: "#0C828F", fontFamily: "Inter, sans-serif" }}
      >
        {title}
      </h3>
      <p
        className="text-sm mt-2"
        style={{ color: "#0C828F", fontFamily: "Inter, sans-serif" }}
      >
        {description}
      </p>
    </motion.div>
  );
}

export default function Help() {
  return (
    <section
      id="services"
      className="relative z-0 bg-fixed bg-cover bg-center bg-no-repeat py-5 -my-5"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/5"></div>

      <div className="relative container mx-auto px-4">
        {/* Heading */}
        <h2
          className="text-center mb-8 uppercase tracking-wide"
          style={{
            color: "#002366",
            fontSize: "50px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 800,
          }}
        >
          How We Help
        </h2>

        <p
          className="text-center text-xl sm:text-2xl md:text-3xl mb-12"
          style={{
            color: "#002366",
            opacity: 0.85,
            fontFamily: "Inter, sans-serif",
          }}
        >
          Comprehensive support for all your government and legal needs
        </p>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-6 mx-20 my-20 justify-center">
          <HelpCard
            icon={<FileText className="w-8 h-8 text-[#002366]" />}
            title="Government Documents"
            description="Aadhar, PAN, Voter ID, Passport, and all official document assistance"
          />
          <HelpCard
            icon={<Scale className="w-8 h-8 text-[#002366]" />}
            title="Legal Guidance"
            description="Basic legal advice and guidance for common legal issues and procedures"
          />
          <HelpCard
            icon={<MessageCircle className="w-8 h-8 text-[#002366]" />}
            title="Grievance Redressal"
            description="Help with filing complaints and following up on government grievances"
          />
          <HelpCard
            icon={<Mic className="w-8 h-8 text-[#002366]" />}
            title="Voice Support"
            description="Speak in your regional language and get instant AI-powered assistance"
          />
        </div>
      </div>
    </section>
  );
}

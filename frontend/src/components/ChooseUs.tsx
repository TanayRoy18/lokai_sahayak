"use client";

import Image from "next/image";
import { motion, Variants, easeOut } from "framer-motion";

type FeatureProps = {
  image: string;
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

function FeatureCard({ image, title, description }: FeatureProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileInView="inView"
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ scale: 1.04, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 320, damping: 20, mass: 0.4 }}
      className="relative rounded-2xl shadow-md p-4 text-center flex flex-col items-center
                 hover:shadow-2xl transition-shadow hover:z-10 border border-black"
      style={{
        backgroundColor: "rgba(220,220,220,0.8)", // ✅ matches background style
        maxWidth: "250px",
        margin: "0 auto",
        willChange: "transform",
      }}
    >
      <Image src={image} alt={title} width={60} height={60} className="mb-3" />
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

export default function ChooseUs() {
  return (
    <section className=" pb-12 bg-cover bg-center bg-fixed">
      <div className="container mx-auto px-4">
        <h2
          className="text-center mb-8 uppercase tracking-wide"
          style={{
            color: "#002366",
            fontSize: "50px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 800,
          }}
        >
          Why to Choose Us
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-6 mx-20 my-20 justify-center">
          <FeatureCard
            image="/voice.png"
            title="Voice Input"
            description="Speak your problem, let LokAI Sahayak handle the rest."
          />
          <FeatureCard
            image="/multilingual.png"
            title="Multilingual Support"
            description="Breaking barriers with AI-powered multilingual assistance."
          />
          <FeatureCard
            image="/fast.png"
            title="Fast & Reliable"
            description="Speed and accuracy you can always rely on."
          />
          <FeatureCard
            image="/secure.png"
            title="Secure & Private"
            description="Safe, secure, and private—every step with us."
          />
        </div>
      </div>
    </section>
  );
}

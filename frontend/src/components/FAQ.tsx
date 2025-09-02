"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is Lokai Sahayak?",
            answer:
                "Lokai Sahayak is a digital platform designed to help citizens with government documents, legal queries, and civic assistance. It provides step-by-step guidance and support through AI and volunteer experts.",
        },
        {
            question: "How does Lokai Sahayak help me with government documents?",
            answer:
                "Lokai Sahayak guides you through the process of applying for important documents such as Aadhar, PAN, and Passport. It explains required documents, helps you fill forms correctly, and connects you to official resources.",
        },
        {
            question: "Is Lokai Sahayak available in multiple languages?",
            answer:
                "Yes, Lokai Sahayak supports multiple languages including English and Hindi. Our aim is to make government assistance more accessible by covering regional languages as well.",
        },
        {
            question: "How secure is my data on Lokai Sahayak?",
            answer:
                "We take data security very seriously. Your personal information is encrypted and not shared with third parties. You have full control over your data and can request deletion anytime.",
        },
        {
            question: "Can I access Lokai Sahayak on mobile devices?",
            answer:
                "Yes, Lokai Sahayak is fully responsive and works on smartphones, tablets, and desktops. You can access it easily through your mobile browser without needing an app.",
        },
    ];

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            id="faq"
            className="relative z-0  bg-fixed bg-cover bg-center bg-no-repeat pb-10 -my-10"
            style={{ backgroundImage: "url('/background.png')" }}
        >
            {/* Overlay same as other sections */}
            <div className="absolute inset-0 bg-black/5"></div>

            <div className="relative container mx-auto px-4 max-w-4xl">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2
                        className="uppercase tracking-wide"
                        style={{
                            color: "#002366",
                            fontSize: "50px",
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 800,
                        }}
                    >
                        FAQS
                    </h2>
                    <p
                        className="text-xl sm:text-2xl md:text-3xl mt-6"
                        style={{ color: "#002366", opacity: 0.85, fontFamily: "Inter, sans-serif" }}
                    >
                        Find quick answers to common questions about <br /> our services, processes, and support
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="bg-white/90 border border-black rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            >
                                <button
                                    onClick={() => toggleItem(index)}
                                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-300"
                                >
                                    <h4
                                        className="text-lg font-semibold pr-4"
                                        style={{ fontFamily: "Inter, sans-serif", color: "#002366" }}
                                    >
                                        {faq.question}
                                    </h4>
                                    <div className="flex-shrink-0">
                                        {isOpen ? (
                                            <ChevronUp className="h-5 w-5 text-green-700" />
                                        ) : (
                                            <ChevronDown className="h-5 w-5 text-green-700" />
                                        )}
                                    </div>
                                </button>

                                {isOpen && (
                                    <div className="px-6 pb-6 border-t border-gray-200">
                                        <div
                                            className="pt-4 leading-relaxed"
                                            style={{ fontFamily: "Inter, sans-serif", color: "#002366" }}
                                        >
                                            {faq.answer}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Still Have Questions Section */}
                <div className="mt-20 text-center">
                    <h3
                        className="text-xl sm:text-2xl md:text-3xl mb-8 font-extrabold -my-8"
                        style={{ color: "#002366", opacity: 0.85, fontFamily: "Inter, sans-serif" }}
                    >
                        Still have questions?
                    </h3>
                    <p
                        className="mb-6 max-w-2xl mx-auto"
                        style={{ fontFamily: "Inter, sans-serif", color: "#002366" }}
                    >
                        Can't find the answer you're looking for? Our AI assistant and volunteer experts are here to help you 24/7.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-gradient-to-r from-orange-500 to-green-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                            Chat with AI Assistant
                        </button>
                        <button className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold border-2 border-blue-300 hover:border-orange-500 hover:shadow-lg hover:scale-105 transition-all duration-300">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;

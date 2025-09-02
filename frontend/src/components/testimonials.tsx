"use client";

import React, { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials: React.FC = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            name: "Tamojita Mandal",
            location: "Delhi",
            role: "Small Business Owner",
            rating: 5,
            text: "लोकाई सहायक ने मेरे PAN कार्ड की समस्या को बहुत जल्दी हल कर दिया। AI असिस्टेंट बहुत helpful है और volunteers भी बहुत मदद करते हैं।",
            englishText:
                "Lokai Sahayak solved my PAN card issue very quickly. The AI assistant is very helpful and the volunteers are also very supportive.",
            avatar: "RK",
            bgColor: "from-orange-400 to-red-500",
        },
        {
            name: "Arya Stark Viswakarma",
            location: "Mumbai",
            role: "Teacher",
            rating: 5,
            text: "मुझे अपने बच्चे के Aadhar card के लिए बहुत परेशानी हो रही थी। यहाँ से step-by-step guidance मिली और सब कुछ आसान हो गया।",
            englishText:
                "I was facing a lot of trouble with my child's Aadhar card. Got step-by-step guidance here and everything became easy.",
            avatar: "PS",
            bgColor: "from-green-400 to-teal-500",
        },
        {
            name: "Farhana Akhtar",
            location: "Bangalore",
            role: "Software Engineer",
            rating: 5,
            text: "Passport renewal process was so confusing, but the legal experts here guided me through everything. Excellent service!",
            englishText:
                "Passport renewal process was so confusing, but the legal experts here guided me through everything. Excellent service!",
            avatar: "MA",
            bgColor: "from-blue-400 to-purple-500",
        },
        {
            name: "Suchana Ghosh",
            location: "Patna",
            role: "Homemaker",
            rating: 5,
            text: "RTI application के लिए यहाँ से बहुत अच्छी जानकारी मिली। Volunteers ने हिंदी में समझाया, बहुत अच्छा लगा।",
            englishText:
                "Got very good information for RTI application here. Volunteers explained in Hindi, felt very good.",
            avatar: "SD",
            bgColor: "from-pink-400 to-red-500",
        },
        {
            name: "Tanay Roy",
            location: "Ahmedabad",
            role: "Student",
            rating: 5,
            text: "College admission के लिए documents की जरूरत थी। यहाँ से complete checklist मिली और कोई document miss नहीं हुआ।",
            englishText:
                "Needed documents for college admission. Got a complete checklist from here and didn't miss any document.",
            avatar: "AP",
            bgColor: "from-indigo-400 to-blue-500",
        },
        {
            name: "Bantu Randi",
            location: "Chennai",
            role: "Retired Government Employee",
            rating: 5,
            text: "Pension related documents के लिए legal advice चाहिए थी। Expert volunteers ने बहुत detailed guidance दी।",
            englishText:
                "Needed legal advice for pension related documents. Expert volunteers gave very detailed guidance.",
            avatar: "LM",
            bgColor: "from-teal-400 to-green-500",
        },
    ];

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(nextTestimonial, 5000);
        return () => clearInterval(interval);
    }, []);

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Star
                key={index}
                className={`h-5 w-5 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
            />
        ));
    };

    return (
        <section
            id="testimonials"
            className="relative z-0 bg-fixed bg-cover bg-center bg-no-repeat py-10"
            style={{ backgroundImage: "url('/background.png')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/5"></div>

            <div className="relative container mx-auto px-4">
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
                        What Our Citizens Say
                    </h2>
                    <p
                        className="text-xl sm:text-2xl md:text-3xl"
                        style={{
                            color: "#002366",
                            opacity: 0.85,
                            fontFamily: "Inter, sans-serif",
                        }}
                    >
                        Real stories from people we've helped with <br />government documents and
                        legal queries
                    </p>
                </div>

                {/* Main Testimonial Display */}
                <div className="max-w-4xl mx-auto mb-12">
                    <div className="bg-gradient-to-br from-orange-50 via-white to-green-50 rounded-2xl shadow-xl p-8 lg:p-12 relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200 to-green-200 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 transform -translate-x-12 translate-y-12"></div>

                        <div className="relative z-10">
                            {/* Testimonial Content */}
                            <div className="text-center mb-8">
                                <p className="text-xl lg:text-2xl text-gray-800 leading-relaxed mb-4 font-medium">
                                    "{testimonials[currentTestimonial].text}"
                                </p>
                                <p className="text-lg text-gray-600 italic">
                                    "{testimonials[currentTestimonial].englishText}"
                                </p>
                            </div>

                            {/* Rating */}
                            <div className="flex justify-center mb-6">
                                {renderStars(testimonials[currentTestimonial].rating)}
                            </div>

                            {/* User Info */}
                            <div className="flex items-center justify-center space-x-4">
                                <div
                                    className={`w-16 h-16 bg-gradient-to-br ${testimonials[currentTestimonial].bgColor} rounded-full flex items-center justify-center text-white font-bold text-xl`}
                                >
                                    {testimonials[currentTestimonial].avatar}
                                </div>
                                <div className="text-left">
                                    <h4 className="text-xl font-bold text-gray-800">
                                        {testimonials[currentTestimonial].name}
                                    </h4>
                                    <p className="text-gray-600">
                                        {testimonials[currentTestimonial].role}
                                    </p>
                                    <p className="text-sm text-orange-600 font-semibold">
                                        📍 {testimonials[currentTestimonial].location}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-orange-600 hover:shadow-xl transition-all duration-300"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-orange-600 hover:shadow-xl transition-all duration-300"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </div>
                </div>

                {/* Testimonial Indicators */}
                {/* Testimonial Indicators */}
                <div className="flex justify-center space-x-2 mb-12">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentTestimonial(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial
                                    ? "bg-gradient-to-r from-orange-500 to-green-600 w-8"
                                    : "bg-white hover:bg-gray-400"
                                }`}
                        />
                    ))}
                </div>


                {/* Stats Section */}
                <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-orange-600 mb-2">
                            50,000+
                        </div>
                        <div className="text-gray-600">Happy Citizens</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
                        <div className="text-gray-600">Success Rate</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                        <div className="text-gray-600">AI Support</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
                        <div className="text-gray-600">Expert Volunteers</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

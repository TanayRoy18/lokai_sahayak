"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function Navbar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const [language, setLanguage] = useState("english")

    const navItems = [
        { name: "HOME", href: "/" },
        { name: "SAHAYAK AI", href: "/sahayak-ai" },
        { name: "ABOUT US", href: "/about" },
    ]

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#E6E6E6] shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo (left side) */}
                    <div className="flex items-center">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={40}
                            height={40}
                            className="mr-2 border-2 border-[#002366] rounded-full"
                        />

                        <span className="font-bold text-2xl font-inter text-[#002366]">
                            LokAI SAHAYAK
                        </span>
                    </div>

                    {/* Desktop menu (right side) */}
                    <div className="hidden md:flex space-x-6 items-center">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`font-inter text-[#002366] transition hover:underline ${pathname === item.href ? "font-bold" : "font-normal"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* 🔽 Language dropdown with blue border + blue arrow */}
                        <Select value={language} onValueChange={setLanguage}>
                            <SelectTrigger className="w-[140px] font-inter text-[#002366] border-2 border-[#002366] focus:ring-0 focus:border-[#002366]">
                                <SelectValue placeholder="Language" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="english">ENGLISH</SelectItem>
                                <SelectItem value="bengali">বাংলা</SelectItem>
                                <SelectItem value="hindi">हिन्दी</SelectItem>
                            </SelectContent>
                        </Select>

                        {/* ✅ Login button */}
                        <Button asChild variant="login">
                            <Link href="/login">LOG IN</Link>
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md"
                        >
                            <Menu className="h-6 w-6 text-[#002366]" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile dropdown */}
            {isOpen && (
                <div className="md:hidden px-2 pt-2 pb-3 space-y-1 transition-all duration-300 ease-in-out">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`block font-inter text-[#002366] transition hover:underline ${pathname === item.href ? "font-bold underline" : "font-normal"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}

                    {/* 🔽 Mobile Language dropdown */}
                    <Select value={language} onValueChange={setLanguage}>
                        <SelectTrigger className="w-full font-inter text-[#002366] border-2 border-[#002366] focus:ring-0 focus:border-[#002366]">
                            <SelectValue placeholder="Language" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="english">ENGLISH</SelectItem>
                            <SelectItem value="bengali">বাংলা</SelectItem>
                            <SelectItem value="hindi">हिन्दी</SelectItem>
                        </SelectContent>
                    </Select>

                    {/* ✅ Mobile Login button */}
                    <Button asChild variant="login" className="w-full hover:scale-105 transition-all duration-300">
                        <Link href="/login">LOG IN</Link>
                    </Button>
                </div>
            )}
        </nav>
    )
}

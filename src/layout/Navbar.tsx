import { useState } from "react";
import Logo from "@/assets/logo.svg?react";
import MenuIcon from "@/assets/menu_icon.svg?react";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Work" },
    { href: "#contacts", label: "Contact" },
];

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white">
            <nav className="max-w-screen-xl mx-auto h-[64px] md:h-[80px] flex items-center justify-between px-[50px] md:px-[100px] transition-all duration-300 ease-in-out">
                {/* Logo */}
                <a href="#" aria-label="Go to home" className="px-4 py-3 md:py-2 -mx-4">
                    <Logo className="w-[48px] h-[24px] md:w-[56px] md:h-[28px] text-[#2D2D2D] " />
                </a>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex gap-[28px]">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="px-4 py-2 text-base text-gray-600 hover:text-[#2D2D2D] transition-colors duration-300"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                    aria-expanded={isMobileMenuOpen}
                    className="md:hidden px-4 py-3 -mx-4 focus:outline-none"
                >
                    <MenuIcon
                        className={`w-[24px] h-[22px] transition-colors duration-300 ${isMobileMenuOpen ? 'text-[#2D2D2D]' : 'text-gray-500 hover:text-gray-600'
                            }`}
                    />
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-white overflow-hidden px-[50px] 
                    transition-all duration-300 ease-in-out origin-top
                    ${isMobileMenuOpen
                        ? 'max-h-96 opacity-100 translate-y-0'
                        : 'max-h-0 opacity-0 -translate-y-2'
                    }`}
            >
                <nav className="py-4 flex flex-col item-center gap-1 border-t border-gray-300">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="px-4 py-4 -mx-4 text-base text-gray-600 hover:text-black hover:bg-gray-50 rounded transition-colors duration-300"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};
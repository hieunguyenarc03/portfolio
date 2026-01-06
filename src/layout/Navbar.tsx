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
            <nav className="max-w-screen-xl mx-auto h-[64px] md:h-[80px] flex items-center justify-between px-[50px] md:px-[100px]">
                {/* Logo */}
                <a href="#" aria-label="Go to home" className="px-3 py-2 -mx-3">
                    <Logo className="w-[56px] h-[28px]" />
                </a>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex gap-[28px]">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="px-4 py-3 text-base text-gray-600 hover:text-black transition-colors duration-300"
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
                    className="md:hidden p-3 -m-3"
                >
                    <MenuIcon
                        className={`w-[25px] h-[23px] transition-colors duration-300 ${isMobileMenuOpen ? 'text-black' : 'text-gray-300'
                            }`}
                    />
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-white overflow-hidden px-[50px] transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
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
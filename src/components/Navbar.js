"use client";

import { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-md bg-black/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <h1 className="text-white text-2xl font-bold">EDAM</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10 text-sm text-gray-300">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <Link href="/about" className="hover:text-white transition">About</Link>
            <Link href="/services" className="hover:text-white transition">Services</Link>
            <Link href="/#" className="hover:text-white transition">Projects</Link>
            <Link href="/#" className="hover:text-white transition">Blog</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-white/10 hover:bg-blue-600 text-white p-3 rounded-full transition-all duration-300"
            >
              <FaFacebookF size={16} />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-white/10 hover:bg-pink-500 text-white p-3 rounded-full transition-all duration-300"
            >
              <FaInstagram size={16} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-white/10 hover:bg-[#1ebe5d] text-white p-3 rounded-full transition-all duration-300"
            >
              <FaWhatsapp size={18} />
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <XMarkIcon className="w-7 h-7" />
              ) : (
                <Bars3Icon className="w-7 h-7" />
              )}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md px-6 pb-6 pt-4 space-y-4 text-gray-300 text-sm">
            <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-white">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block hover:text-white">About</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="block hover:text-white">Services</Link>
            <Link href="/#" onClick={() => setIsOpen(false)} className="block hover:text-white">Projects</Link>
            <Link href="/#" onClick={() => setIsOpen(false)} className="block hover:text-white">Blog</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block hover:text-white">Contact</Link>
          </div>
        )}
      </div>
    </header>
  );
}
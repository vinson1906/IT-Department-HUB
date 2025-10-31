"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Disable scroll
      document.body.style.overflow = "hidden";
    } else {
      // Enable scroll again
      document.body.style.overflow = "";
    }

    // Cleanup (runs when component unmounts)
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7.5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-green-600">
              <Image
                src="/heroSection/logo.png"
                alt="SSM College of Engineering"
                height={250}
                width={250}
                className="w-40"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600">
              Notice Board
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-green-600"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-green-600"
            >
              Events
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div
            className={`md:hidden flex items-center ${
              isOpen ? "opacity-25" : "opacity-100"
            }`}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
            >
              {isOpen ? "" : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Background Blur Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        {/* Close Button Inside Drawer */}
        <div className="flex justify-between p-4">
          <Image
            src="/heroSection/logo.png"
            alt="SSM College of Engineering"
            height={250}
            width={250}
            className="w-25"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-green-600"
          >
            <X size={26} />
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col space-y-4 px-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-green-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-green-600"
            onClick={() => setIsOpen(false)}
          >
            Notice Board
          </Link>
          <Link
            href="/services"
            className="text-gray-700 hover:text-green-600"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-green-600"
            onClick={() => setIsOpen(false)}
          >
            Events
          </Link>
        </div>
      </div>
    </nav>
  );
}

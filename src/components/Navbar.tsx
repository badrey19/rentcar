import Link from "next/link";
import { useState } from "react";
import { useDarkMode } from "@/context/DarkModeContext";
import Image from "next/image";

const Navbar: React.FC = () => {
  const { isDark, toggleDark } = useDarkMode();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 shadow-md transition-colors duration-300
        ${isDark ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="RentCar Logo"
              width={120}
              height={40}
              priority
              className="w-28 sm:w-32 md:w-36 h-auto"
            />
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-6 items-center">
            {[
              { href: "/", label: "Beranda" },
              { href: "/#fleet", label: "Armada" },
              { href: "/#services", label: "Layanan" },
              { href: "/about", label: "Tentang" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  isDark ? "hover:text-blue-400" : "hover:text-blue-600"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Toggle Dark Mode */}
            <button
              onClick={toggleDark}
              className={`ml-4 p-2 rounded-lg transition-colors ${
                isDark
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {isDark ? "🌙" : "☀️"}
            </button>
          </div>

          {/* Mobile button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`focus:outline-none text-2xl transition-colors ${
                isDark
                  ? "text-gray-200 hover:text-blue-400"
                  : "text-gray-700 hover:text-blue-600"
              }`}
              aria-label="Toggle Menu"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        } ${isDark ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"}`}
      >
        <div className="px-6 py-4 space-y-3">
          {[
            { href: "/", label: "Beranda" },
            { href: "/fleet", label: "Armada" },
            { href: "/services", label: "Layanan" },
            { href: "/about", label: "Tentang" },
            { href: "/contact", label: "Kontak" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)} // Tutup menu setelah klik
              className={`block py-2 transition-colors ${
                isDark ? "hover:text-blue-400" : "hover:text-blue-600"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Toggle Dark Mode Mobile */}
          <button
            onClick={toggleDark}
            className={`mt-4 w-full p-2 rounded-lg transition-colors ${
              isDark
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {isDark ? "🌙 Mode Gelap" : "☀️ Mode Terang"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

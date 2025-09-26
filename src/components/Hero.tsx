"use client";

import Image from "next/image";
import Link from "next/link";
import { useDarkMode } from "@/context/DarkModeContext";
import { Typewriter } from "react-simple-typewriter";

const Hero: React.FC = () => {
  const { isDark } = useDarkMode();

  const slogans = [
    "Perjalanan Aman",
    "Pelayanan Profesional",
    "Harga Terjangkau",
    "Armada Lengkap"
  ];

  return (
    <section className="relative">
      {/* Hero Background */}
      <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/ayla.jpg"
          alt="Hero Car"
          fill
          priority
          className="object-cover object-center"
        />

        <div
          className={`absolute inset-0 transition-colors duration-300 ${
            isDark ? "bg-black/70" : "bg-black/50"
          }`}
        />

        <div className="relative z-10 max-w-3xl text-center px-6">
          <h1
            className={`text-4xl sm:text-6xl font-extrabold ${
              isDark ? "text-yellow-300" : "text-white"
            }`}
          >
            Sewa Mobil{" "}
            <span className={isDark ? "text-green-400" : "text-blue-500"}>Nyaman</span>{" "}
            &{" "}
            <span className={isDark ? "text-pink-400" : "text-blue-400"}>Terpercaya</span>
          </h1>

          <p
            className={`mt-6 text-lg sm:text-xl ${
              isDark ? "text-gray-300" : "text-gray-200"
            }`}
          >
            Temukan armada terbaik untuk perjalanan Anda. Harga transparan, sopir
            profesional, dan layanan 24 jam di seluruh Jawa Timur.
          </p>

          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <Link href="/fleet" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg font-semibold text-white shadow-md">
              🚗 Lihat Armada
            </Link>
            <Link
              href="#cta"
              className={`px-8 py-3 rounded-xl text-lg font-semibold shadow-md ${
                isDark ? "bg-gray-800 text-gray-200 hover:bg-gray-700" : "bg-white/90 text-blue-700 hover:bg-white"
              }`}
            >
              📞 Hubungi Kami
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Slogan Box */}
      <div className="relative z-20 -mt-12">
        <div
          className={`max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 text-center transition-colors duration-300`}
        >
          <p className={`text-xl sm:text-2xl font-semibold ${
            isDark ? "text-yellow-400" : "text-blue-600"
          }`}>
            <Typewriter
              words={slogans}
              loop={0} // infinite
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

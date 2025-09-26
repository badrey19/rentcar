import Link from "next/link";
import Image from "next/image";
import { useDarkMode } from "@/context/DarkModeContext";

const Footer: React.FC = () => {
  const { isDark } = useDarkMode();

  return (
    <footer
      className={`py-10 px-6 transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-700"
      }`}
    >
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="RentCar Logo"
              width={140}
              height={40}
              priority
            />
          </Link>
          <p className="mt-3 text-sm">
            Layanan sewa mobil terpercaya dengan armada terbaik di Jawa Timur.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Navigasi</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline">Beranda</Link></li>
            <li><Link href="#fleet" className="hover:underline">Armada</Link></li>
            <li><Link href="#services" className="hover:underline">Layanan</Link></li>
            <li><Link href="/about" className="hover:underline">Tentang</Link></li>
            <li><Link href="#cta" className="hover:underline">Kontak</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Layanan</h4>
          <ul className="space-y-2">
            <li>Sewa Harian</li>
            <li>Sewa Bulanan</li>
            <li>Dengan Sopir</li>
            <li>Luar Kota</li>
            <li>Antar Jemput</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Kontak</h4>
          <p>📍 Surabaya, Jawa Timur</p>
          <p>📞 +62 896-5226-2405</p>
          <p>✉️ support@rentcar.com</p>
        </div>
      </div>

      {/* Bottom */}
      <div
        className={`mt-10 pt-6 border-t text-center text-sm ${
          isDark ? "border-gray-700" : "border-gray-300"
        }`}
      >
        © {new Date().getFullYear()} RentCar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

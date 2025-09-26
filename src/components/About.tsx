import Image from "next/image";
import { useDarkMode } from "@/context/DarkModeContext";

const About: React.FC = () => {
  const { isDark } = useDarkMode();

  return (
    <section
      className={`py-20 px-6 sm:px-12 transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-gray-200" : "bg-white text-gray-900"
      }`}
      id="about"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative w-full h-80 sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/about-img.jpg"
            alt="Tentang Kami"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 flex items-center gap-2">
            Tentang
            <span className="inline-block ml-3">
              <Image
                src="/logo.svg"
                alt="RentCar Logo"
                width={200} // lebih kecil biar proporsional
                height={60}
                priority
              />
            </span>
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Kami adalah penyedia layanan sewa mobil terpercaya di Jawa Timur yang
            berkomitmen untuk memberikan pengalaman perjalanan yang aman, nyaman,
            dan terjangkau. Dengan berbagai pilihan armada mulai dari city car,
            SUV, hingga minibus, kami siap memenuhi kebutuhan perjalanan Anda.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            Didukung oleh tim profesional dan sopir berpengalaman, kami selalu
            mengutamakan kepuasan pelanggan serta menjaga kualitas layanan
            terbaik setiap saat.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              ✅ Armada lengkap & terawat
            </li>
            <li className="flex items-center gap-2">
              ✅ Harga transparan tanpa biaya tersembunyi
            </li>
            <li className="flex items-center gap-2">
              ✅ Layanan 24/7 siap membantu Anda
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

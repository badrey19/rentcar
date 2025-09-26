import { useDarkMode } from "@/context/DarkModeContext";
import { Car, Key, Plane, Building2 } from "lucide-react";

const services = [
  {
    title: "Sewa dengan Sopir",
    description: "Nikmati perjalanan tanpa repot dengan sopir berpengalaman.",
    icon: Car,
  },
  {
    title: "Lepas Kunci",
    description: "Kebebasan penuh mengemudi mobil pilihan Anda.",
    icon: Key,
  },
  {
    title: "Antar Jemput Kantor/Hotel",
    description: "Layanan praktis antar jemput untuk kebutuhan bisnis Anda.",
    icon: Building2,
  },
  {
    title: "Antar Jemput Bandara",
    description: "Perjalanan aman dan tepat waktu dari/ke bandara.",
    icon: Plane,
  },
];

const Services: React.FC = () => {
  const { isDark } = useDarkMode();

  return (
    <section
      className={`py-16 px-6 sm:px-12 transition-colors duration-300 ${
        isDark ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"
      }`}
      id="services"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">Layanan Kami</h2>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
          Kami menyediakan berbagai layanan untuk memenuhi kebutuhan perjalanan Anda
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className={`rounded-xl shadow-md p-8 text-center transition-transform hover:scale-105 ${
                isDark ? "bg-gray-900" : "bg-gray-50"
              }`}
            >
              <div
                className={`flex items-center justify-center w-16 h-16 rounded-full mx-auto mb-6 ${
                  isDark ? "bg-gray-700 text-yellow-300" : "bg-blue-100 text-blue-600"
                }`}
              >
                <Icon size={32} />
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-gray-500 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;

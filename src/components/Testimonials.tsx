import { useDarkMode } from "@/context/DarkModeContext";

const testimonials = [
  {
    name: "Budi Santoso",
    text: "Pelayanan sangat ramah, mobil bersih dan wangi. Perjalanan jadi nyaman sekali!",
    role: "Pengusaha",
  },
  {
    name: "Ayu Lestari",
    text: "Booking mudah dan cepat, harga transparan. Sopirnya profesional banget.",
    role: "Ibu Rumah Tangga",
  },
  {
    name: "Rizky Pratama",
    text: "Sewa mobil untuk liburan keluarga, armadanya baru dan sangat terawat.",
    role: "Karyawan Swasta",
  },
];

const Testimonials: React.FC = () => {
  const { isDark } = useDarkMode();

  return (
    <section
      className={`py-16 px-6 sm:px-12 transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-900"
      }`}
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Apa Kata Mereka?
        </h2>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
          Testimoni pelanggan yang sudah mempercayakan perjalanan mereka bersama kami
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-xl shadow-md transition hover:scale-[1.02] ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
          >
            <p className="text-lg italic">“{item.text}”</p>
            <div className="mt-4">
              <h3 className="font-semibold text-xl text-blue-600">
                {item.name}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

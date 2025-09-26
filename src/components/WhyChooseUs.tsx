import { useDarkMode } from "@/context/DarkModeContext";
import { ShieldCheck, Clock, Car, UserCheck } from "lucide-react"; // icon lucide-react

const features = [
  {
    title: "Harga Transparan",
    desc: "Tanpa biaya tersembunyi, semua jelas sejak awal.",
    icon: ShieldCheck,
  },
  {
    title: "Layanan 24 Jam",
    desc: "Kami siap membantu kapan pun Anda membutuhkan.",
    icon: Clock,
  },
  {
    title: "Armada Terawat",
    desc: "Mobil selalu dalam kondisi prima dan siap jalan.",
    icon: Car,
  },
  {
    title: "Sopir Profesional",
    desc: "Pengemudi berpengalaman, ramah, dan terpercaya.",
    icon: UserCheck,
  },
];

const WhyChooseUs: React.FC = () => {
  const { isDark } = useDarkMode();

  return (
    <section
      className={`py-20 px-6 sm:px-12 transition-colors duration-300 ${
        isDark ? "bg-gray-950 text-gray-200" : "bg-gray-100 text-gray-900"
      }`}
      id="why-choose-us"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Mengapa Memilih Kami?
        </h2>
        <p
          className={`mt-4 text-lg ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Kami hadir untuk memberikan pengalaman sewa mobil yang nyaman,
          aman, dan terpercaya bagi Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-8 rounded-2xl shadow-lg transition-all hover:scale-105 ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
          >
            <feature.icon
              size={48}
              className={`mx-auto mb-6 ${
                isDark ? "text-blue-400" : "text-blue-600"
              }`}
            />
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className={isDark ? "text-gray-400" : "text-gray-600"}>
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;

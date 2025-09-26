import Image from "next/image";
import Link from "next/link";
import { useDarkMode } from "@/context/DarkModeContext";
import { useState } from "react";

const cars = [
  { name: "Toyota Avanza", image: "/images/toyota-avanza.jpg", price: "Rp 350.000 / hari", link: "/fleet/avanza" },
  { name: "Daihatsu Xenia", image: "/images/xenia.jpg", price: "Rp 330.000 / hari", link: "/fleet/xenia" },
  { name: "Honda Brio", image: "/images/brio.jpg", price: "Rp 300.000 / hari", link: "/fleet/brio" },
  { name: "Mitsubishi Pajero", image: "/images/pajero.jpg", price: "Rp 700.000 / hari", link: "/fleet/pajero" },
  { name: "Toyota Agya", image: "/images/agya.jpg", price: "Rp 489.000 / hari", link: "/fleet/agya" },
  { name: "Suzuki Ertiga", image: "/images/ertiga.jpg", price: "Rp 379.000 / hari", link: "/fleet/ertiga" },
  { name: "Mitsubishi Expander", image: "/images/xpander.jpg", price: "Rp 469.000 / hari", link: "/fleet/expander" },
  { name: "Toyota Hiace", image: "/images/hiace.jpg", price: "Rp 499.000 / hari", link: "/fleet/hiace" },
  { name: "Isuzu Elf", image: "/images/isuzuelf.png", price: "Rp 579.000 / hari", link: "/fleet/isuzu-elf" },
  { name: "Toyota Vios", image: "/images/vios.jpg", price: "Rp 399.000 / hari", link: "/fleet/vios" },
  { name: "Honda City", image: "/images/city.jpg", price: "Rp 359.000 / hari", link: "/fleet/honda-city" },
  { name: "Camry", image: "/images/camry.jpg", price: "Rp 659.000 / hari", link: "/fleet/camry" },
  { name: "Toyota Rush", image: "/images/rush.jpg", price: "Rp 568.000 / hari", link: "/fleet/toyotarush" },
  { name: "Mercedes Benz", image: "/images/benz.jpg", price: "Rp 799.000 / hari", link: "/fleet/benz" },
  { name: "Suzuki Carry", image: "/images/carry.png", price: "Rp 439.000 / hari", link: "/fleet/carry" },
  { name: "Mitsubishi L300 Box", image: "/images/l300.png", price: "Rp 339.000 / hari", link: "/fleet/l300" },
  { name: "Colt Diesel", image: "/images/coltdiesel.png", price: "Rp 449.000 / hari", link: "/fleet/coltdiesel" },
];

const ITEMS_PER_PAGE = 8;

const Fleet: React.FC = () => {
  const { isDark } = useDarkMode();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(cars.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedCars = cars.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section
      className={`py-16 px-6 sm:px-12 transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-900"
      }`}
      id="fleet"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">Pilihan Armada Kami</h2>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
          Berbagai pilihan mobil untuk kebutuhan perjalanan Anda
        </p>
      </div>

      {/* Grid Armada */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {selectedCars.map((car, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-lg overflow-hidden transition-all hover:scale-105 ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
          >
            <Image
              src={car.image}
              alt={car.name}
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{car.name}</h3>
              <p className="mt-2 text-blue-600 font-medium">{car.price}</p>
              <Link
                href={car.link}
                className={`mt-4 inline-block px-5 py-2 rounded-lg font-medium shadow-md ${
                  isDark
                    ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Sewa Sekarang
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 gap-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg shadow-md ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : isDark
              ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-lg shadow-md ${
              currentPage === i + 1
                ? isDark
                  ? "bg-blue-500 text-white"
                  : "bg-blue-600 text-white"
                : isDark
                ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg shadow-md ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : isDark
              ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Fleet;

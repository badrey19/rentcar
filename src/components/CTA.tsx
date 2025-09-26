"use client";

import { useState } from "react";
import { useDarkMode } from "@/context/DarkModeContext";
import emailjs from "@emailjs/browser";
import { Mail } from "lucide-react";

interface FormData {
  from_name: string;
  email: string;
  message: string;
}

const CTA: React.FC = () => {
  const { isDark } = useDarkMode();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    from_name: "",
    email: "",
    message: "",
  });

  // handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // convert FormData object to plain object
    const emailData: Record<string, string> = { ...formData };

    emailjs
      .send(
        "service_c5fzo7v", // ganti dengan Service ID EmailJS
        "template_gjwty4x", // ganti dengan Template ID EmailJS
        emailData,
        "z7jkIUGHp-pWCrQHt" // ganti dengan Public Key EmailJS
      )
      .then(() => {
        alert("Email berhasil dikirim!");
        setIsFormOpen(false);
        setFormData({ from_name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Gagal mengirim email. Coba lagi nanti.");
      });
  };

  return (
    <section
      className={`py-16 px-6 text-center transition-colors duration-300 ${
        isDark ? "bg-blue-900 text-gray-100" : "bg-blue-600 text-white"
      }`}
      id="cta"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Siap Memulai Perjalanan Nyaman Anda?
        </h2>
        <p className="mt-4 text-lg opacity-90">
          Sewa mobil sekarang juga dengan harga terbaik dan pelayanan profesional.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          {/* Kirim Pesan → buka modal */}
          <button
            onClick={() => setIsFormOpen(true)}
            className="flex items-center justify-center gap-2 px-8 py-3 bg-white text-blue-700 font-semibold rounded-xl shadow-md hover:bg-gray-200 transition"
          >
            <Mail size={20} />
            Kirim Pesan
          </button>

          {/* Hubungi Kami → WhatsApp */}
          <a
            href="https://wa.me/6289652262405?text=Halo%20saya%20ingin%20sewa%20mobil"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center px-8 py-3 rounded-xl font-semibold shadow-md transition ${
              isDark
                ? "bg-gray-800 text-gray-100 hover:bg-gray-700"
                : "bg-blue-800 text-white hover:bg-blue-900"
            }`}
          >
            📞 Hubungi Kami
          </a>
        </div>
      </div>

      {/* Modal Form */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div
            className={`p-6 rounded-xl shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto ${
              isDark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
            }`}
          >
            <h3 className="text-xl font-bold mb-4 text-center">Kirim Pesan</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="from_name"
                placeholder="Nama"
                value={formData.from_name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                placeholder="Pesan Anda"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex justify-end gap-3 mt-2">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Kirim
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default CTA;

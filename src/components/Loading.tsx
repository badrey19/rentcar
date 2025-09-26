"use client";

// import { Typewriter } from "react-simple-typewriter";
import { useDarkMode } from "@/context/DarkModeContext";
// import { Loader2 } from "lucide-react";

const Loading: React.FC = () => {
  const { isDark } = useDarkMode();

  return (
    // <div
    //   className={`fixed inset-0 flex items-center justify-center z-50 ${
    //     isDark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
    //   }`}
    // >
    //   <h1 className="text-3xl sm:text-4xl font-bold">
    //     <Typewriter
    //       words={["Loading..."]}
    //       loop={0} // 0 = infinite
    //       cursor
    //       cursorStyle="|"
    //       typeSpeed={100}
    //       deleteSpeed={50}
    //       delaySpeed={1000}
    //     />
    //   </h1>
    // </div>
    // <div
    //   className={`fixed inset-0 flex items-center justify-center z-50 ${
    //     isDark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
    //   }`}
    // >
    //   <div className="flex space-x-2 text-3xl font-bold">
    //     <span className="animate-ping">.</span>
    //     <span className="animate-ping animation-delay-150">.</span>
    //     <span className="animate-ping animation-delay-300">.</span>
    //   </div>
    // </div>

    // <div
    //   className={`fixed inset-0 flex items-center justify-center z-50 ${
    //     isDark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
    //   }`}
    // >
    //   <Loader2 className="animate-spin text-6xl text-blue-600" />
    // </div>

    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isDark ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`block w-3 h-8 rounded-full ${
              isDark ? "bg-yellow-400" : "bg-blue-600"
            } animate-bounce`}
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loading;

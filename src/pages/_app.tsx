import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { DarkModeProvider } from "@/context/DarkModeContext";
import Navbar from "@/components/Navbar";
import LoadingLogo from "@/components/Loading"; // pastikan sudah dibuat
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <DarkModeProvider>
      <Navbar />
      {loading ? <LoadingLogo /> : <Component {...pageProps} />}
    </DarkModeProvider>
  );
}

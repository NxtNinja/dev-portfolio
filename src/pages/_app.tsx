import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/system";
import { Raleway } from "next/font/google";
import { useAtom } from "jotai/react";
import { ThemeAtom } from "@/utils/ThemeAtom";
import { useEffect } from "react";

const raleway = Raleway({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }: AppProps) {
  const [theme] = useAtom(ThemeAtom);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <NextUIProvider>
      <main className={raleway.className}>
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  );
}

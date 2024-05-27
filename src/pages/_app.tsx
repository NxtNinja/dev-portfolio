import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/system";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <main className={raleway.className}>
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  );
}

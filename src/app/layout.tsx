import NavBar from "@/components/NavBar";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { exo2, orbitron } from "./fonts";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Indie Gamer",
    template: "%s | Indie Gamer",
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
      <body className="bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="border-t py-3 text-center text-slate-500 text-xs">
          Game data and images courtesy of{" "}
          <a
            className="max-w-screen-sm text-orange-800  hover:text-red-500"
            href="http://rawg.io/"
            target="_blank"
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}

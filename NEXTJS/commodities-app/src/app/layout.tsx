import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/header";
import Sidebar from "@/app/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Commodities App",
  description: "Handle Commodities and forecast",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className={"h-screen flex overflow-hidden"}>
          <Sidebar />
          <div className={"flex-1 overflow-auto focus:outline-none"}>
            <Header />
            <main className={"flex-1 relative z-0 overflow-y-auto p-6"}>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

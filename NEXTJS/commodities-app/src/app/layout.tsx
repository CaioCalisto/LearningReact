import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

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
        <div className={"h-screen flex overflow-hidden bg-gray-200"}>
          <div
            className={"flex-col bg-gray-800 w-24 py-6 px-2 hidden md:block"}
          >
            <Image
              src={"/acme.svg"}
              alt={"Logo"}
              width={"0"}
              height={"0"}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
        <main className={"flex-1 overflow-auto focus:outline-none"}>
          {children}
        </main>
      </body>
    </html>
  );
}

'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/header";
import Sidebar from "@/app/sidebar";
import { QueryClient, QueryClientProvider } from "react-query";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </html>
  );
}

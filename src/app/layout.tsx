import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Aside from "@/views/layouts/aside";
import "@/assets/global.scss";
import { useStore } from "@/store/store";
import Toastify from "@/views/components/toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Toastify />
        {children}
      </body>
    </html>
  );
}

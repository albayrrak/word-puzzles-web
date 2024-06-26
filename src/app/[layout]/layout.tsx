import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/global.scss";
import Toastify from "@/views/components/toastify";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Word Puzzles Game",
  description: "Generated by create next app",
};


export default async function RootLayout({ children, params }: Readonly<{ children: React.ReactNode, params: { locale: string } }>) {
  const messages = await getMessages();


  return (
    <html lang={params.locale}>

      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Toastify />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

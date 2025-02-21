import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/dashboard/Header";
import WhatsappButton from "@/components/dashboard/WhatsappButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Plefixos Vidraçaria",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <div className="flex flex-col h-screen">
          <Header />
          <div className="flex-grow">{children}</div>
        </div>
        <WhatsappButton />
      </body>
    </html>
  );
}

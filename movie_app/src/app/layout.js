import {  Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "../components/Header";
import Providers from "./Providers";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Movie App",
  description: "Une plateforme de film avec nextjs et tailwindcss",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light"
     style={{ colorScheme: "light" }}>

      <body
        className={`${inter.variable} antialiased`}
      >
        <Providers>
        <Header />
        {children}
        </Providers>
      </body>
    </html>
  );
}

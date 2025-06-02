import {  Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "./components/Header";

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
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

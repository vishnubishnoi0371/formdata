"use client"
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Form Data</title>
      </head>
      <body className={`${inter.className} bg-black min-h-screen flex items-center justify-center`}>
        {children}
      </body>
    </html>
  );
}

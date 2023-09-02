import "./globals.css";
import React from "react";
import Header from "@/components/header/Header";

export const metadata = {
  title: "NFTのアプリケーション",
  description: "説明が入ります",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  );
}

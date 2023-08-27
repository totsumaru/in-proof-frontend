import './globals.css'
import React from "react";
import Header from "@/components/header/Header";


export const metadata = {
  title: "NFT View",
  description: "NFTをコレクション・閲覧することに特化したアプリケーションです。",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
    <body>
    <main className="min-h-screen">
      <Header/>
      {children}
    </main>
    </body>
    </html>
  )
}

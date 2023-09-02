"use client"

import React from "react";
import Link from "next/link";

export default function MasterHeader() {
  const navigation: { name: string, url: string }[] = [
    { name: "会社一覧", url: "/master/company" },
  ]

  return (
    <nav className="bg-indigo-800 shadow border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* 左側 */}
        <div className="flex items-center">
          <a href="/master/company" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">InProof master</span>
          </a>

          {/* ナビゲーション */}
          <div className="ml-7 flex">
            {navigation.map((nav, index) => (
              <div key={index} className="ml-3">
                <Link href={nav.url} className="text-gray-900 py-2 px-3 rounded bg-white hover:bg-indigo-50">
                  {nav.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

"use client"

import React, { useState } from "react";
import LogoutButton from "@/components/button/LogoutButton";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";

type Props = {
  slug: string
}

export default function AdminHeader({ slug }: Props) {
  const navigation: {
    name: string,
    url: string,
  }[] = [
    { name: "発行中のアイテム", url: `/guild/${slug}/admin/nft-list` },
    { name: "情報", url: `/guild/${slug}/admin/info` },
  ]

  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* 左側 */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">AuthApp</span>
          </a>

          {/* ナビゲーション */}
          <div className="ml-7 flex">
            {navigation.map((nav, index) => (
              <div key={index} className="ml-3">
                <Link href={nav.url} className="text-white py-2 px-3 rounded bg-gray-700 hover:bg-gray-600">
                  {nav.name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* スマホ時に表示: openボタン */}
        <button data-collapse-toggle="navbar-default" type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default" aria-expanded="false"
                onClick={() => setMenuOpen(prevState => !prevState)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="w-5 h-5 font-bold"/>
        </button>

        {/* 右側 */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-auto`} id="navbar-default">
          <ul
            className="font-medium flex items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50
             md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li><LogoutButton slug={slug}/></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

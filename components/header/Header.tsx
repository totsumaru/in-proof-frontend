"use client"

import React, { useState } from "react";
import LogoutButton from "@/components/button/LogoutButton";
import { Bars3Icon, HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Example() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    // <div className="h-16 shadow flex items-center justify-between px-4 sm:px-6 lg:px-8">
    //   <img
    //     className="h-8 w-auto"
    //     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
    //     alt="Your Company"
    //   />
    //   <LogoutButton/>
    // </div>

    <nav className="bg-white shadow border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AuthApp</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default" aria-expanded="false"
                onClick={() => setMenuOpen(prevState => !prevState)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="w-5 h-5 font-bold"/>
        </button>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-auto`} id="navbar-default">
          <ul
            className="font-medium flex items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href={"/mypage"} className="block py-2 pl-3 pr-4 text-gray-900 flex items-center">
                <HomeIcon className="w-5 h-5 inline text-gray-600 mr-1"/>
                マイページ
              </Link>
            </li>
            <li>
              <LogoutButton/>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

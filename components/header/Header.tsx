"use client"

import LoginButton from "@/components/button/LoginButton";

export default function Header() {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 shadow">
      <div className="flex h-16 justify-between">

        {/* 前半部分 */}
        <div className="flex">
        </div>

        {/* ボタン */}
        <div className="flex items-center">
          <LoginButton/>
        </div>

      </div>
    </div>
  )
}

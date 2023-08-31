"use client"

import React from "react";
import LogoutButton from "@/components/button/LogoutButton";

export default function Example() {
  return (
    <div className="h-16 shadow flex items-center justify-between px-4 sm:px-6 lg:px-8">
      <img
        className="h-8 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <LogoutButton/>
    </div>
  )
}

"use client";

import { Magic } from "magic-sdk";
import { magic } from "@/lib/magic";
import LoginButton from "@/components/button/LoginButton";
import Footer from "@/components/footer/Footer";
import React from "react";

const magicIns: Magic = magic as any;

export default function Login() {
  return (
    <div className="px-4">
      <div
        className="flex-grow py-20 flex flex-col justify-center items-center w-full max-w-sm shadow-2xl mx-auto border text-center rounded-2xl mt-12"
      >
        <h1 className="text-4xl font-bold">Auth App</h1>
        <p className="mt-3 mb-5">ログインをしてください</p>
        <LoginButton/>
      </div>
      <Footer/>
    </div>
  );
};

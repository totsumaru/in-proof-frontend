"use client";

import { Magic } from "magic-sdk";
import { magic } from "@/lib/magic";
import LoginButton from "@/components/button/LoginButton";
import Footer from "@/components/footer/Footer";
import React from "react";

const magicIns: Magic = magic as any;

export default function Page({
  params: { slug }
}: {
  params: { slug: string }
}) {
  return (
    <div className="px-4">
      <div
        className="bg-indigo-100 flex-grow pt-12 pb-20 flex flex-col justify-center items-center w-full max-w-sm shadow-2xl mx-auto border text-center rounded-2xl mt-12"
      >
        <p className="w-fit py-1 px-3 bg-yellow-100 rounded-md border border-yellow-400">管理者ページ</p>
        <p className="mt-5">株式会社ArGate</p>
        <h1 className="text-3xl font-bold mt-1">AuthApp</h1>
        <div className="mt-10">
          <LoginButton label="管理者でログイン" redirectUrl={`/admin/`}/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

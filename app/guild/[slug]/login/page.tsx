"use client";

import { Magic } from "magic-sdk";
import { magic } from "@/lib/magic";
import LoginButton from "@/components/button/LoginButton";
import Footer from "@/components/footer/Footer";
import React from "react";
import Header from "@/components/header/Header";

const magicIns: Magic = magic as any;

export default function Login({
  params: { slug }
}: {
  params: { slug: string }
}) {
  return (
    <>
      <Header slug={slug}/>
      <div className="px-4">
        <div
          className="flex-grow py-20 flex flex-col justify-center items-center w-full max-w-sm shadow-2xl mx-auto border text-center rounded-2xl mt-12"
        >
          <p>株式会社ArGate</p>
          <h1 className="text-4xl font-bold">Auth App</h1>
          <div className="mt-10">
            <LoginButton redirectUrl={`/guild/${slug}/user/mypage`}/>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

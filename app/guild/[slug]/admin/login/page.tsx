"use client";

import { Magic } from "magic-sdk";
import { magic } from "@/lib/magic";
import LoginButton from "@/components/button/LoginButton";
import Footer from "@/components/footer/Footer";
import React from "react";
import AdminHeader from "@/components/header/AdminHeader";

const magicIns: Magic = magic as any;

export default function AdminLogin({
  params: { slug }
}: {
  params: { slug: string }
}) {
  return (
    <>
      <AdminHeader slug={slug}/>
      <div className="px-4">
        <div
          className="bg-indigo-100 flex-grow pt-12 pb-20 flex flex-col justify-center items-center w-full max-w-sm shadow-2xl mx-auto border text-center rounded-2xl mt-12"
        >
          <p className="w-fit py-1 px-3 bg-yellow-100 rounded-md border border-yellow-400">管理者ページ</p>
          <p className="mt-5">株式会社ArGate</p>
          <h1 className="text-3xl font-bold mt-1">InProof</h1>
          <div className="mt-10">
            <LoginButton label="管理者でログイン" redirectUrl={`/guild/${slug}/admin/info`}/>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

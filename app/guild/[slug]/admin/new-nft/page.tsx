"use client"

import AdminHeader from "@/components/header/AdminHeader";
import { useState } from "react";
import InputForm from "@/components/input/InputForm";

export default function NewNFT({
  params: { slug }
}: {
  params: { slug: string }
}) {
  const [imageData, setImageData] = useState<string>("")
  const [title, setTitle] = useState<string>("")

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader slug={slug}/>
      <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
        <h1 className="text-2xl text-gray-900 font-bold">アイテムを新規作成</h1>

        <InputForm/>
      </div>
    </div>
  )
}
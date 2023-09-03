"use client"

import AdminHeader from "@/components/header/AdminHeader";
import NFTListTable from "@/components/table/admin/NFTListTable";

export default function NFTList({
  params: { slug }
}: {
  params: { slug: string }
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader slug={slug}/>
      <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
        <h1 className="text-2xl text-gray-900 font-bold">発行中のアイテム</h1>

        <div className="bg-white px-8 py-5 mt-5 shadow rounded-md ring-gray-700">
          <NFTListTable slug={slug}/>
        </div>
      </div>
    </div>
  )
}
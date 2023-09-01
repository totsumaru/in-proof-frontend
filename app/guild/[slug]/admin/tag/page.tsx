"use client"

import AdminHeader from "@/components/header/AdminHeader";
import TagTable from "@/components/table/admin/TagTable";

const tags = [
  { name: "研修1", color: "red" },
  { name: "研修2", color: "green" },
]

export default function Tag({
  params: { slug }
}: {
  params: { slug: string }
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader slug={slug}/>
      <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
        <h1 className="text-2xl text-gray-900 font-bold">タグの管理</h1>

        <div className="bg-white px-8 py-5 mt-5 shadow rounded-md ring-gray-700">
          <TagTable slug={slug}/>
        </div>
      </div>
    </div>
  )
}
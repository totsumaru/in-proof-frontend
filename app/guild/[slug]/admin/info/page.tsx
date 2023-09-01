"use client"

import AdminHeader from "@/components/header/AdminHeader";
import DashboardConf from "@/components/grid/dashbord/DashboardConf";

export default function AdminInfo({
  params: { slug }
}: {
  params: { slug: string }
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader slug={slug}/>
      <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
        <h1 className="text-2xl text-gray-900 font-bold">情報</h1>

        {/* 設定 */}
        <div className="mt-5">
          <DashboardConf/>
        </div>
      </div>
    </div>
  )
}
"use client"

import MasterHeader from "@/components/header/MasterHeader";
import CompanyTable from "@/components/table/master/CompanyTable";

export default function Master() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MasterHeader/>
      <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
        <h1 className="text-2xl text-gray-900 font-bold">会社一覧</h1>

        {/* 設定 */}
        <div className="mt-5">
          <CompanyTable/>
        </div>
      </div>
    </div>
  )
}
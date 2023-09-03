"use client"

import MasterHeader from "@/components/header/MasterHeader";
import EditCompanyForm from "@/components/input/EditCompanyForm";

export default function Master() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MasterHeader/>
      <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
        <h1 className="text-2xl text-gray-900 font-bold">編集</h1>

        <div className="mt-5">
          <EditCompanyForm/>
        </div>
      </div>
    </div>
  )
}
"use client"

import { PlusIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function NewCompanyButton() {
  return (
    <>
      <Link
        href={`master/company/new`}
        type="button"
        className="flex rounded-md bg-indigo-600 items-center pl-2 pr-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <PlusIcon className="inline w-4 h-4 font-bold mr-1"/>
        会社を作成
      </Link>
    </>
  )
}
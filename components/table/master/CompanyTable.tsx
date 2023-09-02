"use client"

import Link from "next/link";
import NewCompanyButton from "@/components/button/NewCompanyButton";

type company = {
  id: string
  name: string
  slug: string
  adminEmail: string[]
  contractAddress: string
  created: string
}

const companies: company[] = [
  {
    id: "1",
    name: "株式会社ArGate",
    slug: "argate",
    adminEmail: ["argate.inc@gmail.com"],
    contractAddress: "0xDb40277dd6B3d4f0971A982f9fE9Fd5D96905E0e",
    created: "2023-01-23",
  }
]

// 会社一覧のテーブルです
export default function CompanyTable() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <NewCompanyButton/>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 text-left text-sm font-semibold text-gray-900">
                    id
                  </th>
                  <th scope="col" className="py-3.5 text-left text-sm font-semibold text-gray-900">
                    名前
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    slug
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    管理者のEmail
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    コントラクトアドレス
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    作成日
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {companies.map((company, index) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                      {company.id}
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {company.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {company.slug}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {company.adminEmail}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {company.contractAddress}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {company.created}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <Link href={`/master/company/edit/${company.id}`}
                            className="text-indigo-600 hover:text-indigo-900"
                      >
                        編集
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
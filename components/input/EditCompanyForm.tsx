"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditCompanyForm() {
  const [name, setName] = useState<string>("")
  const [slug, setSlug] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const router = useRouter()

  return (
    <div className="pb-20">
      <div className="px-4 sm:px-0">
      </div>

      <form className="mt-5 bg-white shadow-lg ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
        <div className="px-4 py-6 sm:p-8">
          <div className="mt-3 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            {/* ID */}
            <div className="sm:col-span-4">
              <label htmlFor="website" className="block text-sm font-medium leading-6 text-gray-900">
                組織ID
              </label>
              <div className="mt-2">
                <p className="text-sm text-gray-600">ede66c43-9b9d-4222-93ed-5f11c96e08e2</p>
              </div>
            </div>

            {/* 作成日 */}
            <div className="sm:col-span-4">
              <label htmlFor="website" className="block text-sm font-medium leading-6 text-gray-900">
                作成日
              </label>
              <div className="mt-2">
                <p className="text-sm text-gray-600">2023-01-23</p>
              </div>
            </div>

            {/* 名前 */}
            <div className="sm:col-span-4">
              <label htmlFor="website" className="block text-sm font-medium leading-6 text-gray-900">
                会社名
              </label>
              <div className="mt-2">
                <div
                  className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="website"
                    id="website"
                    className="pl-3 block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* slug */}
            <div className="sm:col-span-4">
              <label htmlFor="website" className="block text-sm font-medium leading-6 text-gray-900">
                slug
              </label>
              <div className="mt-2">
                <p className="text-sm text-gray-600">argate</p>
              </div>
            </div>

            {/* 管理者のメールアドレス */}
            <div className="sm:col-span-4">
              <label htmlFor="website" className="block text-sm font-medium leading-6 text-gray-900">
                管理者のメールアドレス（カンマ区切り、スペース不要）
              </label>
              <div className="mt-2">
                <div
                  className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="website"
                    id="website"
                    className="pl-3 block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    value={name}
                    onChange={(e) => setSlug(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* コントラクトアドレス */}
            <div className="sm:col-span-4">
              <label htmlFor="website" className="block text-sm font-medium leading-6 text-gray-900">
                コントラクトアドレス
              </label>
              <div className="mt-2">
                <p className="text-sm text-gray-600">0xDb40277dd6B3d4f0971A982f9fE9Fd5D96905E0e</p>
              </div>
            </div>

            {/* メモ */}
            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                メモ（ユーザーには公開されません）
              </label>
              <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
              </div>
            </div>

          </div>
        </div>
        <div className="flex items-center justify-end gap-x-2 border-t border-gray-900/10 px-4 py-4 sm:px-8">
          <button
            type="button"
            className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            onClick={() => router.push(`/master/company`)}
          >
            キャンセル
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            更新
          </button>
        </div>
      </form>
    </div>
  )
}

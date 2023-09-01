"use client"

import React, { useState } from "react";
import Badge, { allBadgesColor, badgeColor } from "@/components/badge/Badge";
import { useRouter } from "next/navigation";

type Props = {
  slug: string
}

export default function EditTagForm({ slug }: Props) {
  const [name, setName] = useState<string>("")
  const [color, setColor] = useState<badgeColor>("gray")
  const [description, setDescription] = useState<string>("")
  const router = useRouter()

  return (
    <div className="pb-20">
      <div className="px-4 sm:px-0">
        <p className="mt-1 text-sm text-gray-600">
          タグを編集できます。
        </p>
      </div>

      <form className="mt-5 bg-white shadow-lg ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
        <div className="px-4 py-6 sm:p-8">
          <div className="">
            <Badge color={color} label={name}/>
          </div>
          <div className="mt-3 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            {/* 名前 */}
            <div className="sm:col-span-4">
              <label htmlFor="website" className="block text-sm font-medium leading-6 text-gray-900">
                名前
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

            {/* 説明 */}
            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                説明
              </label>
              <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
              </div>
            </div>

            {/* 色 */}
            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                色を選択
              </label>

              <div className="mt-2">
                <select
                  id="location"
                  name="location"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue="Canada"
                  onChange={(e) => setColor(e.target.value as badgeColor)}
                >
                  {allBadgesColor.map((badge, index) => (
                    <option value={badge.color} key={index}>
                      {badge.jp}
                    </option>
                  ))}
                </select>
              </div>
            </div>

          </div>
        </div>
        <div className="flex items-center justify-end gap-x-2 border-t border-gray-900/10 px-4 py-4 sm:px-8">
          <button
            type="button"
            className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            onClick={() => router.push(`/guild/${slug}/admin/tag`)}
          >
            キャンセル
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            更新する
          </button>
        </div>
      </form>
    </div>
  )
}

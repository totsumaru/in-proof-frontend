"use client"

import NewTagButton from "@/components/button/NewTagButton";
import Badge, { allBadgesColor, badgeColor } from "@/components/badge/Badge";
import Link from "next/link";

type badge = {
  id: string
  name: string
  description: string
  color: badgeColor
}

const badges: badge[] = [
  { id: "a", name: "研修1", description: "研修1に参加したことの証明", color: "red" },
  { id: "b", name: "研修2", description: "研修2に参加したことの証明", color: "yellow" },
  { id: "c", name: "研修3", description: "研修3に参加したことの証明", color: "blue" },
]

type Props = {
  slug: string
}

export default function TagTable({ slug }: Props) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <NewTagButton slug={slug}/>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                  </th>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    表示名
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    説明
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    色
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    表示
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {badges.map((badge, index) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{index + 1}</td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {badge.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{badge.description}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{allBadgesColor[badge.color]}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <Badge color={badge.color} label={badge.name}/>
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <Link href={`/guild/${slug}/admin/tag/edit?id=${badge.id}`}
                            className="text-indigo-600 hover:text-indigo-900">
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
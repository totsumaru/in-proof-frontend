"use client"

import Link from "next/link";
import AvatarPlaceHolder from "@/components/avatar/AvatarPlaceHolder";

const people = [
  { name: "戸塚翔太", email: "argate.inc@gmail.com" },
  { name: "戸塚翔太", email: "argate.inc@gmail.com" },
  { name: "戸塚翔太", email: "argate.inc@gmail.com" },
  { name: "戸塚翔太", email: "argate.inc@gmail.com" },
  { name: "戸塚翔太", email: "argate.inc@gmail.com" },
  { name: "戸塚翔太", email: "argate.inc@gmail.com" },
  { name: "戸塚翔太", email: "argate.inc@gmail.com" },
  { name: "戸塚翔太", email: "argate.inc@gmail.com" },
  { name: "戸塚翔太", email: "argate.inc@gmail.com" },
  { name: "戸塚翔太", email: "argate.inc@gmail.com" },
]

export default function NFT({
  params: { contractId, tokenId }
}: {
  params: { contractId: string, tokenId: string }
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
      <div>
        <Link href={`/user/0xabcd0123`}>
          マイページに戻る
        </Link>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="sm:w-1/3">
          <img src="https://i.seadn.io/gcs/files/92e9fd146e8c4bb8bf8f928f5ba0c18e.jpg?auto=format&dpr=1&w=384"
               alt="nft"
               className=""
          />
        </div>

        {/* NFTの概要 */}
        <div className="ml-5">
          <h1 className="text-2xl font-bold">MIRAKO. season1</h1>
          <div className="flex gap-2 mt-3">
            <span
              className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20">
              Badge
            </span>
            <span
              className="inline-flex items-center rounded-md bg-red-400/10 px-2 py-1 text-xs font-medium text-red-400 ring-1 ring-inset ring-red-400/20">
              Badge
            </span>
          </div>
          <p className="mt-2">
            研修に参加した人に配布されるNFTです。
          </p>
        </div>
      </div>

      <div className="mt-5 mb-10">
        <h2 className="text-xl font-bold">このアイテムを持っている人 </h2>
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {people.map((person) => (
            <div
              key={person.email}
              className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:border-gray-400"
            >
              <div className="flex-shrink-0">
                <AvatarPlaceHolder/>
              </div>
              <div className="min-w-0 flex-1">
                <Link href={`/user/0xabcd0123`} className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true"/>
                  <p className="text-sm font-medium text-gray-900">{person.name}</p>
                  <p className="truncate text-sm text-gray-500">{person.email}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
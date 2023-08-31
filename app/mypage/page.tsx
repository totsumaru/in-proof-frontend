"use client";

import { Magic } from "magic-sdk";
import { magic } from "@/lib/magic";
import React from "react";
import { useRouter } from "next/navigation";
import Collection from "@/components/image/collection/Collection";

const magicIns: Magic = magic as any;

// ユーザーのダッシュボードです
export default function MyPage({
  params: { address }
}: {
  params: { address: string }
}) {
  const router = useRouter()

  return (
    <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
      <div>
        <h3 className="text-gray-900">
          株式会社ArGate: 計画課
        </h3>
        <h1 className="text-gray-900 text-xl font-bold">
          戸塚 翔太
        </h1>
        <p className="text-gray-600 text-sm mt-1">
          argate.inc@gmail.com
        </p>
        <p>
          <span className="text-gray-600 text-sm">Address: </span>
          <span
            className="inline-flex items-center rounded-md bg-gray-100 px-3 py-0.5 text-xs font-medium text-gray-600">
            0xDb40277dd6B3d4f0971A982f9fE9Fd5D96905E0e
          </span>
        </p>
      </div>
      <div className="my-5">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">コレクション</h1>
        <Collection/>
      </div>
    </div>
  )
}

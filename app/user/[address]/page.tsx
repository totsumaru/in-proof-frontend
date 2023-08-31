"use client";

import { Magic } from "magic-sdk";
import { magic } from "@/lib/magic";
import React from "react";
import Collection from "@/components/list/collection/Collection";
import UserBlock from "@/components/user/UserBlock";
import { UserIcon } from "@heroicons/react/24/outline";
import Title from "@/components/text/Title";

const magicIns: Magic = magic as any;

// ユーザーのダッシュボードです
export default function User(
  {
    params: { address }
  }: {
    params: { address: string }
  }
) {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
      <h1 className="text-xl font-bold flex items-center">
        <UserIcon className="w-5 h-5 inline text-gray-600 mr-1"/>
        ユーザーの表示
      </h1>
      <div className="mt-5">
        <UserBlock
          name={"戸塚翔太"}
          email={"argate.inc@gmail.com"}
          address={"0xDb40277dd6B3d4f0971A982f9fE9Fd5D96905E0e"}
          department={"計画課"}
        />
      </div>
      <div className="my-7">
        <Title text={"コレクション"} icon={<></>}/>
        <Collection/>
      </div>
    </div>
  )
}

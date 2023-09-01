"use client"

import { Magic } from "magic-sdk";
import { magic } from "@/lib/magic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ButtonSpinnerSVG from "@/public/ButtonSpinnerSVG";

const magicIns: Magic = magic as any;

type Props = {
  slug: string
}

export default function LogoutButton({ slug }: Props) {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)

  const clickHandler = async () => {
    setLoading(true)

    try {
      await magicIns.user.logout()
      router.push(`/guild/${slug}/login`)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      type="button"
      className="rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50
       focus-visible:outline focus-visible:outline-2
       focus-visible:outline-offset-2 focus-visible:outline-indigo-600 inline-flex items-center"
      onClick={clickHandler}
    >
      {loading && (
        <div className="flex items-center">
          <ButtonSpinnerSVG/>
        </div>
      )}
      ログアウト
    </button>
  )
}
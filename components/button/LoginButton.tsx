"use client"

import { useRouter } from "next/navigation";
import { Magic } from "magic-sdk";
import { magic } from "@/lib/magic";
import { useState } from "react";
import ButtonSpinnerSVG from "@/public/ButtonSpinnerSVG";

const magicIns: Magic = magic as any;

type Props = {
  label?: string
  redirectUrl?: string
}

// ログインボタンです
export default function LoginButton({ label, redirectUrl }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false)

  // Emailの入力フォームを開きます
  const handleLoginWithEmail = async () => {
    setLoading(true)
    try {
      const addresses = await magicIns.wallet.connectWithUI()
      if (addresses) {
        redirectUrl
          ? router.push(redirectUrl)
          : router.push(`/user/${addresses[0]}`)
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      disabled={loading}
      type="button"
      onClick={handleLoginWithEmail}
      className="rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500
       focus-visible:outline focus-visible:outline-2
       focus-visible:outline-offset-2 focus-visible:outline-indigo-600 inline-flex items-center"
    >
      {loading && (
        <div className="flex items-center">
          <ButtonSpinnerSVG/>
        </div>
      )}
      {label ? label : "ログイン"}
    </button>
  )
}
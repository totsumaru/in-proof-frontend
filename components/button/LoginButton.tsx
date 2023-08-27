"use client"

// ログインボタンです
import {ConnectWallet, useAddress} from "@thirdweb-dev/react";
import Provider from "@/components/ThirdWeb/Provider";
import { CheckCircleIcon } from '@heroicons/react/20/solid'

export default function LoginButton() {
  return (
    <>
      <Provider>
        <ConnectWallet
          btnTitle="ウォレット接続"
          modalTitle="ログイン"
          detailsBtn={() => {
            return (
              <button
                type="button"
                className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <CheckCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                {shortenAddress(useAddress()!)}
              </button>
            )
          }}
        />
      </Provider>
    </>
  )
}

// アドレスを省略します
function shortenAddress(address: string): string {
  if (!address) {
    return ""
  }

  const start = address.substring(0, 6);  // 頭の6文字
  const end = address.substring(address.length - 4);  // 最後の4文字
  return `${start}...${end}`;
}
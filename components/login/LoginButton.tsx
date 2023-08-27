"use client"

// ログインボタンです
import {ConnectWallet, useAddress} from "@thirdweb-dev/react";
import Provider from "@/components/ThirdWeb/Provider";

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
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
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
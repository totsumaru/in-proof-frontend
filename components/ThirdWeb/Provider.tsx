"use client"

import {ThirdwebProvider} from "@thirdweb-dev/react";
import React from "react";

// ThirdWebのProviderです。
// トップレベルに配置すると、全てclient componentになるので、毎回これでラップします。
export default function Provider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThirdwebProvider activeChain="ethereum" clientId={process.env.THIRDWEB_CLIENT_ID}>
      {children}
    </ThirdwebProvider>
  )
}

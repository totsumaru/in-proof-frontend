"use client";

import { useEffect, useState } from "react";
import { Magic } from "magic-sdk";
import { magic } from "@/lib/magic";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";

const magicIns: Magic = magic as any;

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true)
  const [metadata, setMetadata] = useState<any>()
  const router = useRouter()

  useEffect(() => {
    (async () => {
      try {
        const userMetadata = await magicIns.user.getMetadata()
        setLoading(false)
        setMetadata(userMetadata)
      } catch (error) {
        router.push("/login")
      }
    })()
  }, [router])

  return (
    <div className="max-w-screen-lg mx-auto mt-4">
      {loading ? (
        <Loading/>
      ) : (
        <div>
          <div className="text-black mt-8">Email</div>
          <div>{metadata.email}</div>

          <div className="text-black mt-8">User Id</div>
          <div>{metadata.issuer}</div>
        </div>
      )}
    </div>
  );
}

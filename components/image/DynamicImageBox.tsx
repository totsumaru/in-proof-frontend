"use client"

import dynamic from "next/dynamic"

const DynamicImageBox = dynamic(() => import("./ImageBox"), {
  ssr: false,
  loading: () => <Skeleton/>
})

function Skeleton() {
  return (
    <div className="relative aspect-square rounded-xl">
      <div className="rounded-xl h-40 w-40 bg-gray-200"/>
      <div className="mt-2 rounded-xl h-5 w-40 bg-gray-100"/>
    </div>
  )
}

export default DynamicImageBox

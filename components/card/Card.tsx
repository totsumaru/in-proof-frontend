"use client"

import Link from "next/link";

type Props = {
  key: any
  imageUrl: string
  title: string
  text: string
  tag: string
  slug: string
  tokenId: number
}

export default function Card({ key, imageUrl, title, text, tag, slug, tokenId }: Props) {
  return (
    <div className="relative aspect-square rounded-xl" key={key}>
      <Link href={`/guild/${slug}/nft/${tokenId}`} className="hover:opacity-75">
        <div>
          <img className="rounded-xl" src={imageUrl} alt="" loading="lazy"/>
        </div>
        <div>
          <p className="my-1 text-sm font-bold text-gray-700">{title}</p>
          <p className="text-sm text-gray-600">
            {text}
          </p>
        </div>
        <div>
          <span
            className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
            {tag}
          </span>
        </div>
      </Link>
    </div>
  )
}
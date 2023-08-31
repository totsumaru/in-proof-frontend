import dynamic from "next/dynamic"

// スケルトン対応した画像です
const ImageWithSkeleton = dynamic(() => Promise.resolve(Image), {
  ssr: false,
  loading: () => <Skeleton/>
})

function Skeleton() {
  return (
    <div className="relative aspect-square rounded-xl">
      <div className="rounded-xl h-full w-full bg-gray-200"/>
    </div>
  )
}

export default ImageWithSkeleton

type Props = {
  imageUrl: string
  alt: string
}

function Image({ imageUrl, alt }: Props) {
  return (
    <img src={imageUrl} alt={alt} className="rounded-xl"/>
  )
}
"use client"

type Props = {
  key: any
  imageUrl: string
  text: string
}

const ImageBox = ({key, imageUrl, text}: Props) => {
  return (
    <div className="relative aspect-square rounded-xl" key={key}>
      <img className="rounded-xl" src={imageUrl} alt="" loading="lazy"/>
      <p className="my-1 text-sm font-bold text-gray-700">{text}</p>
    </div>
  )
}

export default ImageBox
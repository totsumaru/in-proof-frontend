type Props = {
  text: string
}

export default function CollectionName({text}: Props) {
  return (
    <h2 className="text-lg text-gray-600 font-bold border-b">
      {text}
    </h2>
  )
}
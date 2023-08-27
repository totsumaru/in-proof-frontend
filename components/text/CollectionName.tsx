type Props = {
  text: string
}

export default function CollectionName({text}: Props) {
  return (
    <h2 className="text-lg">
      {text}
    </h2>
  )
}
import {ReactNode} from "react";

type Props = {
  text: string
  icon: ReactNode
}

export default function Title({text, icon}: Props) {
  return (
    <div className="inline-flex items-center gap-x-1">
      {icon}
      <h1 className="text-xl font-bold text-gray-900">
        {text}
      </h1>
    </div>
  )
}
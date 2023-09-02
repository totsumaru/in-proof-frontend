export type badgeColor = "gray" | "red" | "yellow" | "green" | "blue" | "indigo" | "purple" | "pink"

// 全てのバッジの配列です
// バッジを選択する場合は、これをリストとして使用します。
export const allBadgesColor: Record<badgeColor, string> = {
  gray: "グレー",
  red: "赤",
  yellow: "黄色",
  green: "緑",
  blue: "青",
  indigo: "藍色",
  purple: "紫",
  pink: "ピンク",
};

type Props = {
  color: badgeColor
  label: string
}

export default function Badge({ color, label }: Props) {
  switch (color) {
    case "gray":
      return (
        <span
          className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          {label}
        </span>
      )
    case "red":
      return (
        <span
          className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
          {label}
        </span>
      )
    case "yellow":
      return (
        <span
          className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
          {label}
        </span>
      )
    case "green":
      return (
        <span
          className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
          {label}
        </span>
      )
    case "blue":
      return (
        <span
          className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
          {label}
        </span>
      )
    case "indigo":
      return (
        <span
          className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
          {label}
        </span>
      )
    case "purple":
      return (
        <span
          className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
          {label}
        </span>
      )
    case "pink":
      return (
        <span
          className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
          {label}
        </span>
      )
  }
}
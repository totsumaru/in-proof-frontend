type Props = {
  name: string
  email: string
  address: string
  department: string
}

export default function UserBlock({ name, email, address, department }: Props) {
  return (
    <div className="p-3 sm:p-5 shadow border-indigo-700 border-2 w-fit rounded-md bg-indigo-50 max-w-full">
      <h3 className="text-gray-900 text-sm">{department}</h3>
      <h1 className="text-gray-900 text-xl font-bold mt-1">{name}</h1>
      <p className="text-gray-600 text-sm mt-1">{email}</p>
      <p>
        <span className="text-gray-600 text-sm">アドレス: </span>
        <span
          className="inline-flex items-center rounded-md bg-gray-100 sm:px-2 py-0.5 text-xs font-medium text-gray-600 border">
          {address}
        </span>
      </p>
    </div>
  )
}
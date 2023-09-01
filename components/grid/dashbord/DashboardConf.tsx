"use client"

const config = [
  { key: "組織ID", value: "ede66c43-9b9d-4222-93ed-5f11c96e08e2" },
  { key: "会社名", value: "株式会社ArGate" },
  { key: "slug ※urlに使われるid", value: "argate" },
  { key: "管理者のメールアドレス", value: "argate.inc@gmail.com" },
  { key: "コントラクトアドレス", value: "0xDb40277dd6B3d4f0971A982f9fE9Fd5D96905E0e" },
]

export default function DashboardConf() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {config.map((value) => (
          <div
            key={value.value}
            className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm"
          >
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold text-gray-900">{value.key}</p>
              <p className="truncate text-sm text-gray-500">{value.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
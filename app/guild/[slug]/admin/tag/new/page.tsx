import AdminHeader from "@/components/header/AdminHeader";

export default function NewTag({
  params: { slug }
}: {
  params: { slug: string }
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader slug={slug}/>
      <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
        タグの新規作成
      </div>
    </div>
  )
}
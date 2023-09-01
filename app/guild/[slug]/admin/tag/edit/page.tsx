import AdminHeader from "@/components/header/AdminHeader";
import EditTagForm from "@/components/input/EditTagForm";

export default function EditTag({
  params: { slug }
}: {
  params: { slug: string }
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader slug={slug}/>
      <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
        <h1 className="text-2xl text-gray-900 font-bold">タグの編集</h1>

        <EditTagForm slug={slug}/>
      </div>
    </div>
  )
}
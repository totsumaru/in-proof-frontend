"use client"

export default function Index() {
  return (
    <>
      <h1 className="text-xl font-bold">TOPです</h1>
      <a href={`/guild/argate/login`} className="block">ログイン</a>
      <a href={`/guild/argate/user/mypage`} className="block">mypage</a>
      <a href={`/guild/argate/admin/login`} className="block">管理者ログイン</a>
      <a href={`/guild/argate/admin/info`} className="block">管理者情報</a>
    </>
  )
}
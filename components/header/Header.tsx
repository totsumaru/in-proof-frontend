"use client";

import { magic } from "@/lib/magic";
import { Magic } from "magic-sdk";
import { useRouter } from "next/navigation";

const magicIns: Magic = magic as any;

export default function Header() {
  const router = useRouter();

  const logout = () => {
    magicIns.user.logout().then(() => {
      router.push("/login");
    });
  };

  return (
    <header className=" bg-gray-100">
      <button onClick={logout}>
        ログアウト
      </button>
    </header>
  );
};

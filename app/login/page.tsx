"use client";

import { Magic } from "magic-sdk";
import { magic } from "@/lib/magic";
import LoginButton from "@/components/button/LoginButton";

const magicIns: Magic = magic as any;

export default function Login() {
  return (
    <div className="">
      <LoginButton/>
    </div>
  );
};

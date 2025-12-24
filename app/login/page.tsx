"use client";

import Link from "next/link";
import LoginForm from "../ui/components/form";

export default function page() {
  return (
    <div>
      <Link href="/" className="text-blue-500">
        Home
      </Link>
      <LoginForm route="/token"></LoginForm>
    </div>
  );
}

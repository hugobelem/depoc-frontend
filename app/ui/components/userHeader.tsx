import { getUser } from "@/app/lib/api/user/api";
import Link from "next/link";

interface UserHeaderProps {
  href: string;
}

export async function UserHeader({ href = "#" }: UserHeaderProps) {
  const user = await getUser();
  const userName = user?.name.toUpperCase() ?? "?";
  const userEmail = user?.email ?? "?";
  return (
    <div className="relative flex items-center gap-x-4">
      <div className="flex gap-x-1 justify-center">
        <button className="w-9 h-9 rounded-md text-zinc-700 bg-black/5 cursor-default">
          {userName[0]}
        </button>
      </div>

      <div className="text-sm leading-5">
        <p className="font-semibold text-black">
          <Link href={href} className="relative">
            <span className="absolute inset-0"></span>
            {userName.split(" ")[0]}
          </Link>
        </p>
        <p className="text-zinc-500">{userEmail}</p>
      </div>
    </div>
  );
}

import Link from "next/link";
import { getUser } from "@/app/lib/api/user/api";
import { UserHeader } from "./userHeader";

interface HeaderProps {
  description: string;
  href?: string;
}

export async function Header({ description, href = "#" }: HeaderProps) {
  const user = await getUser();
  const userName = user?.name.toUpperCase() ?? "?";
  const userEmail = user?.email ?? "?";
  return (
    <section>
      <div className="rounded-lg justify-between items-end lg:flex flex-col hidden p-4 h-full relative">
        <div className="w-full">
          <UserHeader href={href}></UserHeader>
        </div>

        <div className="absolute top-0 right-0 p-4 text-xl leading-5">
          <div className="relative inline-block group">
            <Link href={href} className="text-black outline-none cursor-pointer">
              ...
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 p-4 leading-4">
          <span className="text-[12px] text-zinc-400">{description}</span>
        </div>
      </div>

      {/* Mobile */}
      <div className="static col-span-2 lg:hidden lg:row-span-1 rounded-lg p-4">
        <Link href={href} className="w-full">
          <div className="relative flex items-center gap-4">
            <div className="flex justify-center">
              <button className="w-9 h-9 rounded-md text-zinc-700 bg-black/5">
                {userName[0]}
              </button>
            </div>
            <div className="text-sm leading-5">
              <p className="font-semibold text-primary">
                {userName.split(" ")[0]}
              </p>
              <p className="text-zinc-500">{userEmail}</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

import Link from "next/link";
import { UserAPI } from "@/app/lib/api/user/api";

interface HeaderProps {
  description: string;
  href?: string;
}

export async function Header({ description, href = "#" }: HeaderProps) {
  const user = await UserAPI();
  const userName = user?.name.toUpperCase() ?? "?";
  const userEmail = user?.email ?? "?";
  return (
    <section>
      <div className="rounded-lg justify-between items-end lg:flex flex-col hidden p-4 h-full bg-white relative">
        <div className="w-full">
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

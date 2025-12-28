import Link from "next/link";

interface HeaderProps {
  firstName: string;
  email: string;
  description: string;
  href?: string;
}

interface HeaderMobileProps {
  firstName: string;
  email: string;
  href?: string;
}

export function Header({
  firstName,
  email,
  description,
  href = "#",
}: HeaderProps) {
  return (
    <div className="rounded-lg justify-between items-end lg:flex flex-col hidden p-4 h-full bg-white relative">
      <div className="w-full">
        <div className="relative flex items-center gap-x-4">
          <div className="flex gap-x-1 justify-center">
            <button className="w-9 h-9 rounded-md text-zinc-700 bg-black/5 cursor-pointer">
              {firstName[0]}
            </button>
          </div>

          <div className="text-sm leading-5">
            <p className="font-semibold text-black">
              <Link href={href} className="relative">
                <span className="absolute inset-0"></span>
                {firstName}
              </Link>
            </p>
            <p className="text-zinc-500">{email}</p>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 p-4 text-xl leading-5">
        <div className="relative inline-block group">
          <button className="text-black outline-none cursor-pointer">
            ...
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 p-4 leading-4">
        <span className="text-[12px] text-zinc-400">{description}</span>
      </div>
    </div>
  );
}

export function HeaderMobile({
  firstName,
  email,
  href = "#",
}: HeaderMobileProps) {
  return (
    <div className="static col-span-2 lg:hidden lg:row-span-1 rounded-lg p-4">
      <Link href={href} className="w-full">
        <div className="relative flex items-center gap-4">
          <div className="flex justify-center">
            <button className="w-9 h-9 rounded-md text-zinc-700 bg-black/5">
              {firstName[0]}
            </button>
          </div>
          <div className="text-sm leading-5">
            <p className="font-semibold text-primary">{firstName}</p>
            <p className="text-zinc-500">{email}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

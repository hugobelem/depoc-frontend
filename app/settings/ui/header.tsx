import { UserHeader } from "@/app/ui/components/userHeader";
import Link from "next/link";

export function Header() {
  return (
    <div>
      <div className="flex items-center">
        <UserHeader href="/settings"></UserHeader>
        <Link href="/logout" className="flex ml-auto">
          <svg
            className="w-5 h-5 text-zinc-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.2"
              d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
            />
          </svg>
        </Link>
      </div>

      <div className="my-4 h-px w-full bg-black/10" />

      <div className="p-4">
        <p className="text-4xl text-center font-semibold text-black">
          <kbd>settings</kbd>
        </p>
      </div>
    </div>
  );
}

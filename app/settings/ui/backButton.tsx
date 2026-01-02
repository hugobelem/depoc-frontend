import Link from "next/link";

export function BackButton() {
  return (
    <div className="absolute top-1 p-4 left-2 sm:left-3 flex items-center">
      <div className="flex justify-center">
        <Link href="/" className="w-9 h-9">
          <svg
            className="w-6 h-6 text-zinc-400"
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
              strokeWidth="2"
              d="m15 19-7-7 7-7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
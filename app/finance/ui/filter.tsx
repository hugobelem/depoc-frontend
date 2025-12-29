import Link from "next/link";

export default function FilterButtons() {
  return (
    <div className="overflow-hidden sm:px-3 col-span-2 relative">
      <div className="relative overflow-auto flex">
        <div className="overflow-x-auto px-2 pb-1 pt-2 sm:pt-2 flex gap-3">
          <Link
            href="/finance"
            className="
            tracking-wide
            px-3 sm:px-3 py-[1.5px] sm:py-0.75
            ring-1
            text-[14px]
            text-black/40
            ring-black/10
            relative  
            rounded-full shrink-0"
          >
            <span className="">all</span>
          </Link>

          <Link
            href=""
            className="tracking-wide px-3 sm:px-3 py-[1.5px] sm:py-0.75 ring-1 text-[14px] text-black/40 ring-black/10 relative rounded-full shrink-0"
          >
            <span>today</span>
          </Link>

          <Link
            href=""
            className="tracking-wide px-3 sm:px-3 py-[1.5px] sm:py-0.75 ring-1 text-[14px] text-black/40 ring-black/10 relative rounded-full shrink-0"
          >
            <span className="">week</span>
          </Link>

          <Link
            href=""
            className="tracking-wide px-3 sm:px-3 py-[1.5px] sm:py-0.75 ring-1 text-[14px] text-black/40 ring-black/10 relative rounded-full shrink-0"
          >
            <span className="">december</span>
          </Link>

          <Link
            href=""
            className="tracking-wide px-1 py-[1.5px] sm:0.75 text-[14px] text-black/40 relative rounded-full shrink-0"
          >
            <svg
              className="w-5 h-5 text-black/15"
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
                d="M6 18 17.94 6M18 18 6.06 6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

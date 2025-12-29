import Link from "next/link";
import clsx from "clsx";
import { FinanceAPI } from "@/app/lib/api/finance/accounts/api";
import formatBalance from "@/app/lib/utils/formatBalance";

export default async function Header() {
  const results = await FinanceAPI();
  return (
    <div className="col-span-2">
      <button className="mt-2 mb-2 flex justify-start px-1 sm:px-4 outline-none cursor-pointer">
        <svg
          className="size-5 text-black/40"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
          />
        </svg>
      </button>

      <div className="overflow-hidden sm:px-3 relative">
        <div className="relative overflow-auto flex">
          <div className="overflow-x-auto px-1 pt-1 pb-5 flex gap-2">
            {results?.map((result) => (
              <Link
                href="#"
                key={result.account.id}
                className="ring-1 ring-zinc-200 shadow-sm shadow-black/10 bg-white/60 p-4 relative rounded-lg min-h-37.5 sm:min-h-50 min-w-37.5 sm:min-w-50 shrink-0"
              >
                <p className="absolute text-sm sm:text-[15px] text-black/40 top-4 left-4">
                  {result.account.name.toLowerCase()}
                </p>
                <p className="absolute text-sm text-black/40 bottom-4 left-4 hidden sm:block">
                  R$
                  <span
                    className={clsx(
                      "text-black text-[clamp(1rem,4vw,1.3rem)]",
                      { "text-orange-600": result.account.balance < 0 }
                    )}
                  >
                    {formatBalance(result.account.balance)}
                  </span>
                </p>
                <p className="absolute bottom-10 left-4 text-sm text-black/40 block sm:hidden">
                  R$
                </p>
                <p
                  className={clsx(
                    "absolute bottom-4 left-4 text-black text-[clamp(0.9rem,4vw,1.25rem)] block sm:hidden",
                    { "text-orange-600": result.account.balance < 0 }
                  )}
                >
                  {formatBalance(result.account.balance)}
                </p>
              </Link>
            ))}

            <button className="outline-none ring-1 ring-black/5 relative rounded-lg min-h-37.5 sm:min-h-50 min-w-37.5 sm:min-w-50 shrink-0 cursor-pointer">
              <div>
                <svg
                  className="w-8 h-8 text-black/20 ml-auto mr-auto"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="5"
                  height="5"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14m-7 7V5"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

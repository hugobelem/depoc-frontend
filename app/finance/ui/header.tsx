import clsx from "clsx";
import Link from "next/link";
import formatBalance from "@/app/lib/utils/formatBalance";
import { calculateTotalBalance } from "@/app/lib/api/finance/accounts/utils";

export default async function Header() {
  const totalBalance = await calculateTotalBalance();
  return (
    <div className=" relative col-span-2 rounded-lg mt-2 p-1 sm:p-4">
      <div className="absolute top-1 left-0 sm:left-3 flex items-center">
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

      <div className="absolute grid grid-cols-3 gap-3 right-0 sm:right-4 top-1 w-fit">
        <button className="outline-none rounded-full p-1.5 bg-black/80 hover:bg-black/70 cursor-pointer">
          <svg
            className="w-3.75 sm:w-4.5 h-3.75 sm:h-4.5 text-white"
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
              strokeWidth="2.5"
              d="M5 12h14m-7 7V5"
            />
          </svg>
        </button>

        <button className="outline-none rounded-full p-1.5 bg-black/80 hover:bg-black/70 cursor-pointer">
          <svg
            className="w-3.75 sm:w-4.5 h-3.75 sm:h-4.5 text-white"
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
              strokeWidth="2.5"
              d="M5 12h14"
            />
          </svg>
        </button>

        <button className="outline-none rounded-full p-1.5 bg-black/80 hover:bg-black/70 cursor-pointer">
          <svg
            className="w-3.75 sm:w-4.5 h-3.75 sm:h-4.5 text-white "
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
              strokeWidth="2.5"
              d="M4 16h13M4 16l4-4m-4 4 4 4M20 8H7m13 0-4 4m4-4-4-4"
            />
          </svg>
        </button>
      </div>

      <div className="mt-16 rounded-lg justify-between">
        <div className="">
          <p className="text-[15px] sm:text-lg text-zinc-500">total balance</p>
          <p
            className={clsx("text-[22px] sm:text-2xl text-black", {
              "text-orange-600": totalBalance < 0,
            })}
          >
            <span className="text-sm sm:text-lg text-zinc-500">R$</span>
            {formatBalance(totalBalance)}
          </p>
        </div>
      </div>
    </div>
  );
}

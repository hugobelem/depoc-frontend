export default function Totals() {
  return (
    <div className="overflow-hidden sm:px-3 col-span-2 relative">
      <div className="relative overflow-auto flex">
        <div className="overflow-x-auto p-1 flex gap-2 no-scrollbar">
          <div
            className="
                ring-1 ring-zinc-200 p-4 relative rounded-lg bg-[#f7f7f5] min-h-12.5 sm:min-h-15 min-w-37.5 sm:min-w-50"
          >
            <p className="absolute p-1 text-xs sm:text-sm text-black/40 top-0 left-2">
              receivables
            </p>
            <p className=" absolute p-1 text-xs sm:text-sm text-black/40 bottom-0 left-2">
              R$
              <span className="text-black text-base sm:text-lg">
                100
              </span>
            </p>
          </div>

          <div className="ring-1 ring-zinc-200 p-4 relative rounded-lg bg-[#f7f7f5] min-h-12.5 sm:min-h-15 min-w-37.5 sm:min-w-50">
            <p className="absolute p-1 text-xs sm:text-sm text-black/40 top-0 left-2">
              payables
            </p>
            <p className="absolute p-1 text-xs sm:text-sm text-black/40 bottom-0 left-2">
              R$
              <span className="text-black text-base sm:text-lg">
                50
              </span>
            </p>
          </div>

          <div className="ring-1 ring-zinc-200 p-4 relative rounded-lg bg-[#f7f7f5] min-h-12.5 sm:min-h-15 min-w-37.5 sm:min-w-50">
            <p className="absolute p-1 text-xs sm:text-sm text-black/40 top-0 left-2">
              balance
            </p>
            <p className="absolute p-1 text-xs sm:text-sm text-black/40 bottom-0 left-2">
              R$
              <span className="text-black text-base sm:text-lg">
                99
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

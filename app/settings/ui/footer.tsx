export function Footer() {
  return (
    <div className="mt-16 flex items-center justify-between">
      <button className="group flex h-6.5 w-26 items-center justify-center rounded-md ring-1 ring-black/15 hover:ring-black/10 bg-white hover:bg-zinc-100 cursor-pointer">
        <span className="text-[13px] text-zinc-400 group-hover:text-zinc-600">
          delete account
        </span>
      </button>
    </div>
  );
}

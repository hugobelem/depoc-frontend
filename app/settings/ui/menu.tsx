export function Menu() {
  return (
    <div className="mb-10 flex justify-center text-black/65">
      <div className="grid grid-cols-3 gap-2">
        <button className="rounded-md text-[13px] px-3 py-0.5 ring-1 ring-black/15 hover:ring-black cursor-pointer">
          me
        </button>
        <button className="rounded-md text-[13px] px-3 py-0.5 ring-1 ring-black/15 hover:ring-black cursor-pointer">
          depoc
        </button>
        <button className="rounded-md text-[13px] px-3 py-0.5 ring-1 ring-black/15 hover:ring-black cursor-pointer">
          team
        </button>
      </div>
    </div>
  );
}

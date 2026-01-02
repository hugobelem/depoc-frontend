import { getUser } from "@/app/lib/api/user/api";

export async function ContentCard() {
  const user = await getUser()
  return (
    <div className="border border-zinc-300 bg-white ml-auto mr-auto rounded-md md:w-11/12 lg:w-4/4 mt-8">
      <div className="relative flex items-center justify-between pt-2 px-2">
        <p className="text-sm text-black/70">name</p>
        <p className="text-sm text-black/40">{user?.name}</p>
      </div>

      <hr className="border-none my-2 h-px bg-zinc-300" />

      <div className="relative flex items-center justify-between pb-2 px-2">
        <p className="text-sm text-black/70">email</p>
        <p className="text-sm text-black/40">{user?.email}</p>
      </div>

      <hr className="border-none mb-2 h-px bg-zinc-300" />

      <div className="relative flex items-center justify-between pb-2 px-2">
        <p className="text-sm text-black/70">username</p>
        <p className="text-sm text-black/40">{user?.username}</p>
      </div>

      <button type="submit" className="hidden" name="user-form"></button>
    </div>
  );
}
import { Box } from "./ui/box";

export default function Home() {
  const header = Box("DEPOC", "sat 20 dec 22:20");
  const body = Box("DECEMBER", "sat 20 dec 22:20");

  return (
    <div className="list-none grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4">
      {header}
      {body}
    </div>
  );
}

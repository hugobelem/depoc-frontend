import { Box } from "./ui/components/box";
import ProtectedRoute from "./lib/protectedRoute";

export default function Home() {
  return (
    <div className="list-none grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4">
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-40">
          <div
            className="
              w-50 h-10
              outline-none
              rounded-2xl
              flex items-center justify-center
              bg-black/90 text-white"
          ></div>
        </div>
        <Box
          title="HELLO"
          description="LOGIN TO YOUR ACCOUNT"
          href="/login"
          colSpan={3}
          colSpanMobile={3}
        ></Box>

        <Box
          title="21"
          description="DECEMBER 2025"
          href="#"
          colSpan={1}
          colSpanMobile={1}
          minHeight="md"
        ></Box>

        <Box
          title="POS"
          description="START SELLING"
          href="#"
          colSpan={2}
          colSpanMobile={2}
          minHeight="sm"
        ></Box>
    </div>
  );
}

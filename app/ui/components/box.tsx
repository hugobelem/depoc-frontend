import Link from "next/link";
import clsx from "clsx";

type ColSpan = 1 | 2 | 3 | 4;
type MinHeight = "sm" | "md" | "lg";

const colSpanMap: Record<ColSpan, string> = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
};

const minHeightMap: Record<MinHeight, string> = {
  sm: "min-h-25",
  md: "min-h-35",
  lg: "min-h-50",
};

interface BoxProps {
  title: string;
  description?: string;
  href?: string;
  colSpan?: ColSpan;
  colSpanMobile?: ColSpan;
  minHeight?: MinHeight;
  className?: string;
  titleClassName?: string;
  children?: React.ReactNode;
}

export function Box({
  title,
  description,
  href = "#",
  colSpan = 1,
  colSpanMobile = 1,
  minHeight = "sm",
  className,
  titleClassName,
  children,
}: BoxProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "ring-1 ring-zinc-100 duration-300 bg-white shadow-sm hover:shadow-md flex flex-col justify-between items-start rounded-lg overflow-hidden text-left relative min-h-37.5",
        colSpanMap[colSpanMobile],
        `sm:${colSpanMap[colSpan]}`,
        minHeightMap[minHeight],
        className
      )}
    >
      {description && (
        <div className="absolute top-4 left-4 text-sm">
          <kbd className="px-1.25 py-0.5 text-xs text-zinc-600 bg-stone-200/75 rounded-md">
            {description}
          </kbd>
        </div>
      )}

      <div className="absolute mt-10 bottom-4 left-4">
        <p
          className={clsx("text-[22px] md:text-3xl text-black", titleClassName)}
        >
          {title}
        </p>
      </div>

      {children}
    </Link>
  );
}

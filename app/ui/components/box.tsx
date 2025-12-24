'use client';

import Link from "next/link";
import clsx from "clsx";
import { playfair } from "@/app/ui/fonts";

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
  children,
}: BoxProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "ring-1 duration-300 hover:ring-black/25 flex flex-col justify-between items-start rounded-lg overflow-hidden text-left relative",
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
        <p className="text-[22px] md:text-3xl text-black">{title}</p>
      </div>

      {children}
    </Link>
  );
}

interface TextBoxProps {
  title: string;
}

export function TextBox({ title }: TextBoxProps) {
  return (
    <div className="flex flex-col md:col-span-2 col-span-1 row-start-2 justify-between items-start rounded-lg overflow-hidden text-left relative min-h-25">
      <div>
        <div className="absolute ml-1 top-2 sm:top-0 right-1">
          <p
            className={clsx(
              "text-[16px] md:text-[25px] lg:text-5xl text-black antialiased",
              playfair.className
            )}
          >
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

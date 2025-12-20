import Link from "next/link";

export function Box(title: string, description: string) {
  return (
    <Link
      href="#"
      className="
        ring-1
        ring-primary/5
        dark:ring-white/10 
        dark:hover:ring-white/20
        duration-300         
        bg-background
        shadow-sm 
        dark:bg-primary 
        dark:shadow-thick p-8 
        hover:shadow-md
        flex 
        flex-col 
        md:col-span-3
        col-span-2
        justify-between 
        items-start
        rounded-lg
        overflow-hidden
        text-left 
        relative    
        min-h-25">
      <div>
        <div className="absolute top-4 left-4 text-sm">
          <kbd
            className="
                    px-1.25 py-0.5
                    text-xs
                    text-zinc-500
                     border 
                    border-zinc-300 
                    rounded-md
                    dark:bg-tertiary
                    dark:text-white/60
                    dark:border-white/20">
            {description}
          </kbd>
        </div>

        <div className="absolute mt-10 bottom-4 left-4">
          <p className="text-[22px] md:text-3xl text-black dark:text-white">
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
}

import { twMerge } from 'tailwind-merge'

export const Banner = ({ className = '' }: { className?: string }) => {
  return (
    <div className={twMerge('w-full relative', className)}>
      <div className="relative rounded-full before:block before:w-full before:h-full before:absolute before:top-0 before:left-0 md:before:shadow-[inset_0_0_105px_150px_hsl(0deg_0%_0%_/_50%)]">
        <img
          src="./assets/img/banner.webp"
          className="w-full h-full object-cover min-h-[280px]"
        />
      </div>
      <div
        className={`p-8 bg-white text-mint text-center
                    md:absolute md:text-right md:w-[min(100ch,calc(100%-64px))] md:top-8 md:mx-auto md:left-0 md:right-0 md:p-0 md:bg-transparent md:text-cream
                    lg:top-16 xl:top-32 xl:w-[min(120ch,calc(100%-64px))]`}
      >
        <div className="flex flex-col gap-2 w-full md:w-1/3 md:ml-auto md:max-w-[275px]">
          <p className="font-display text-4xl md:self-end md:drop-shadow-md">
            Build your own burger!
          </p>
          <p
            className={`font-body flex items-center content-center gap-1
                      before:inline-block before:h-[1px] before:flex-grow before:bg-current
                      after:inline-block after:h-[1px] after:flex-grow after:bg-current`}
          >
            Starting from $2.99
          </p>
          <a
            className={`font-body text-xl px-4 py-2 rounded bg-mint text-white text-center cursor-pointer hover:bg-mintHover active:bg-mintActive
                            md:bg-yellow md:hover:bg-yellowHover md:active:bg-yellowActive md:text-black md:shadow-md `}
            href='#build-your-own'
          >
            Build now
          </a>
        </div>
      </div>
    </div>
  )
}

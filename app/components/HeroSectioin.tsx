import { TextAnimate } from "@/components/ui/text-animate";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker"
import Link from "next/link";


export default function Hero() {
    return (
      <>
      <div className="mt-10 sm:mt-16 md:mt-20">
        <h1 className="font-pattaya text-8xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-center">
          <TextAnimate animation="slideUp" by="word" className="inline" delay={0.2}>
            Strings
          </TextAnimate>
          {" "}
          <TextAnimate animation="slideUp" by="word" className="inline text-[#FF4400]" delay={0.4}>
            reversed
          </TextAnimate>
          <TextAnimate animation="slideUp" by="word" className="inline" delay={0.6}>
            .
          </TextAnimate>
        </h1>
      </div>
      
      <div className='text-[#575757] max-w-2xl text-center mx-auto px-4'>
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mt-2 tracking-[-0.07em]">
          <TextAnimate animation="slideUp" by="word" className="inline">
            an experimental way to play musical instruments.
          </TextAnimate>
        </h1>
      </div>

<div className="mx-auto text-center mt-16 sm:mt-4 md:mt-5 tracking-[-0.07em] px-4">
        <BlurFade delay={0.5}>
        <Link href="/learn">
          <InteractiveHoverButton className="text-2xl sm:text-base md:text-lg lg:text-xl px-8 sm:px-6 md:px-8 py-4 sm:py-3 md:py-4">
            Start playing...
          </InteractiveHoverButton>
        </Link>
        </BlurFade>
      </div>

<BlurFade delay={2}>
<section className="max-w-full mx-auto mt-12 sm:mt-8 md:mt-10 px-2 tracking-[-0.045em]">

  <div className="relative rounded-xl p-3 sm:p-4 md:p-5 shadow-lg border transition-transform duration-300 hover:scale-[1.02] hover:drop-shadow-[0_8px_20px_rgba(255,68,0,0.12)] overflow-hidden group">
    <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-orange-400/6 via-transparent to-red-500/6 blur-sm transform-gpu group-hover:scale-105 transition-transform duration-500 rounded-xl" />

    <div className="relative text-center">
      <div className="text-xs sm:text-sm md:text-base lg:text-lg text-neutral-600 dark:text-neutral-400 flex items-baseline justify-center gap-1 whitespace-nowrap">
        <TextAnimate animation="slideUp" by="word" className="inline" delay={3.2}>
          There are currently
        </TextAnimate>

        <BlurFade delay={3.7}>
          <NumberTicker
            value={800}
            delay={3.2}
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold text-[#FF4400] tracking-[-0.03em] transform-gpu transition-all duration-300 group-hover:scale-109 group-hover:-translate-y-1 drop-shadow-[0_8px_20px_rgba(255,68,0,0.12)]"
          />
        </BlurFade>

        <TextAnimate animation="slideUp" by="word" className="inline" delay={3.5}>
          million left-handed people in the world🎸
        </TextAnimate>
      </div>
    </div>
  </div>

</section>

  </BlurFade>


</>
);


}
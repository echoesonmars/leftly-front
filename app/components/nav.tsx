import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full flex justify-center items-center py-10 my-5">
      <BlurFade delay={0.2}>
      <div className="bg-white rounded-xl shadow-lg">
        <nav className="flex items-center justify-between px-5 py-3">
          
<div className="mr-10">
          <BlurFade delay={0.5}>
            <Link href="/"className="font-pattaya relative inline-block transition-all duration-300 ease-out group text-3xl">
                <span className="text-[#FF4400]">Left</span>
                <span className="text-[#842300]">ly</span>
            </Link>
          </BlurFade>
        </div>

          <div className="flex space-x-5 tracking-[-0.07em]">
            <BlurFade delay={0.5}>
              <Link href="/"className=" relative inline-block transition-all duration-300 ease-out group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
            </BlurFade>
            <BlurFade delay={0.7}>
              <Link
                href="/learn"
                className=" text-black relative inline-block transition-all duration-300 ease-out group"
              >
                Learn
                <span className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
            </BlurFade>
            <BlurFade delay={0.9}>
              <Link
                href="/labs"
                className=" text-black relative inline-block transition-all duration-300 ease-out group"
              >
                Labs
                <span className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
            </BlurFade>
            <BlurFade delay={1.1}>
              <Link
                href="/community"
                className=" text-black relative inline-block transition-all duration-300 ease-out group"
              >
                Community
                <span className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
            </BlurFade>
          </div>
          
        </nav>
      </div>
      </BlurFade>
    </header>
  );
}
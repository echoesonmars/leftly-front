import React from 'react';
import Link from 'next/link';

interface InstrumentCardProps {
  name: string;
  description: string;
  imagePath: string;
  href: string;
}

export default function InstrumentCard({ name, description, imagePath, href }: InstrumentCardProps) {
  return (
    <Link href={href}>
      <div className="group relative w-80 h-80 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950 rounded-3xl border-2 border-neutral-200 dark:border-neutral-800 overflow-hidden transition-all duration-500 hover:border-[#FF4400] hover:shadow-[0_0_50px_rgba(255,68,0,0.4)] hover:-translate-y-2 cursor-pointer">
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,68,0,0.3),transparent_50%)] group-hover:scale-150 transition-transform duration-1000" />
        </div>

        {/* Text Layer - Top Center, Behind Image */}
        <div className="absolute top-10 left-0 right-0 z-0 text-center transition-all duration-500 group-hover:translate-x-8">
          <h3 className="text-7xl font-pattaya text-neutral-300 dark:text-neutral-700 tracking-tighter">
            {name}
          </h3>
          <p className="text-base text-neutral-400 dark:text-neutral-600 mt-2 font-medium">
            {description}
          </p>
        </div>

        {/* Image Container - Bottom Left, On Top */}
        <div className="absolute bottom-0 left-0 w-full h-full z-10 flex items-end justify-start p-6 transition-all duration-500 group-hover:scale-115 group-hover:rotate-3">
          <img 
            src={imagePath}
            alt={name}
            className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] filter group-hover:brightness-110 transition-all duration-500"
          />
        </div>

        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-5" />
        
        {/* Music Note Icon with Circle Background */}
        <div className="absolute top-5 right-5 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125">
          {/* Orange Circle Background */}
          <div className="absolute inset-0 w-8 h-8 bg-[#FF4400] rounded-full" />
          {/* White Music Note */}
          <svg className="relative w-8 h-8 text-white p-1.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
        </div>
        
        <div className="absolute bottom-5 right-5 w-2 h-2 bg-[#842300] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-125 z-20" />
        
        {/* Shine Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000" />
        </div>
      </div>
    </Link>
  );
}
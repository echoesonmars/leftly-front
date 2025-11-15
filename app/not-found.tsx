import React from 'react';
import Link from 'next/link';
import { TextAnimate } from '@/components/ui/text-animate';
import { BlurFade } from '@/components/ui/blur-fade';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#FF4400]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#842300]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Floating Musical Notes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Note 1 - Top Left */}
        <div className="absolute top-10 left-[10%] animate-bounce" style={{ animationDuration: '3s' }}>
          <svg className="w-12 h-12 sm:w-16 sm:h-16 text-[#FF4400] opacity-20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
        </div>
        
        {/* Note 2 - Top Right */}
        <div className="absolute top-20 right-[15%] animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
          <svg className="w-10 h-10 sm:w-14 sm:h-14 text-[#842300] opacity-20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
        </div>
        
        {/* Note 3 - Bottom Left */}
        <div className="absolute bottom-32 left-[20%] animate-bounce" style={{ animationDuration: '2.8s', animationDelay: '1s' }}>
          <svg className="w-8 h-8 sm:w-12 sm:h-12 text-[#FF4400] opacity-20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
        </div>
        
        {/* Note 4 - Bottom Right */}
        <div className="absolute bottom-20 right-[25%] animate-bounce" style={{ animationDuration: '3.2s', animationDelay: '0.8s' }}>
          <svg className="w-14 h-14 sm:w-20 sm:h-20 text-[#842300] opacity-15" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
        </div>
        
        {/* Note 5 - Middle Left */}
        <div className="absolute top-[45%] left-[8%] animate-bounce" style={{ animationDuration: '2.3s', animationDelay: '1.5s' }}>
          <svg className="w-10 h-10 sm:w-16 sm:h-16 text-[#FF4400] opacity-15" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
        </div>
        
        {/* Note 6 - Middle Right */}
        <div className="absolute top-[50%] right-[12%] animate-bounce" style={{ animationDuration: '2.7s', animationDelay: '0.3s' }}>
          <svg className="w-12 h-12 sm:w-18 sm:h-18 text-[#842300] opacity-15" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
        
        {/* 404 Number */}
        <BlurFade delay={0.2}>
          <div className="relative mb-4 sm:mb-6 md:mb-8">
            <h1 className="font-pattaya text-[180px] sm:text-[200px] md:text-[240px] lg:text-[280px] text-transparent bg-clip-text bg-gradient-to-br from-[#FF4400] via-[#FF6B35] to-[#842300] leading-none tracking-tighter drop-shadow-2xl">
              404
            </h1>
          </div>
        </BlurFade>

        {/* Message */}
        <div className="mb-8 sm:mb-10 md:mb-12 space-y-2 sm:space-y-3 md:space-y-4 px-4">
          <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-neutral-900 dark:text-white tracking-[-0.07em]">
            <TextAnimate animation="slideUp" by="word" className="inline">
              Oops! Wrong
            </TextAnimate>
            {" "}
            <span className="font-pattaya text-[#FF4400] tracking-tight">
              <TextAnimate animation="slideUp" by="word" className="inline" delay={0.5}>
                chord
              </TextAnimate>
            </span>
          </h2>
          
          <BlurFade delay={0.8}>
            <p className="text-lg sm:text-base md:text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 max-w-sm sm:max-w-md mx-auto leading-relaxed tracking-[-0.07em]">
              Looks like this page doesn't exist. Let's get you back on track!
            </p>
          </BlurFade>
        </div>

        {/* Buttons */}
        <BlurFade delay={1.2}>
          <div className="flex flex-row gap-2 sm:gap-4 justify-center items-center px-4">
            <Link href="/" className="flex-1 sm:flex-initial">
              <button className="tracking-[-0.07em] w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FF4400] to-[#FF6B35] text-white font-semibold text-base sm:text-lg rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(255,68,0,0.4)] active:scale-95">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="hidden sm:inline">Go Home</span>
                  <span className="sm:hidden">Home</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#842300] to-[#FF4400] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </Link>

            <Link href="/learn" className="flex-1 sm:flex-initial">
              <button className="tracking-[-0.07em] w-full sm:w-auto group px-6 sm:px-8 py-3 sm:py-4 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white font-semibold text-base sm:text-lg rounded-2xl border-2 border-neutral-300 dark:border-neutral-700 transition-all duration-300 hover:scale-105 hover:border-[#FF4400] hover:shadow-[0_10px_40px_rgba(255,68,0,0.2)] active:scale-95">
                <span className="flex items-center justify-center gap-2 group-hover:text-[#FF4400] transition-colors">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                  </svg>
                  <span className="hidden sm:inline">Browse Instruments</span>
                  <span className="sm:hidden">Browse</span>
                </span>
              </button>
            </Link>
          </div>
        </BlurFade>

        {/* Fun Message */}
        <BlurFade delay={1.5}>
          <div className="mt-10 sm:mt-12 md:mt-16 pt-6 sm:pt-8 border-t border-neutral-200 dark:border-neutral-700 px-4">
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-500 italic">
              "Even left-handed musicians sometimes miss a note" 🎸
            </p>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
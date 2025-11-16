import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

import React from "react";


export default function Two() {
  const testimonials = [
  {
    quote:
      "Little Jimmy King carried Memphis blues forward with gritty, vocal-driven guitar work and fiery phrasing that bridged traditional blues and modern electric styles.",
    name: "Little Jimmy King",
    designation: "Memphis Blues Guitarist",
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg7kraeIObwTx6ENJABJ56GMfy86d8Lhzj74TpaqvD6ZfLF-cnxuOxG4q4Eg60md3qspboNrDnqFpNR9A7K0PWt0JdDmOEXLKHrzn8V4w_lCiH-jjFsqBtyPewTDWT1X9HLXCUC3cS3pmynISIQk8eNx3iSBfe2IVScKHSOI0gD-K7Ig3prNy2WWc73zXsq/s320/402058191_905129194950841_4051493503323805226_n.jpg",
  },
  {
    quote:
      "Elizabeth \"Libba\ Cotten invented a distinctive alternating-thumb fingerpicking style and wrote enduring folk standards like Freight Train, playing upside-down without restringing.",
    name: "Elizabeth \"Libba\" Cotten",
    designation: "Folk Guitarist & Composer",
    src: "https://www.syracuse.com/resizer/v2/BXBP7LSGONFQHAXJX2OJODWUA4.jpg?auth=092a7c0d55a04202bafd70d7b9548ca1f4b13229fce568cafe69abf96eadfea5&width=1280&smart=true&quality=90",
  },
  {
    quote:
      "Otis Rush helped define Chicago's West Side sound — his minor-key phrasing, searing string bends and emotional delivery shaped modern electric blues.",
    name: "Otis Rush",
    designation: "West Side Blues Legend",
    src: "https://s3.us-east-2.amazonaws.com/alligator.prod.public/images/artists/rush_otis.jpg",
  },
  {
    quote:
      "Eric Gales is a modern blues-rock virtuoso known for blistering runs, expressive bends and a raw, vocal-like tone that pushed contemporary electric guitar technique.",
    name: "Eric Gales",
    designation: "Modern Blues-Rock Guitarist",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Eric_Gales_in_2011.jpg/500px-Eric_Gales_in_2011.jpg",
  },
  {
    quote:
      "Dick Dale invented the surf-guitar voice — rapid alternate picking, heavy reverb and aggressive tremolo picking created the signature surf sound heard worldwide.",
    name: "Dick Dale",
    designation: "King of Surf Guitar",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Dick_Dale.jpg/500px-Dick_Dale.jpg",
  },
  {
    quote:
      "Albert King's upside-down left-hand technique and monumental string bends set a new blues vocabulary — his phrasing directly influenced generations of players.",
    name: "Albert King",
    designation: "Blues Icon",
    src: "https://cdn1.tenchat.ru/static/vbc-gostinder/2023-09-04/d6da7e8a-c90f-44c6-9636-d9501d46a8b8.jpg?width=1396&height=838&fmt=webp",
  },
  {
    quote:
      "Jimi Hendrix expanded the electric guitar language — feedback, wah, studio experimentation and virtuosic touch — redefining what the instrument could do in rock music.",
    name: "Jimi Hendrix",
    designation: "Guitar Innovator",
    src: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1000w,f_auto,q_auto:best/MSNBC/Components/Photo/_new/100228-hendrix2-vlg-3p.jpg",
  },
];



  return (
    <>
        <section className='mt-5 sm:mt-10 md:mt-12 mx-auto relative shadow-[0px_10px_36px_20px_#ffffff] bg-white dark:bg-black'>
          <div className='max-w-4xl sm:mt-8 md:mt-10 mx-auto relative pb-4 sm:pb-6 md:pb-8 px-4 sm:px-6'>
          <h1 className="text-xl sm:text-2xl md:text-3xl mt-4 sm:mt-6 md:mt-8 tracking-[-0.07em]">
            <TextAnimate animation="slideUp" by="word" className="inline" delay={1}>
              Leftly is a community of left-handed musicians and creators exploring alternative ways to play, learn, and express music.
            </TextAnimate>
          </h1>
          <h1 className="text-[#575757] text-xl sm:text-2xl md:text-3xl tracking-[-0.07em] mt-2 sm:mt-3 md:mt-4">
            <TextAnimate animation="slideUp" by="word" className="inline" delay={2}>
              It&apos;s not about rules
            </TextAnimate>
          </h1>
          </div>
        </section>
      <div className="-mt-12 sm:-mt-12 md:-mt-16">
        <BlurFade delay={2} inView>  
          <AnimatedTestimonials testimonials={testimonials} />
        </BlurFade>
      </div>
      </>
  );
}
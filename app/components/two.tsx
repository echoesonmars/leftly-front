import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";

import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export default function Two() {
const items = [
  {
    title: "Little Jimmy King",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg7kraeIObwTx6ENJABJ56GMfy86d8Lhzj74TpaqvD6ZfLF-cnxuOxG4q4Eg60md3qspboNrDnqFpNR9A7K0PWt0JdDmOEXLKHrzn8V4w_lCiH-jjFsqBtyPewTDWT1X9HLXCUC3cS3pmynISIQk8eNx3iSBfe2IVScKHSOI0gD-K7Ig3prNy2WWc73zXsq/s320/402058191_905129194950841_4051493503323805226_n.jpg",
    className: "absolute top-16 left-[50%] sm:top-24 sm:left-[55%] md:top-32 rotate-[10deg] z-10",
  },
  {
    title: "Elizabeth \"Libba\" Cotten",
    image:
      "https://www.syracuse.com/resizer/v2/BXBP7LSGONFQHAXJX2OJODWUA4.jpg?auth=092a7c0d55a04202bafd70d7b9548ca1f4b13229fce568cafe69abf96eadfea5&width=1280&smart=true&quality=90",
    className: "absolute top-12 left-[40%] sm:top-20 sm:left-[45%] md:top-24 rotate-[-7deg] z-10",
  },
  {
    title: "Otis Rush",
    image:
      "https://s3.us-east-2.amazonaws.com/alligator.prod.public/images/artists/rush_otis.jpg",
    className: "absolute top-4 left-[25%] sm:top-6 sm:left-[30%] md:top-8 rotate-[4deg] z-10",
  },
  {
    title: "Eric Gales",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Eric_Gales_in_2011.jpg/500px-Eric_Gales_in_2011.jpg",
    className: "absolute top-2 left-[35%] sm:top-4 sm:left-[40%] md:top-5 rotate-[8deg] z-10",
  },
  {
    title: "Dick Dale",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Dick_Dale.jpg/500px-Dick_Dale.jpg",
    className: "absolute top-20 left-[20%] sm:top-32 sm:left-[25%] md:top-40 rotate-[-7deg] z-10",
  },
  {
    title: "Albert King",
    image:
      "https://cdn1.tenchat.ru/static/vbc-gostinder/2023-09-04/d6da7e8a-c90f-44c6-9636-d9501d46a8b8.jpg?width=1396&height=838&fmt=webp",
    className: "absolute top-5 left-[15%] sm:top-8 sm:left-[20%] md:top-10 rotate-[-5deg] z-10",
  },
  {
    title: "Jimi Hendrix",
    image:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1000w,f_auto,q_auto:best/MSNBC/Components/Photo/_new/100228-hendrix2-vlg-3p.jpg",
    className: "absolute top-10 right-[30%] sm:top-16 sm:right-[35%] md:top-20 rotate-[2deg] z-10",
  },
];


  return (
    <>
        <section className='mt-20 sm:mt-16 md:mt-20 mx-auto relative z-50 shadow-[0px_20px_56px_50px_#ffffff] bg-white dark:bg-black'>
          <div className='max-w-2xl mt-10 sm:mt-16 md:mt-20 mx-auto relative pb-6 sm:pb-8 md:pb-10 px-4 sm:px-6'>
          <h1 className="text-xl sm:text-2xl md:text-3xl mt-6 sm:mt-8 md:mt-10 tracking-[-0.07em]">
            <TextAnimate animation="slideUp" by="word" className="inline" delay={1}>
              Leftly is a community of left-handed musicians and creators exploring alternative ways to play, learn, and express music.
            </TextAnimate>
          </h1>
          <h1 className="text-[#575757] text-xl sm:text-2xl md:text-3xl tracking-[-0.07em] mt-4 sm:mt-6">
            <TextAnimate animation="slideUp" by="word" className="inline" delay={2}>
              It&apos;s not about rules
            </TextAnimate>
          </h1>
          </div>
        </section>
      <div>
        <BlurFade delay={2} inView>  
        <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip px-2 sm:px-4">
          <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-lg sm:text-2xl md:text-4xl font-bold text-neutral-400 dark:text-neutral-800">
            Flip your world.
          </p>
          {items.map((item, index) => (
            <DraggableCardBody key={index} className={item.className}>
              <img
                src={item.image}
                alt={item.title}
                className="pointer-events-none relative z-10 h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 object-cover rounded-lg"
              />
              <h3 className="mt-2 sm:mt-3 md:mt-4 text-center text-lg sm:text-xl md:text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                {item.title}
              </h3>
            </DraggableCardBody>
          ))}
        </DraggableCardContainer>
        </BlurFade>
      </div>
      </>
  );
}
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";
import GuitarCard from "../components/InstrumentCard";

export default function Learn() {
  const instruments = [
    {
      name: "Guitar",
      description: "6-string",
      imagePath: "/guitar.png",
      href: "/learn/guitar"
    },
    {
      name: "Bass",
      description: "4-string",
      imagePath: "/bass.png",
      href: "/learn/bass"
    },
    {
      name: "Ukulele",
      description: "4-string",
      imagePath: "/ukulele.png",
      href: "/learn/ukulele"
    },
    {
      name: "Dombyra",
      description: "2-string",
      imagePath: "/dobmyra.png",
      href: "/learn/dombyra"
    }
  ];

  return (
    <div className="py-4 mb-20">
      <div className="mx-auto space-x-5 max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 place-items-center">
          {instruments.map((instrument, index) => (
            <GuitarCard
              key={index}
              name={instrument.name}
              description={instrument.description}
              imagePath={instrument.imagePath}
              href={instrument.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
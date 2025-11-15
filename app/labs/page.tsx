import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";

export default function Labs() {
  return (
    <div className="min-h-screen px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <BlurFade delay={0.2}>
          <h1 className="text-5xl font-bold mb-6 tracking-[-0.07em]">
            <TextAnimate animation="slideUp" by="word" className="inline">
              Labs
            </TextAnimate>
          </h1>
        </BlurFade>
      </div>
    </div>
  );
}


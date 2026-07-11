import { timeline } from "@/data/portfolio";

import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

export default function Timeline() {
  return (
    <Section id="timeline">
      <SectionTitle
        subtitle="Моят път"
        title="Професионално развитие"
        description="Всеки етап от развитието ми ме е доближавал до целта да бъда учител по информационни технологии."
      />

      <div className="relative">
        <div className="absolute left-5 top-0 h-full w-[2px] bg-blue-500/30" />

        <div className="space-y-16">
          {timeline.map((item) => (
            <div key={item.title} className="relative pl-20">
              <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600
ring-8
ring-blue-600/20 text-white shadow-lg shadow-blue-600/30">
                ●
              </div>

              <p className="text-sm uppercase tracking-widest text-blue-400">
                {item.year}
              </p>

              <h3 className="mt-2 text-3xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-4 max-w-2xl leading-8 text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

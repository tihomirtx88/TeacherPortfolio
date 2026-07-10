import Image from "next/image";
import { featuredProject } from "@/data/portfolio";

import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

export default function FeaturedProject() {
  return (
    <Section id="projects">
      <SectionTitle
        subtitle="Дипломен проект"
        title={featuredProject.title}
        description={featuredProject.description}
      />

      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900">
          <Image
            src={featuredProject.image}
            alt={featuredProject.title}
            width={900}
            height={700}
            className="transition duration-700 hover:scale-105"
          />
        </div>

        <div>
          <h3 className="mb-6 text-3xl font-bold text-white">
            Използвани технологии
          </h3>

          <div className="mb-10 flex flex-wrap gap-3">
            {featuredProject.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <h3 className="mb-6 text-3xl font-bold text-white">
            Основни функционалности
          </h3>

          <div className="grid gap-4">
            {featuredProject.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <div className="h-3 w-3 rounded-full bg-blue-500" />

                <span className="text-slate-300">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href={featuredProject.demo}
              target="_blank"
              className="
                rounded-xl
                bg-blue-600
                px-8
                py-4
                font-semibold
                text-white
                transition
                duration-300
                hover:scale-105
                hover:bg-blue-500
              "
            >
              Разгледай проекта
            </a>

            <a
              href={featuredProject.github}
              target="_blank"
              className="
                rounded-xl
                border
                border-white/10
                px-8
                py-4
                font-semibold
                text-white
                transition
                duration-300
                hover:border-blue-500
              "
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

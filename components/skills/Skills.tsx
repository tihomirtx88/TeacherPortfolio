import { skills } from "@/data/portfolio";

import Card from "../ui/Card";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionTitle
        subtitle="Технически умения"
        title="Технологии, с които работя"
        description="По време на обучението си съм изградил практически проекти с използване на съвременни технологии за разработка на уеб приложения."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <Card key={skill.title}>
              <div className="flex h-full flex-col">
                {/* Header */}

                <div className="flex items-center gap-4">
                  <Icon size={40} className="text-blue-400" />

                  <h3 className="text-2xl font-bold text-white md:text-3xl">
                    {skill.title}
                  </h3>
                </div>

                {/* Technologies */}

                <div className="mt-8 flex flex-wrap gap-3">
                  {skill.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-full
                        border
                        border-blue-500/20
                        bg-blue-500/10
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-blue-300
                        transition-all
                        duration-300
                        hover:scale-105
                        hover:border-blue-400
                       hover:scale-105
                      hover:bg-blue-500
                      active:scale-95
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

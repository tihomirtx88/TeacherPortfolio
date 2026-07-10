import Card from "../ui/Card";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

import { skills } from "@/data/portfolio";

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
              <div className="flex items-center gap-4">
                <Icon size={38} className="text-blue-400" />

                <h3 className="text-3xl font-bold text-white">{skill.title}</h3>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                {skill.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                    rounded-full
                    border
                    border-blue-500/30
                    bg-blue-500/10
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-blue-300
                    transition
                    duration-300
                    hover:scale-105
                    hover:bg-blue-500/20
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

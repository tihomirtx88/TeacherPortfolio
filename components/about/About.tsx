import { GraduationCap, Laptop, BookOpen, Target } from "lucide-react";

import Card from "../ui/Card";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

export default function About() {
  return (
    <Section id="about">
      <SectionTitle
        subtitle="За мен"
        title="Кой съм аз?"
        description="Вярвам, че технологиите трябва да бъдат преподавани по практически начин. Моята цел е учениците не просто да използват технологии, а да ги създават."
      />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        <Card>
          <GraduationCap className="mb-6 text-blue-400" size={42} />

          <h3 className="mb-4 text-2xl font-bold text-white">Образование</h3>

          <p className="leading-8 text-slate-400">
            Студент в Шуменски университет, специалност
            <br />
            <strong>Информатика и информационни технологии</strong>
          </p>
        </Card>

        <Card>
          <Laptop className="mb-6 text-blue-400" size={42} />

          <h3 className="mb-4 text-2xl font-bold text-white">
            Практически опит
          </h3>

          <p className="leading-8 text-slate-400">
            Front-end, Back-end, REST API, бази данни, AI приложения.
          </p>
        </Card>

        <Card>
          <BookOpen className="mb-6 text-blue-400" size={42} />

          <h3 className="mb-4 text-2xl font-bold text-white">Самообучение</h3>

          <p className="leading-8 text-slate-400">
            SoftUni, Udemy, самостоятелно обучение, практически проекти.
          </p>
        </Card>

        <Card>
          <Target className="mb-6 text-blue-400" size={42} />

          <h3 className="mb-4 text-2xl font-bold text-white">Цел</h3>

          <p className="leading-8 text-slate-400">
            Да вдъхновя учениците да развиват логическо мислене, креативност и
            практически умения.
          </p>
        </Card>
      </div>
    </Section>
  );
}

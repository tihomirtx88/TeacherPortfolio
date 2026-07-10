import { Lightbulb, Code2, Users, Rocket } from "lucide-react";

import Card from "../ui/Card";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

export default function Teaching() {
  return (
    <Section id="teaching">
      <SectionTitle
        subtitle="Моята философия"
        title="Как бих преподавал?"
        description="Вярвам, че учениците учат най-добре, когато виждат практическия смисъл на това, което създават."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <Card>
          <Lightbulb size={42} className="mb-6 text-blue-400" />

          <h3 className="mb-4 text-2xl font-bold text-white">
            Практическо обучение
          </h3>

          <p className="leading-8 text-slate-400">
            Вместо заучаване на теория, учениците ще работят по реални задачи и
            практически упражнения.
          </p>
        </Card>

        <Card>
          <Code2 size={42} className="mb-6 text-blue-400" />

          <h3 className="mb-4 text-2xl font-bold text-white">Програмиране</h3>

          <p className="leading-8 text-slate-400">
            Постепенно преминаване от Scratch към HTML, CSS, JavaScript и
            Python, чрез практически проекти.
          </p>
        </Card>

        <Card>
          <Users size={42} className="mb-6 text-blue-400" />

          <h3 className="mb-4 text-2xl font-bold text-white">Работа в екип</h3>

          <p className="leading-8 text-slate-400">
            Насърчаване на комуникацията, съвместната работа и обмена на идеи
            между учениците.
          </p>
        </Card>

        <Card>
          <Rocket size={42} className="mb-6 text-blue-400" />

          <h3 className="mb-4 text-2xl font-bold text-white">Развитие</h3>

          <p className="leading-8 text-slate-400">
            Целта ми е учениците да изградят увереност и практически умения,
            които могат да използват извън училище.
          </p>
        </Card>
      </div>
    </Section>
  );
}

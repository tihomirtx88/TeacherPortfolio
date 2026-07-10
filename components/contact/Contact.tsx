import { Mail, ExternalLink } from "lucide-react";

import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <Section id="contact">
      <SectionTitle
        subtitle="Контакти"
        title="Благодаря за отделеното време!"
        description="Ще се радвам да имам възможността да се присъединя към Вашия екип и да допринеса с мотивацията и знанията си."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-500"
          >
            <Mail className="text-blue-400" size={28} />

            <div>
              <h3 className="font-semibold text-white">Имейл</h3>

              <p className="text-slate-400">{profile.email}</p>
            </div>
          </a>

          <a
            href={profile.github}
            target="_blank"
            className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-500"
          >
            <div>
              <h3 className="font-semibold text-white">GitHub</h3>

              <p className="text-slate-400">Разгледайте моите проекти</p>
            </div>
          </a>

          <a
            href={profile.project}
            target="_blank"
            className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-500"
          >
            <ExternalLink className="text-blue-400" size={28} />

            <div>
              <h3 className="font-semibold text-white">Дипломен проект</h3>

              <p className="text-slate-400">Онлайн демонстрация</p>
            </div>
          </a>

          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-500"
            >
              <div>
                <h3 className="font-semibold text-white">LinkedIn</h3>

                <p className="text-slate-400">Професионален профил</p>
              </div>
            </a>
          )}
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
          <h3 className="mb-6 text-3xl font-bold text-white">
            Накратко за мен
          </h3>

          <p className="leading-9 text-slate-400">
            Благодаря Ви, че разгледахте моето портфолио. За мен преподаването е
            възможност да помогна на учениците да открият интереса си към
            информационните технологии чрез практически задачи, логическо
            мислене и създаване на реални проекти.
          </p>

          <div className="mt-10">
            <a
              href={profile.cv}
              className="inline-flex rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
            >
              Изтегли CV
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

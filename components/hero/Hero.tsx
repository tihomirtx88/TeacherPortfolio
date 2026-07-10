"use client";

import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-[-250px] top-[-250px] h-[700px] w-[700px] rounded-full bg-blue-600/20 blur-[180px]" />

        <div className="absolute bottom-[-250px] right-[-250px] h-[650px] w-[650px] rounded-full bg-cyan-400/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-8">
        <div className="grid w-full items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[8px] text-blue-400">
              Бъдещ учител
            </p>

            <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
              Тихомир
              <br />
              Желязков
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-300">
              Студент по Информатика и информационни технологии, който вярва, че
              най-добрият начин учениците да усвоят технологиите е чрез
              практика, любопитство и създаване на реални проекти.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              <a
                href="#projects"
                className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
              >
                Дипломен проект
              </a>

              <a
                href="#about"
                className="rounded-xl border border-white/10 px-8 py-4 text-white transition duration-300 hover:border-blue-400"
              >
                Научи повече
              </a>
            </div>
          </div>

          {/* RIGHT */}

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-blue-500/40 blur-[120px]" />

              <div
                className="
                relative
                flex
                h-[420px]
                w-[420px]
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-gradient-to-br
                from-slate-900
                to-slate-800
                shadow-2xl
                "
              >
                <span className="text-8xl font-black text-white">TZ</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown size={28} className="text-slate-400" />
      </div>
    </section>
  );
}

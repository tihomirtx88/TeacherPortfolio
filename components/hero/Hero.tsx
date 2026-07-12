"use client";

import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-56 -top-56 h-[650px] w-[650px] rounded-full bg-blue-600/20 blur-[180px]" />

        <div className="absolute -right-52 bottom-0 h-[550px] w-[550px] rounded-full bg-cyan-500/10 blur-[170px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24 pb-20">
        <div className="grid w-full items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <div className="order-2 lg:order-1">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[8px] text-blue-400">
              Бъдещ учител по ИТ
            </p>

            <h1
              className="
                text-4xl
                font-black
                leading-tight
                text-white

                sm:text-5xl
                lg:text-7xl
              "
            >
              Тихомир
              <br />
              Желязков
            </h1>

            <p
              className="
                mt-8
                max-w-xl
                text-base
                leading-8
                text-slate-300

                sm:text-lg
                sm:leading-9
              "
            >
              Студент по специалност
              <strong> „Информатика и информационни технологии“</strong>.
              Интересувам се от разработка на софтуер, уеб технологии и
              изкуствен интелект. Вярвам, че учениците учат най-добре, когато
              сами създават проекти.
            </p>

            <div
              className="
                mt-12
                flex
                flex-wrap
                gap-4
              "
            >
              <a
                href="#projects"
                className="
                rounded-xl
                bg-blue-600
ring-8
ring-blue-600/20
                px-8
                py-4
                font-semibold
                text-white
                transition
                duration-300
                hover:-translate-y-1
                hover:scale-105
              hover:bg-blue-500
              active:scale-95
                "
              >
                Личен проект
              </a>

              <a
                href="#about"
                className="
                rounded-xl
                border
                border-white/10
                px-8
                py-4
                text-white
                transition
                duration-300
                hover:border-blue-500
                "
              >
                За мен
              </a>
            </div>
          </div>

          {/* RIGHT */}

          <div
            className="
            order-1
            flex
            justify-center

            lg:order-2
            "
          >
            <div className="relative float">
              <div
                className="
                absolute
                inset-0
                rounded-full
                bg-blue-500/30
                blur-[120px]
                "
              />

              <div
                className="
                relative
                flex

                h-[260px]
                w-[260px]

                items-center
                justify-center

                rounded-full

                border
                border-white/10

                bg-gradient-to-br
                from-slate-900
                to-slate-800

                shadow-2xl

                sm:h-[340px]
                sm:w-[340px]

                lg:h-[430px]
                lg:w-[430px]
                "
              >
                {/* Тук по-късно ще сложим твоя снимка */}

                {/* <span
                  className="
                  text-6xl
                  font-black
                  text-white

                  lg:text-8xl
                  "
                >
                  TZ
                </span> */}
                <img
    src="/profile.jpg"
    alt="Тихомир Желязков"
    className="
    h-full
    w-full
    rounded-full
    object-cover
    "
/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}

      <div
        className="
        absolute
        bottom-8
        left-1/2
        -translate-x-1/2
        animate-bounce
        "
      >
        <ArrowDown size={28} className="text-slate-500" />
      </div>
    </section>
  );
}

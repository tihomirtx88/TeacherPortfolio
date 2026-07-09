"use client";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950">
      <div className="absolute left-0 top-0 h-[700px] w-[700px] rounded-full bg-blue-600/20 blur-[180px]" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[160px]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-8 lg:grid-cols-2">
        <div>
          <p className="mb-6 text-blue-400 uppercase tracking-[6px]">
            Бъдещ ИТ Учител
          </p>

          <h1 className="text-6xl font-black leading-tight text-white lg:text-8xl">
            Тихомир
            <br />
            Желязков
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
            Страстно се интересувам от разработка на софтуер, изкуствен интелект
            и съвременно образование. Целта ми е да вдъхновявам учениците чрез
            технологии и практическо обучение.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
            <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-blue-500">
              Портфолио
            </button>

            <button className="rounded-xl border border-white/20 px-8 py-4 text-white transition hover:border-blue-400">
              Проект
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500 blur-[100px] opacity-50" />

            <div className="relative flex h-[420px] w-[420px] items-center justify-center rounded-full border border-white/10 bg-slate-900">
              <span className="text-8xl font-black text-white">TZ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

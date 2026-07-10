import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import FeaturedProject from "@/components/project/FeaturedProject";
import Skills from "@/components/skills/Skills";
import Teaching from "@/components/taching/Teaching";
import Timeline from "@/components/timeline/Timeline";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Timeline />

      <FeaturedProject />

      <Teaching />

      <Contact />

      <footer className="border-t border-white/10 py-10 text-center">
        <p className="text-slate-500">
          © {new Date().getFullYear()} Тихомир Желязков
        </p>

        <p className="mt-2 text-sm text-slate-600">
          Изградено с Next.js • TypeScript • Tailwind CSS
        </p>
      </footer>
    </main>
  );
}

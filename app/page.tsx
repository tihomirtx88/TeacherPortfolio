import About from "@/components/about/About";
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

      <About/>
      
      <Skills/>

      <Timeline/>

      <FeaturedProject />

      <Teaching />

    </main>
  );
}

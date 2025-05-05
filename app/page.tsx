import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <Quote />
        <Projects />
        <Skills />
      </div>
    </>
  );
}

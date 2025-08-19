import Hero from "./(site)/(sections)/Hero";
import LogoWall from "@/components/LogoWall";
import Proof from "./(site)/(sections)/Proof";
import Projects from "./(site)/(sections)/Projects";
import Timeline from "./(site)/(sections)/Timeline";
import Skills from "./(site)/(sections)/Skills";
import About from "./(site)/(sections)/About";

export default function Page() {
  return (
    <main>
      <Hero />
      <LogoWall />
      {/* <Proof /> */}
      <Projects />
      <Timeline />
      <Skills />
      {/* <About /> */}
    </main>
  );
}

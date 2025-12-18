import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Skills from "@/components/home/Skills";

export default function Home() {
  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
        <Hero />
        <About />
        <Skills />
    </main>
  );
}

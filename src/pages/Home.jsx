import { Catalogue } from "@/components/Catalogue";
import { Hero } from "@/components/Hero";

export const Home = () => {
  return (
    <main className="w-full">
      <Hero />
      <Catalogue />
    </main>
  );
};

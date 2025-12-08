import { Catalogue } from "@/components/Catalogue";
import { Hero } from "@/components/Hero";
import { FiltersProvider } from "@/context/FiltersProvider";

export const Home = () => {
  return (
    <main className="w-full">
      <Hero />
      <FiltersProvider>
        <Catalogue />
      </FiltersProvider>
    </main>
  );
};

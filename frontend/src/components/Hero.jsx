import Mcqueen from "@/assets/mcqueen.png";
import Mate from "@/assets/mate.png";
import "@/styles/Hero.css";
import { Button } from "./Button";

export const Hero = () => {
  return (
    <>
      <section className="hero bg-primary py-24 w-full relative">
        <div className=" flex flex-col gap-6">
          <header>
            <h1
              className="relative z-20 font-russo-one text-white text-5xl text-center text-pretty
          "
            >
              Mi Colección de Cars
            </h1>
          </header>
          <div className="flex items-center relative h-64">
            <img src={Mcqueen} alt="Imagen de mcqueen" className="z-20 w-1/2" />
            <img
              src={Mate}
              alt="Imagen de mate"
              className=" z-20 rotate-y-180 w-1/2"
            />
          </div>

          <Button href="#collection">Ver colección</Button>
        </div>
      </section>
      <div className="divider"></div>
    </>
  );
};

import Mcqueen from "@/assets/mcqueen.png";

export const Hero = () => {
  return (
    <section className="bg-[#D82420] py-6 w-full flex flex-col">
      <h1 className="font-russo-one text-white text-3xl text-center">
        Mi Coleccion de Cars
      </h1>
      <img src={Mcqueen} alt="Imagen de mcqueen" className="size-80" />
      <a
        href="#collection"
        className="px-6 py-3 rounded-2xl bg-[#F4C430] mx-auto text-white font-russo-one"
      >
        Ver coleccion
      </a>
    </section>
  );
};

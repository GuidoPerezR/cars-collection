import { useId } from "react";
import "@/styles/Catalogue.css";
import { Car } from "./Car";
import data from "@/mock/response.json";
export const Catalogue = () => {
  const filterId = useId();
  return (
    <section className="px-5 py-12 text-white w-full flex flex-col bg-stone-700">
      <header>
        <select name={filterId} id={filterId}>
          <option value="newer">Año(Mas Nuevo)</option>
        </select>
      </header>
      <div className="mt-6 grid grid-cols-2 gap-4">
        {data.map(({ id, image, name, model_year }) => (
          <Car key={id} image={image} name={name} model_year={model_year} />
        ))}
      </div>
    </section>
  );
};

import { useId } from "react";
import "@/styles/Catalogue.css";
import { useFilters } from "@/hooks/useFilters";
import { CarsContainer } from "./CarsContainer";

export const Catalogue = () => {
  const filterId = useId();
  const { filterOption, handleFilterChange } = useFilters();

  return (
    <section
      className="px-5 py-12 text-white w-full bg-tertiary scroll-mt-6"
      id="collection"
    >
      <div className="w-full max-w-6xl mx-auto">
        <header>
          <select
            name={filterId}
            id={filterId}
            className="custom-select bg-navbar pl-4 pr-16 py-2 rounded-lg text-stone-200 font-semibold border border-neutral-500 focus:outline-none focus:border-secondary"
            onChange={handleFilterChange}
            value={filterOption}
          >
            <option value="">Filtrar por ...</option>
            <option value="name:asc">Nombre (A → Z)</option>
            <option value="name:desc">Nombre (Z → A)</option>
            <option value="achieve_car_date:asc">Fecha (Más antiguos)</option>
            <option value="achieve_car_date:desc">Fecha (Más recientes)</option>
            <option value="price:desc">Precio (Mayor → Menor)</option>
            <option value="price:asc">Precio (Menor → Mayor)</option>
          </select>
        </header>
        <div className="w-full min-h-96 flex justify-center items-center max-w-3xl mx-auto lg:max-w-6xl">
          <CarsContainer />
        </div>
      </div>
    </section>
  );
};

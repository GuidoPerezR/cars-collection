import { useId } from "react";
import "@/styles/Catalogue.css";
import { Car } from "@/components/Car";
import { useCatalogue } from "@/hooks/useCatalogue";
import { useFilters } from "@/hooks/useFilters";

export const Catalogue = () => {
  const filterId = useId();
  const { filterOption, handleFilterChange } = useFilters();
  const { cars } = useCatalogue({ filterOption });

  return (
    <section
      className="px-5 py-12 text-white w-full flex flex-col bg-tertiary scroll-mt-6"
      id="collection"
    >
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
      <div className="mt-6 grid grid-cols-2 gap-4">
        {cars.map(({ documentId, main_image, name, model_year }) => (
          <Car
            key={documentId}
            id={documentId}
            image={main_image}
            name={name}
            model_year={model_year}
          />
        ))}
      </div>
    </section>
  );
};

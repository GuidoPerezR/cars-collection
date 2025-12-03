import { useId } from "react";
import "@/styles/Catalogue.css";
import { Car } from "@/components/Car";
import { useCatalogue } from "@/hooks/useCatalogue";
import { filteredData } from "@/functions/filtered_data";
import { useState } from "react";
import { useSearchParams } from "react-router";
import { useEffect } from "react";

export const Catalogue = () => {
  const filterId = useId();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOption, setFilterOption] = useState(
    searchParams.get("filter") || ""
  );
  const { cars, setCars, data } = useCatalogue({ filter: filterOption });

  const handleFilterChange = (e) => {
    e.preventDefault();
    const selectedOption = e.target.value;
    setFilterOption(selectedOption);

    const filteredDataResult = filteredData({
      option: selectedOption,
      cars,
      data,
    });

    setCars(filteredDataResult);
  };

  useEffect(() => {
    setSearchParams((params) => {
      if (filterOption) params.set("filter", filterOption);
      return params;
    });
  }, [filterOption, setSearchParams]);

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
          <option value="name">Nombre (A → Z)</option>
          <option value="newer">Fecha (Más recientes)</option>
          <option value="price">Precio (Menor → Mayor)</option>
        </select>
      </header>
      <div className="mt-6 grid grid-cols-2 gap-4">
        {cars.map(({ id, main_image, name, model_year }) => (
          <Car
            key={id}
            image={main_image}
            name={name}
            model_year={model_year}
          />
        ))}
      </div>
    </section>
  );
};

import { getCars, getFilteredCars } from "@/lib/strapi";
import { useEffect } from "react";
import { useState } from "react";

export const useCatalogue = ({ filterOption }) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } =
        filterOption === ""
          ? await getCars()
          : await getFilteredCars(filterOption);

      setCars(data);
    };
    getData();
  }, [filterOption, setCars]);

  return { cars };
};

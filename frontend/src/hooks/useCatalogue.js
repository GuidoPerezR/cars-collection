import { FiltersContext } from "@/context/filters";
import { getCars, getFilteredCars } from "@/lib/strapi";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const useCatalogue = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const { filterOption } = useContext(FiltersContext);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { data } =
          filterOption === ""
            ? await getCars()
            : await getFilteredCars(filterOption);
        setCars(data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [filterOption, setCars]);

  return { cars, loading };
};

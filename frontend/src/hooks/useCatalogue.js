import { getCars } from "@/lib/strapi";
import { useEffect } from "react";
import { useState } from "react";

export const useCatalogue = () => {
  const [data, setData] = useState([]);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { car } = await getCars();
      setData(car);
      setCars(car);
    };

    getData();
  }, []);

  // const firstData = () => {
  //   setCars([...data]);
  // };

  return { cars, setCars, data };
};

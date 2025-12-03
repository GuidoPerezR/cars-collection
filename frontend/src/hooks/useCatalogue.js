import { filteredData } from "@/functions/filtered_data";
import { getCars } from "@/lib/strapi";
import { useEffect } from "react";
import { useState } from "react";

export const useCatalogue = ({ filter }) => {
  const [data, setData] = useState([]);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { car } = await getCars();
      setData(car);

      if (filter) {
        const filteredCars = filteredData({
          option: filter,
          cars: car,
        });
        setCars(filteredCars);
      } else {
        setCars(car);
      }
    };

    getData();
  }, []);

  // const firstData = () => {
  //   setCars([...data]);
  // };

  return { cars, setCars, data };
};

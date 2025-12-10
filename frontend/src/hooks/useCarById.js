import { getCarById } from "@/lib/strapi";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";

export const useCarById = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [car, setCar] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCar = async () => {
      try {
        setLoading(true);
        const { data, error } = await getCarById(id);

        if (error) throw new Error(error.message);

        setCar(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    getCar();
  }, [id]);

  return { car, loading, error };
};

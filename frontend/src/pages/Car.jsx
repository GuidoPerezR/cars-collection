import { Button } from "@/components/Button";
import { GridCard } from "@/components/GridCard";
import { ImageSlider } from "@/components/ImageSlider";
import { formatDate } from "@/functions/formatDate";
import { getCarById } from "@/lib/strapi";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

export function CarPage() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCar = async () => {
      const { data, error } = await getCarById(id);
      if (error) {
        setError(error);
        return;
      }
      setCar(data);
    };

    getCar();
  }, [id]);

  if (error || !car) {
    return (
      <section className="min-h-dvh bg-navbar flex items-center justify-center flex-col gap-12">
        <h1 className="text-white text-3xl text-center font-russo-one text-pretty">
          Página no encontrada
        </h1>
        <Button to="/">Regresar a Inicio</Button>
      </section>
    );
  }

  return (
    <main className="w-full">
      <section className="py-12 px-6 bg-tertiary text-white flex flex-col gap-6">
        <nav className="flex items-center justify-center">
          <ImageSlider images={car.carrousel} />
        </nav>
        <h1 className="font-russo-one text-3xl pt-6 text-pretty">{car.name}</h1>
        <div className="grid grid-cols-2 gap-4 pt-6">
          <GridCard title="Precio" value={`$${car.price}`} />

          <GridCard title="Año del modelo" value={car.model_year} />
          <GridCard
            title={"Conseguido el"}
            value={formatDate(car.achieve_car_date)}
            className="col-span-2 "
          />
        </div>
        <div className="pt-6">
          <h2 className="text-xl font-russo-one">Descripcion</h2>
          <p className="pt-4 text-pretty">{car.description}</p>
        </div>
        <div className="pt-6">
          <h2 className="text-xl font-russo-one">Conseguido en</h2>
          <p className="text-pretty pt-2">{car.place}</p>
        </div>
        <Button to="/">Regresar a Inicio</Button>
      </section>
    </main>
  );
}

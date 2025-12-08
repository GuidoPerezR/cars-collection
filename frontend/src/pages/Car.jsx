import { GridCard } from "@/components/GridCard";
import { ImageSlider } from "@/components/ImageSlider";
import { formatDate } from "@/functions/formatDate";
import { getCarById } from "@/lib/strapi";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router";

export function CarPage() {
  const { id } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    const getCar = async () => {
      const { data } = await getCarById(id);
      setCar(data);
    };

    getCar();
  }, [id]);

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
        <Link
          to="/"
          className="px-6 py-3 rounded-3xl bg-tertiary mx-auto text-secondary font-russo-one border border-secondary hover:bg-secondary hover:text-tertiary transition-colors duration-200"
        >
          Regresar a inicio
        </Link>
      </section>
    </main>
  );
}

import { Button } from "@/components/Button";
import { GridCard } from "@/components/GridCard";
import { ImageSlider } from "@/components/ImageSlider";
import { Loader } from "@/components/Loader";
import { formatDate } from "@/functions/formatDate";
import { useCarById } from "@/hooks/useCarById";
import { useEffect } from "react";

export function CarPage() {
  const { car, loading, error } = useCarById();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  if (loading) {
    return (
      <section className="w-full min-h-dvh flex justify-center items-center bg-tertiary">
        <div className="h-full flex justify-center items-center ">
          <Loader />
        </div>
      </section>
    );
  }

  if (error || !car) {
    return (
      <section className="min-h-dvh bg-navbar flex items-center justify-center flex-col gap-12">
        <h1 className="text-white text-5xl text-center font-russo-one text-pretty">
          Carro no encontrado
        </h1>
        <Button to="/">Regresar a Inicio</Button>
      </section>
    );
  }

  return (
    <main className="w-full" id="car-page">
      <section className="py-12 px-6 bg-tertiary text-white min-h-dvh">
        <div className="max-w-6xl w-full mx-auto">
          <nav className=" max-w-xl w-full mx-auto lg">
            <ImageSlider images={car.carrousel} />
          </nav>
          <div className="flex flex-col gap-6 my-6 max-w-4xl w-full mx-auto lg:max-w-6xl lg:my-12">
            <h1 className="font-russo-one text-3xl pt-6 text-pretty lg:text-4xl">
              {car.name}
            </h1>
            <div className="grid grid-cols-2 gap-4 pt-6 md:grid-cols-3">
              <GridCard title="Precio" value={`$${car.price}`} />

              <GridCard title="Año del modelo" value={car.model_year} />
              <GridCard
                title={"Conseguido el"}
                value={formatDate(car.achieve_car_date)}
                className="col-span-2 md:col-span-1 "
              />
            </div>
            <div className="pt-6">
              <h2 className="text-xl font-russo-one lg:text-2xl">
                Descripción
              </h2>
              <p className="pt-4 text-pretty lg:text-lg">{car.description}</p>
            </div>
            <div className="pt-6">
              <h2 className="text-xl font-russo-one lg:text-2xl">
                Conseguido en
              </h2>
              <p className="text-pretty pt-2 lg:text-lg">{car.place}</p>
            </div>
            <Button to="/">Regresar a Inicio</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

import { useCatalogue } from "@/hooks/useCatalogue";
import { Car } from "./Car";
import { Loader } from "./Loader";

export function CarsContainer() {
  const { cars, loading } = useCatalogue();

  if (loading) {
    return (
      <div className="h-full flex justify-center items-center bg-tertiary ">
        <Loader />
      </div>
    );
  }

  if (!cars || cars.length === 0) {
    return (
      <div className="h-full flex justify-center items-center bg-tertiary text-white">
        <p className="text-lg">No hay autos disponibles en este momento.</p>
      </div>
    );
  }

  return (
    <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
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
  );
}

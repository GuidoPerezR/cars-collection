import { useCatalogue } from "@/hooks/useCatalogue";
import { Car } from "./Car";
import { Loader } from "./Loader";

export function CarsContainer() {
  const { cars, loading } = useCatalogue();

  if (loading) {
    return (
      <div className="flex justify-center items-center bg-tertiary ">
        <Loader />
      </div>
    );
  }

  return (
    <div className="mt-6 grid grid-cols-2 gap-4 ">
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

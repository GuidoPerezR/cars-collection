import { STRAPI_BASE_URL } from "@/lib/strapi";
import { Link } from "react-router";

export const Car = ({ id, name, image, model_year }) => {
  const imgURL = image.url.startsWith("http")
    ? image.url
    : `${STRAPI_BASE_URL}${image.url}`;

  return (
    <Link to={`/car/${id}`}>
      <article className="rounded-4xl overflow-hidden relative bg-navbar">
        <img
          src={imgURL}
          alt={name}
          className="aspect-4/7 object-cover object-bottom mask"
        />
        <div className="px-2 pb-3 flex flex-col absolute bottom-0 left-2.5 z-10 justify-center">
          <span className=" font-russo-one">{name}</span>
          <span className="text-stone-200 font-sembibold">{model_year}</span>
        </div>
      </article>
    </Link>
  );
};

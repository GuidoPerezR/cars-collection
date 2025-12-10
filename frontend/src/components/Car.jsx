import { STRAPI_BASE_URL } from "@/lib/strapi";
import { Link } from "react-router";
import { useRef } from "react";
import "@/styles/Catalogue.css";

export const Car = ({ id, name, image, model_year }) => {
  const imgURL = image.url.startsWith("http")
    ? image.url
    : `${STRAPI_BASE_URL}${image.url}`;

  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculamos la rotación basada en la posición del mouse
    // Multiplicamos por un valor (ej. 15) para definir la intensidad del ángulo
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    // Aplicamos la transformación
    // scale3d(1.05...) hace que se acerque un poco
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    // Transición rápida para que siga al mouse fluidamente
    card.style.transition = "transform 0.1s ease-out";
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    // Reseteamos la posición
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    // Transición lenta para que vuelva suavemente a su lugar
    card.style.transition = "transform 0.5s ease-out";
  };

  return (
    <Link to={`/car/${id}`} className="block perspective-1000">
      <article
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="rounded-4xl overflow-hidden relative bg-navbar will-change-transform hover:border-2 hover:border-stone-300"
        style={{ transformStyle: "preserve-3d" }}
      >
        <img
          src={imgURL}
          alt={name}
          className="aspect-4/7 object-cover object-bottom mask pointer-events-none"
        />
        <div className="px-2 pb-3 flex flex-col absolute bottom-0 left-2.5 z-10 justify-center pointer-events-none">
          <span className=" font-russo-one md:text-xl">{name}</span>
          <span className="text-stone-200 font-sembibold md:text-lg">
            {model_year}
          </span>
        </div>
      </article>
    </Link>
  );
};

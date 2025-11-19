export const Car = ({ name, image, model_year }) => {
  return (
    <article className="rounded-4xl overflow-hidden relative bg-navbar">
      <img
        src={image}
        alt=""
        className="aspect-4/7 object-cover object-bottom mask"
      />
      <div className="px-2 pb-3 flex flex-col absolute bottom-0 left-2.5 z-10 justify-center">
        <span className=" font-russo-one">{name}</span>
        <span className="text-stone-200 font-sembibold">{model_year}</span>
      </div>
    </article>
  );
};

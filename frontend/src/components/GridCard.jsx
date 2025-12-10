export function GridCard({ title, value, className }) {
  return (
    <article
      className={`bg-navbar p-4 rounded-2xl flex flex-col justify-center items-center md:py-6 ${className}`}
    >
      <p className=" text-zinc-300 font-medium text-center md:text-lg">
        {title}
      </p>
      <span className="text-xl font-bold text-center md:text-2xl">{value}</span>
    </article>
  );
}

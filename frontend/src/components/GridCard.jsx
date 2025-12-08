export function GridCard({ title, value, className }) {
  return (
    <article
      className={`bg-navbar p-4 rounded-2xl flex flex-col justify-center items-center ${className}`}
    >
      <p className=" text-zinc-300 font-medium text-center">{title}</p>
      <span className="text-xl font-bold">${value}</span>
    </article>
  );
}

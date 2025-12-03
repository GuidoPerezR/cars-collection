import { Link } from "react-router";

export const Header = () => {
  return (
    <header className="w-full px-2.5 py-3 flex items-center gap-2 bg-navbar z-50">
      <Link to={"/"}>
        <img src="./luigi.svg" alt="Icono" className="size-14" />
      </Link>

      <h1 className=" text-white text-xl font-russo-one">Wido's Garage</h1>
    </header>
  );
};

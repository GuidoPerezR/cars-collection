import { GitHub } from "./icons/Github";
import { LinkedIn } from "./icons/LinkedIn";

export const Footer = () => {
  return (
    <footer className="flex w-full px-5 py-12 bg-navbar text-white justify-center border-t border-t-neutral-500 flex-col items-center gap-4">
      <p className="font-russo-one md:text-xl">
        Hecho por {""}
        <a
          href="https://github.com/GuidoPerezR"
          target="blank"
          rel="noopener noreferrer"
          className="hover:text-secondary"
        >
          Guidzero
        </a>
      </p>
      <div className="flex gap-6 ">
        <a
          href="https://github.com/GuidoPerezR"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-secondary"
        >
          <GitHub className="size-6 md:size-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/guidoperezr/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-secondary"
        >
          <LinkedIn className="size-6 md:size-8" />
        </a>
      </div>
    </footer>
  );
};

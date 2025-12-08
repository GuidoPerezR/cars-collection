import { GitHub } from "./icons/Github";
import { LinkedIn } from "./icons/LinkedIn";

export const Footer = () => {
  return (
    <footer className="flex w-full px-5 py-12 bg-navbar text-white justify-center border-t border-t-neutral-500 flex-col items-center gap-4">
      <p className="font-russo-one">
        Hecho por{" "}
        <a
          href="https://github.com/GuidoPerezR"
          target="blank"
          rel="noopener noreferrer"
        >
          Guidzero
        </a>
      </p>
      <div className="flex gap-6">
        <a
          href="https://github.com/GuidoPerezR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub className="size-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/guidoperezr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn className="size-6" />
        </a>
      </div>
    </footer>
  );
};

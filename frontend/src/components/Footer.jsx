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
      <div className="flex gap-4">
        <GitHub className="size-6 ml-2" />
        <LinkedIn className="size-6 ml-2" />
      </div>
    </footer>
  );
};

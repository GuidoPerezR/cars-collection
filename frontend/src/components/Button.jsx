import { Link } from "react-router";

export const Button = ({ href, to, children, className = "" }) => {
  const baseStyles =
    "z-20 px-6 py-3 rounded-3xl bg-tertiary mx-auto text-secondary font-russo-one border border-secondary hover:bg-secondary hover:text-tertiary transition-colors duration-200 inline-block text-center";

  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={`${baseStyles} ${className}`}>
      {children}
    </a>
  );
};

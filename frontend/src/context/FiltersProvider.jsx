import { FiltersContext } from "@/context/filters";
import { useState } from "react";
import { useSearchParams } from "react-router";

export const FiltersProvider = ({ children }) => {
  const [searchParams] = useSearchParams();

  const [filterOption, setFilterOption] = useState(
    searchParams.get("filter") || ""
  );
  return (
    <FiltersContext.Provider value={{ filterOption, setFilterOption }}>
      {children}
    </FiltersContext.Provider>
  );
};

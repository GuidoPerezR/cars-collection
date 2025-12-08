import { FiltersContext } from "@/context/filters";
import { useContext } from "react";
// import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router";

export const useFilters = () => {
  const { filterOption, setFilterOption } = useContext(FiltersContext);
  const [,setSearchParams] = useSearchParams();

  const handleFilterChange = (e) => {
    e.preventDefault();
    const selectedOption = e.target.value;
    setFilterOption(selectedOption);
  };

  useEffect(() => {
    setSearchParams((params) => {
      if (filterOption) {
        params.set("filter", filterOption);
      } else {
        params.delete("filter");
      }
      return params;
    });
  }, [filterOption, setSearchParams]);

  return { filterOption, handleFilterChange };
};

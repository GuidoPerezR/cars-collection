export const filteredData = ({ option, cars, data }) => {
  let filteredData;

  if (!option) filteredData = [...data];

  if (option === "name") {
    filteredData = [...cars].sort((a, b) => a.name.localeCompare(b.name));
  }

  if (option === "newer") {
    filteredData = [...cars].sort((a, b) => b?.model_year - a?.model_year);
  }

  if (option === "price") {
    filteredData = [...cars].sort((a, b) => a?.price - b?.price);
  }

  return filteredData;
};

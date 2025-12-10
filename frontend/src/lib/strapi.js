import qs from "qs";

export const STRAPI_BASE_URL = "http://localhost:1338";

const QUERY_HOME_PAGE = {
  fields: ["name", "model_year"],
  populate: {
    main_image: {
      fields: ["url", "name", "alternativeText", "caption"],
    },
  },
};

const QUERY_CAR_PAGE = {
  fields: [
    "name",
    "description",
    "model_year",
    "achieve_car_date",
    "place",
    "price",
  ],
  populate: {
    carrousel: {
      fields: ["url", "name", "alternativeText", "caption"],
    },
  },
};

export async function getCars() {
  const query = qs.stringify(QUERY_HOME_PAGE);
  const response = await getStrapiData(`/api/cars?${query}`);
  return response;
}

export async function getFilteredCars(filter) {
  const query = qs.stringify({ ...QUERY_HOME_PAGE, ...{ sort: filter } });
  const response = await getStrapiData(`/api/cars?${query}`);
  return response;
}

export async function getCarById(id) {
  const query = qs.stringify(QUERY_CAR_PAGE);
  const response = await getStrapiData(`/api/cars/${id}?${query}`);
  return response;
}

export async function getStrapiData(url) {
  try {
    const response = await fetch(`${STRAPI_BASE_URL}${url}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    return { data: null, error: { message: error.message } };
  }
}

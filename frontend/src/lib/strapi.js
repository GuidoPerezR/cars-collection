import qs from "qs";

export const STRAPI_BASE_URL = "http://localhost:1338";

const QUERY_HOME_PAGE = {
  populate: {
    car: {
      fields: [
        "name",
        "description",
        "achieve_car_date",
        "model_year",
        "place",
        "price",
      ],
      populate: {
        main_image: {
          fields: ["url", "name", "alternativeText", "caption"],
        },
        carousel: {
          fields: ["url", "name", "alternativeText", "caption"],
        },
      },
    },
  },
};

export async function getCars() {
  const query = qs.stringify(QUERY_HOME_PAGE);
  const response = await getStrapiData(`/api/cars-section?${query}`);
  return response?.data;
}

export async function getStrapiData(url) {
  try {
    const response = await fetch(`${STRAPI_BASE_URL}${url}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data from Strapi");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    return null;
  }
}

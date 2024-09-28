import axios from "axios";

const API = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

// HTTP GET METHOD
export const getCountryData = () => {
  return API.get("/all?fields=name,population,region,capital,flags");
};

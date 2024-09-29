import axios from "axios";

const API = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

// HTTP GET METHOD
export const getCountryData = () => {
  return API.get("/all?fields=name,population,region,capital,flags");
};

// HTTP GET METHOD for the particular country.
export const getCountryIndData = (name) => {
  return API.get(
    `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
  );
};

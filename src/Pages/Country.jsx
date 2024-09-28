import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../API/postAPI";
import Loader from "../Components/UI/Loader";
import CountryCard from "../Components/Layout/CountryCard";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) {
    return <Loader />;
  }

  return (
    <section className="country-section">
      <ul className="grid grid-four-cols">
        {countries.map((currCountry, index) => {
          return <CountryCard country={currCountry} key={index} />;
        })}
      </ul>
    </section>
  );
};

export default Country;

/* eslint-disable react/no-unescaped-entities */
import countryData from "../API/countryData.json";

const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Interesting Facts
        <br />
        we're proud of
      </h2>

      {/* This Static single Components */}
      {/* <div className="gradient-cards">
        <div className="card">
          <div className="container-card bg-blue-box">
            <p className="card-title">India</p>
            <p>
              <span className="card-description">Capital:</span>
              New Delhi
            </p>
            <p>
              <span className="card-description">Population:</span>
              1453792455
            </p>
            <p>
              <span className="card-description">Interesting Fact:</span>
              The world's highest cricket ground is in Chail, Himachal Pradesh.
              Built in 1893 after levelling a hilltop, this cricket pitch is
              2444 meters above sea level.
            </p>
          </div>
        </div>
      </div> */}

      <div className="gradient-cards">
        {countryData.map((currCountry) => {
          return (
            <div key={currCountry.id} className="card">
              <div className="container-card bg-yellow-box">
                <p className="card-title">{currCountry.countryName}</p>
                <p>
                  <span className="card-description">Capital:</span>
                  {currCountry.capital}
                </p>
                <p>
                  <span className="card-description">Population:</span>
                  {currCountry.population}
                </p>
                <p>
                  <span className="card-description">Interesting Fact:</span>
                  {currCountry.interestingFact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;

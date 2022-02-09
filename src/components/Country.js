import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';


const Country = () => {
  const [country, setCountry] = useState([]);
  const {name} = useParams();

  //fetching specfic country data
  useEffect(() => {
    const fetchCountry = async () => {
      const res = await fetch(`https://restcountries.com/v2/name/${name}`)
      const country = await res.json()
      setCountry(country)
    }

    fetchCountry();
  },[name])

  return (
  <>
  <Link to='/' className='btn btn-light'>Back Home</Link>
    <div className='country'>
      {country.map((countryInfo) => {
        const {
          numericCode, flag, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages
        } = countryInfo;

        return (
          <section key={numericCode}>
            <div className="country-inner">
              <div className="flag">
                <img src={flag} alt={name} />
              </div>

              <div className="country-details">
                <div>
                  <h2>{name}</h2>
                  <h5>
                    Native Name: <span>{nativeName}</span>
                  </h5>
                  <h5>
                    Population: <span>{population.toLocaleString()}</span>
                  </h5>
                  <h5>
                    Region: <span>{region}</span>
                  </h5>
                  <h5>
                    Sub Region: <span>{subregion}</span>
                  </h5>
                  <h5>
                    Capital: <span>{capital}</span>{" "}
                  </h5>
                </div>

                <div>
                  <h5>
                    Top Level Domain: <span>{topLevelDomain}</span>
                  </h5>
                  <h5>
                    Currencies: <span>{currencies[0].name}</span>
                  </h5>
                  <h5>
                    Languages: <span>{languages[0].name}</span>
                  </h5>
                </div>
              </div>
            </div>


          </section>
        )
      })}
    </div>
  </>
  );
};

export default Country;

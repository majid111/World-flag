import { useState } from 'react';
import './country.css'

const Country = ({ country, handleVisitedCountries }) => {
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => setVisited(!visited);

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <img src={flags?.png} alt="" />
            <h3 style={{color: visited? 'purple':'Black'}}>Name:  {name?.common}</h3>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>code: {cca3}</small></p>
            <button onClick={()=>handleVisitedCountries(country)}>Mark Visited</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            <p>{visited ? 'visited' : 'Going'}</p>
        </div>
    );
};

export default Country;
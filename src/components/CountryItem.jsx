import React from 'react'
import { Card, Img, P } from '../styles/lists' 
import { Link } from "react-router-dom";

  const CountryItem = ({country, flag, population, region, capital, theme, setGetCountry}) => {
    
  return (

    <Card>
      {
      theme === 'light' ? (    
        <>
         
          <div>
            <Link to={`/countries/${country}`}>
              <Img src={ flag } alt={country}/>
              <h2>{ country }</h2>
              <p>Población: {population}</p>
              <p>Región: {region}</p>
              <p>Capital: {capital}</p>
            </Link>
          </div>
         
      </>
      ) : (
        <>
          <div style={{ textDecoration: 'none', color: '#FFF'}} >
              <Img src={ flag } alt={country} />
              <h2>{ country }</h2>
              <p>Población: {population}</p>
              <p>Región: {region}</p>
              <p>Capital: {capital}</p>
          </div>
      </>
      )
      }
    </Card>
  )
}

export default CountryItem
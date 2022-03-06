import React from 'react'
import { Card, Img, P } from '../styles/lists' 
  const CountryItem = ({country, flag, population, region, capital}) => {
  return (
    <Card>
      <a href="" type='button'>
          <Img src={ flag } alt={country} />
          <h2>{ country }</h2>
          <p>Población: {population}</p>
          <p>Región: {region}</p>
          <p>Capital: {capital}</p>
      </a>
    </Card>
  )
}

export default CountryItem
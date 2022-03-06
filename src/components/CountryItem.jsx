import React from 'react'

  const CountryItem = ({country, flag, population, region, capital}) => {
  return (
    <div className='card'>
      <a href="" type='button'>
          <img src={ flag } alt={country} />
          <h3 style={{textAlign:'center', textDecoration: 'none' }}>{ country }</h3>
          <p>Población: {population}</p>
          <p>Región: {region}</p>
          <p>Capital: {capital}</p>
      </a>
    </div>
  )
}

export default CountryItem
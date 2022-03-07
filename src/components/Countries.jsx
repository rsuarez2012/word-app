import React from 'react'
import { Link } from 'react-router-dom';
import { Card, GridContainer, Img } from '../styles/lists';
  const Countries = ({data, search, theme}) => {
  return (
    <>
    {
      theme === 'light' ? (    
        <>
        <h3 style={{color: '#000'}} >Paises</h3>    
        <br />
        </>
      ) : (
        <>
        <h3 style={{color: '#FFF'}}>Paises</h3>    
        <br />
        </>
      )
    }
      <GridContainer>
          {
            search(data).map( (country) => {
              return (
                <div key={country.id}>
                  <Card>
                    {
                    theme === 'light' ? (    
                      <>
                      
                        <div>
                        <Link to={`/countries/${country.country}`}>
                            <Img src={ country.flag } alt={country} />
                            <h2>{ country.country }</h2>
                            <p>Población: {country.population}</p>
                            <p>Región: {country.region}</p>
                            <p>Capital: {country.capital}</p>
                          </Link>
                        </div>
                      
                    </>
                    ) : (
                      <>
                        <div style={{ textDecoration: 'none', color: '#FFF'}} >
                        <Link to={`/countries/${country.country}`}>
                            <Img src={ country.flag } alt={country} />
                            <h2>{ country.country }</h2>
                            <p>Población: {country.population}</p>
                            <p>Región: {country.region}</p>
                            <p>Capital: {country.capital}</p>
                          </Link>
                        </div>
                    </>
                    )
                    }
                  </Card>
                </div>
              )
            })
          }
      </GridContainer>
    </>
  )
}

export default Countries
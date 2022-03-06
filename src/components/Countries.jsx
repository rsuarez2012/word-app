import React from 'react'
import { GridContainer } from '../styles/lists';
import CountryItem from './CountryItem';
  const Countries = ({data, search}) => {
  return (
    <>
      <h3>Paises</h3>    
      <br />
      <GridContainer>
          {
            search(data).map( country => (
              <CountryItem 
                key={country.id}
                  { ...country }
                />

              )
            )
          }
      </GridContainer>
    </>
  )
}

export default Countries
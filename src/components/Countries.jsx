import React from 'react'
import { GridContainer } from '../styles/lists';
import CountryItem from './CountryItem';
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
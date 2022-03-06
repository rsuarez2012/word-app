import React from 'react'

import CountryItem from './CountryItem';
  const Countries = ({data, search}) => {
  return (
    <>
      <h3>Paises</h3>    
      <br />
      <div className='grid'>
          {
            search(data).map( country => (
              <CountryItem 
                key={country.id}
                  { ...country }
                />

              )
            )
          }
      </div>
    </>
  )
}

export default Countries
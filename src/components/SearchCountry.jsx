import React from 'react'

const SearchCountry = ({setQ, q}) => {
  return (

    <div id='searchCountry'>    
        <input
          type="text"
          onChange={(e) => setQ(e.target.value)}
          value={q}
        />
    
    </div>
  )
}

export default SearchCountry
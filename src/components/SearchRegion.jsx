import React from 'react'

const SearchRegion = ({setFilterParam}) => {
 
  return (
    <div id='searchRegion'>
      <select
        onChange={(e) => {
        setFilterParam(e.target.value);
        }}
        className="custom-select"
        aria-label="Filtrar Pais por Continente">
        <option value="All">Todos</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europa</option>
        <option value="Oceania">Oceania</option>
        </select>
        <span className="focus"></span>
        
    </div>
  )
}

export default SearchRegion
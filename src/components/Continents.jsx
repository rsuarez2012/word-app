import React, {useState} from 'react';
import Countries from './Countries';
import SearchCountry from './SearchCountry';
import SearchRegion from './SearchRegion';
import { useCountries } from '../hooks/useCountries';

const Continents = () => {
  const {isLoaded, data, error} = useCountries();//(enviar region o pais)
  const [q, setQ] = useState("");
  const [searchParam] = useState(['region', 'name_official']);
  const [filterParam, setFilterParam] = useState(['All']);

  let search = (data) => {
    return data.filter((dat) => {
      if (dat.region == filterParam) {
        return searchParam.some((newItem) => {
          return (

            dat[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (filterParam == "All") {
        return searchParam.some((newItem) => {
          return (
            dat[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          )
        })

      }
    });
  }
  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return <>loading...</>;
  } else { 
    return (
      <>
      <div className='row'>
        Where in the word?
        <span style={{ float: 'right' }}>Dark Mode</span>
      </div>
      <hr />
      <div className="row">
        <div className="column">
          <SearchCountry 
            setQ={setQ}
            q={q}
            />
        </div>
        <div className="column" style={{ float: 'right' }}>
          <SearchRegion 
            setFilterParam={setFilterParam}
            searchParam={searchParam}
            />
        </div>
      </div>
          
          <Countries 
            data={data}
            search={search}
          
          />
      </>
    )
  }
}

export default Continents
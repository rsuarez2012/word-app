import React, {useState} from 'react';
import Countries from './Countries';
import SearchCountry from './SearchCountry';
import SearchRegion from './SearchRegion';
import { useCountries } from '../hooks/useCountries';

const Continents = ({ themeToggler, theme }) => {
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
        {theme === 'light' ? (
          <>
            <div className='column' style={{color: '#000'}}> Where in the word?</div>

            <div className='column'>
              <button style={{ float: 'right' }} onClick={() => themeToggler()}>
                Dark Mode
              </button>
            </div>
          </>
          ) : (
            <>
            <div className='column' style={{color: '#FFF'}}> Where in the word?</div>
            <div className='column'>

            <button style={{ float: 'right' }} onClick={() => themeToggler()}>
              Ligth Mode
            </button>
            </div>
            </>
          )}
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
            theme={theme}
          />
      </>
    )
  }
}

export default Continents
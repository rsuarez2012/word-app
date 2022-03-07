import React from 'react'
import { useCountryDetail } from '../hooks/useCountryDetail'
import { Link, useParams } from 'react-router-dom';
import { ImgDetail } from '../styles/lists';

const CountryDetailPage = () => {
  const countryId = useParams();
  const  {data, isLoaded}  = useCountryDetail(countryId);
  
  console.log(data[0])
  return (
    <div>
      <Link to={'/'} type="button">Regresar</Link> <br />
        <div className='row'>
          <div className="column">
            <br /><br />
            <ImgDetail src={data[0]?.flags.svg} alt=""/>
          </div>
          <div className="column">    
            {/* Nombre en lenguaje:{data[0]?.name.nativeName} */}
            Nombre:{data[0]?.name.official}   Poblacion{data[0]?.population} <br />
            Region:{data[0]?.region}          Sub Region:{data[0]?.subregion} <br />
            Capital:{data[0]?.capital}     Top level Domine:{data[0]?.tld[0]} <br />
            
            Frontera: 
            {
              (data[0]?.borders) ?                
                data[0]?.borders.map( border => {
                  return (
                    <>
                    <Link to={`/countries/${data[0]?.name.common}`}>
                    <button>{border}</button> 
                    </Link>
                    </>
                    ) 
                  })
              :
              'No tiene Frontera'
            }
                       
          </div>
        </div>
    </div>
  )
}

export default CountryDetailPage
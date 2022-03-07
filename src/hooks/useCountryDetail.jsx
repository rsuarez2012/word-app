import {useState, useEffect} from 'react';
import { getCountry } from '../services/getCountry';
export const useCountryDetail = ({countryId}) => {
  // let [resultQuery, setResultQuery] = useState([]);
  const [resultQuery, setResultQuery] = useState({
    data: [],
    isLoaded: false,
    error: null
  });
  useEffect( () => {
    getCountry(countryId).then(respuesta => {
      setResultQuery({
        data: respuesta,
        isLoaded: true
      });
    })
    
  },[getCountry] )
  console.log(resultQuery);

  return resultQuery;

}
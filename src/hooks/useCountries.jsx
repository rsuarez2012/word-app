import {useState, useEffect} from 'react';
import { getData } from '../services/getData';
export const useCountries = () => {
  const [data, setData] = useState({
    data: [],
    isLoaded: false,
    error: null
  });
  useEffect( () => {
    getData().then(respuesta => {
      setData({
        data: respuesta,
        isLoaded: true
      })
    });
  
  },[getData])

  return data;

}
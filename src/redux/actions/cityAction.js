import axios, { Axios } from "axios";

export const FETCH_CITY_REQUEST = 'FETCH_CITY_REQUEST';
export const FETCH_CITY_SUCCESS = 'FETCH_CITY_SUCCESS';
export const FETCH_CITY_FAILURE = 'FETCH_CITY_FAILURE';

//ACTIONS
export const fetchCityRequest = ()=>{
    return {
        type: FETCH_CITY_REQUEST
    }
}

export const fetchCitySucces = (city)=>{
    return {
        type: FETCH_CITY_SUCCESS,
        payload:city
    }
}

export const fetchCityFailure = (error)=>{
    return {
        type: FETCH_CITY_FAILURE,
        payload:error
    }
}

const fetchCity = (city)=>{
    
    return (dispatch)=>{
        dispatch(fetchCityRequest()); // con dispatch llamamos al reducer
        
        const apiKey = '45e8605753566b2799b9ab7165ab278a'
        
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => {
            dispatch(fetchCitySucces([response.data]))
        })
        .catch(error => {
            dispatch(fetchCityFailure('City not found'))
        });
    }
}

export default fetchCity;


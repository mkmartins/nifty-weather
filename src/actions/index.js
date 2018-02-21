import axios from 'axios'

const API_KEY = 'c26e13a20c36aaf0eeeea1537c51194a'
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {

    const URL = `${ROOT_URL}&q=${city},us`
    const request = axios.get(URL)

    return{
        type:FETCH_WEATHER,
        payload: request
    }
}
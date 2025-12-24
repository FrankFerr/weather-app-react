import { CoordinatesRequest } from "../classes/CoordinatesRequest"
import type { CurrentWeatherRequest } from "../classes/CurrentWeatherRequest"
import { Endpoints } from "../environment/Endpoints"

export async function getCoordinatesByLocation(coordinatesRequest: CoordinatesRequest){
    let url = Endpoints.CoordinatesByLocation
    url += `?q=${coordinatesRequest.city}&limit=${coordinatesRequest.limit}&appid=${coordinatesRequest.appId}`

    let data
    try{
        const response = await fetch(url)
    
        data = await response.json()
    }
    catch(err){
        console.log(`Errore durante il recupero delle coordinate della localita' ${coordinatesRequest.city} -> `, err)
        data = null
    }

    return data
}

export async function getCurrentWeatherByCoordinates(currentWeatherRequest: CurrentWeatherRequest){
    let url = Endpoints.CurrentWeather

    url += `?key=${currentWeatherRequest.apiKey}&q=${currentWeatherRequest.latitude},${currentWeatherRequest.longitude}`

    if(currentWeatherRequest.language !== null && currentWeatherRequest.language !== undefined && currentWeatherRequest.language !== ""){
        url += `&lang=${currentWeatherRequest.language}`
    }

    let data
    try{
        const response = await fetch(url)

        data = await response.json()
    }
    catch(err){
        console.log("Errore durate il recupero delle condizioni meteo: lat=", currentWeatherRequest.latitude, " lon=", currentWeatherRequest.longitude, " -> ", err)
        data = null
    }

    return data
}

export async function getCurrentWeatherByLocation(currentWeatherRequest: CurrentWeatherRequest){
    let url = Endpoints.CurrentWeather

    url += `?key=${currentWeatherRequest.apiKey}&q=${currentWeatherRequest.city}`

    if(currentWeatherRequest.language !== null && currentWeatherRequest.language !== undefined && currentWeatherRequest.language !== ""){
        url += `&lang=${currentWeatherRequest.language}`
    }

    let data
    try{
        const response = await fetch(url)

        data = await response.json()
    }
    catch(err){
        console.log("Errore durate il recupero delle condizioni meteo: città", currentWeatherRequest.city, " -> ", err)
        data = null
    }

    return data
}
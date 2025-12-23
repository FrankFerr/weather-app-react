import { CoordinatesRequest } from "../classes/CoordinatesRequest"
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
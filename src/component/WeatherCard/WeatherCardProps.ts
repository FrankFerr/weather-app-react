import { CurrentWeatherResponse } from "../../classes/CurrentWeatherResponse"

export interface WeatherCardProps{
    city: string
    weatherData: CurrentWeatherResponse
}
import { WeatherTemp } from "../WeatherTemp/WeatherTemp"
import type { WeatherCardProps } from "./WeatherCardProps"
import { WeatherWind } from "../WeatherWind/WeatherWind"
import { WeatherPressure } from "../WeatherPressure/WeatherPressure"

export function WeatherCard({ weatherData } : WeatherCardProps){
    return (
        <div className="w-96 rounded-lg border-4 border-black bg-[rgb(220,220,220)]">
            <h1 className="text-center text-black text-2xl font-bold">{weatherData.location.name} ({weatherData.location.region})</h1>
            <h3 className="text-center text-black text-xl">{weatherData.location.country}</h3>
            <img className="w-36 h-36 mx-auto" src={weatherData.current.condition.icon} alt="Immagine meteo"></img>
            <p className="text-center text-black text-lg">{weatherData.current.condition.text}</p>

            <WeatherTemp
                temp={weatherData.current.temp_c}
                feelslike={weatherData.current.feelslike_c}
                windchill={weatherData.current.windchill_c}
                heatindex={weatherData.current.heatindex_c}
                dewpoint={weatherData.current.dewpoint_c}
            ></WeatherTemp>

            <WeatherWind
                wind_kph={weatherData.current.wind_kph}
                wind_degree={weatherData.current.wind_degree}
                wind_dir={weatherData.current.wind_dir}
                gust_kph={weatherData.current.gust_kph}
            ></WeatherWind>

            <WeatherPressure
                pressure_mb={weatherData.current.pressure_mb}
                precip_mm={weatherData.current.precip_mm}
                humidity={weatherData.current.humidity}
                cloud={weatherData.current.cloud}
            ></WeatherPressure>
        </div>
    )
}

export default WeatherCard
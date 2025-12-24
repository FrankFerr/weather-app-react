import { WeatherTemp } from "../WeatherTemp/WeatherTemp"
import type { WeatherCardProps } from "./WeatherCardProps"
import { WeatherWind } from "../WeatherWind/WeatherWind"
import { WeatherPressure } from "../WeatherPressure/WeatherPressure"
import { WeatherHeader } from "../WeatherHeader/WeatherHeader"

export function WeatherCard({ weatherData } : WeatherCardProps){
    return (
        <div className="w-96 rounded-lg border-4 border-black bg-[rgb(220,220,220)]">
            <WeatherHeader
                name={weatherData.location.name}
                region={weatherData.location.region}
                country={weatherData.location.country}
                icon={weatherData.current.condition.icon}
                text={weatherData.current.condition.text}
            ></WeatherHeader>

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
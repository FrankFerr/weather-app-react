import { WeatherTemp } from "../WeatherTemp/WeatherTemp"
import type { WeatherCardProps } from "./WeatherCardProps"

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

            <div className="w-full mt-2">
                <h1 className="text-left text-black text-xl font-bold ml-2">Vento</h1>
                <ul className="list-disc ml-12 mt-2">
                    <li className="text-black text-lg">Velocità {weatherData.current.wind_kph}km/h</li>
                    <li className="text-black text-lg">Direzione in gradi {weatherData.current.wind_degree}°</li>
                    <li className="text-black text-lg">Direzione cardinale {weatherData.current.wind_dir}</li>
                    <li className="text-black text-lg">Velocità raffiche {weatherData.current.gust_kph}km/h</li>
                </ul>
            </div>

            <div className="w-full mt-2">
                <h1 className="text-left text-black text-xl font-bold ml-2">Pressione e precipitazioni</h1>
                <ul className="list-disc ml-12 mt-2">
                    <li className="text-black text-lg">Pressione atmosferica {weatherData.current.pressure_mb}mbar</li>
                    <li className="text-black text-lg">Precipitazioni {weatherData.current.precip_mm}mm</li>
                    <li className="text-black text-lg">Umidità {weatherData.current.humidity}%</li>
                    <li className="text-black text-lg">Nuvolosità {weatherData.current.cloud}%</li>
                </ul>
            </div>
        </div>
    )
}

export default WeatherCard
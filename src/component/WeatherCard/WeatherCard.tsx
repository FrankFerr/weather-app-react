import type { WeatherCardProps } from "./WeatherCardProps"

function WeatherCard({ city, weatherData } : WeatherCardProps){
    
    return (
        <div className="w-1/3 rounded-lg border-2 border-black bg-[rgb(220,220,220)]">
            <h1 className="text-center text-black text-2xl font-bold">{city}</h1>
            {/* <img src="" alt="Immagine meteo"></img> */}
        </div>
    )
}

export default WeatherCard
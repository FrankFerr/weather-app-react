import type { WeatherWindProps } from "./WeatherWindProps";

export function WeatherWind(props: WeatherWindProps){
    return (
        <div className="w-full mt-2">
            <h1 className="text-left text-black text-xl font-bold ml-2">Vento</h1>
            <ul className="list-disc ml-12 mt-2">
                <li className="text-black text-lg">Velocità {props.wind_kph}km/h</li>
                <li className="text-black text-lg">Direzione in gradi {props.wind_degree}°</li>
                <li className="text-black text-lg">Direzione cardinale {props.wind_dir}</li>
                <li className="text-black text-lg">Velocità raffiche {props.gust_kph}km/h</li>
            </ul>
        </div>
    )
}
import type { WeatherTempProps } from "./WeatherTempProps";

export function WeatherTemp(props: WeatherTempProps){
    return (
        <div className="w-full mt-2">
            <h1 className="text-left text-black text-xl font-bold ml-2">Temperatura {props.temp}°C</h1>
            <ul className="list-disc ml-12 mt-2">
                <li className="text-black text-lg">Percepita {props.feelslike}°C</li>
                <li className="text-black text-lg">Con vento freddo {props.windchill}°C</li>
                <li className="text-black text-lg">Indice di calore {props.heatindex}°C</li>
                <li className="text-black text-lg">Punto di rugiada {props.dewpoint}°C</li>
            </ul>
        </div>
    )
}
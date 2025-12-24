import type { WeatherPressureProps } from "./WeatherPressureProps";

export function WeatherPressure(props: WeatherPressureProps){
    return (
        <div className="w-full mt-2">
            <h1 className="text-left text-black text-xl font-bold ml-2">Pressione e precipitazioni</h1>
            <ul className="list-disc ml-12 mt-2">
                <li className="text-black text-lg">Pressione atmosferica {props.pressure_mb}mbar</li>
                <li className="text-black text-lg">Precipitazioni {props.precip_mm}mm</li>
                <li className="text-black text-lg">Umidità {props.humidity}%</li>
                <li className="text-black text-lg">Nuvolosità {props.cloud}%</li>
            </ul>
        </div>
    )
}
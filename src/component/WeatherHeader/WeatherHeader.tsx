import type { WeatherHeaderProps } from "./WeatherHeaderProps";

export function WeatherHeader(props: WeatherHeaderProps){
    return (
        <>
            <h1 className="text-center text-black text-2xl font-bold">{props.name} ({props.region})</h1>
            <h3 className="text-center text-black text-xl">{props.country}</h3>
            <img className="w-36 h-36 mx-auto" src={props.icon} alt="Immagine meteo"></img>
            <p className="text-center text-black text-lg">{props.text}</p>
        </>
    )
}
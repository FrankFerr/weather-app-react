import { useEffect, useState } from 'react'
import './App.css'
import WeatherCard from "./component/WeatherCard/WeatherCard"
import SearchBar from './component/SearchBar/SearchBar'
import { CurrentWeatherResponse } from './classes/CurrentWeatherResponse'
import { CoordinatesRequest } from "./classes/CoordinatesRequest"
import { getCoordinatesByLocation } from './utility/WeatherApi'

function App() {
  const [location, setLocation] = useState("")
  const [weatherData, setWeatherData] = useState(new CurrentWeatherResponse())

  const onSearchLocation = (location: string) => {
    location = location.trim()

    if(location == "")
      return

    setLocation(location)
  }

  useEffect(() => {
    const apiKey = import.meta.env.VITE_OWM_API_KEY
    const request = new CoordinatesRequest(location, apiKey)

    let responseCoordinates = null
    getCoordinatesByLocation(request).then((data) => responseCoordinates = data)

    console.log(responseCoordinates)
  }, [location])

  return (
    <>
      <div className='w-screen h-screen bg-[rgba(24,24,24,0.3)] flex justify-center items-center'>
        <SearchBar onClick={onSearchLocation}></SearchBar>
        <WeatherCard city={location} weatherData={weatherData}></WeatherCard>
      </div>
    </>
  )
}

export default App

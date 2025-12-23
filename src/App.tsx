import { useEffect, useState } from 'react'
import './App.css'
import WeatherCard from "./component/WeatherCard/WeatherCard"
import SearchBar from './component/SearchBar/SearchBar'
import { CoordinatesRequest } from "./classes/CoordinatesRequest"
import { getCoordinatesByLocation } from './utility/WeatherApi'
import { apiKey } from './environment/ApiKey'
import { CurrentWeatherResponse } from './classes/CurrentWeatherResponse'

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
    if(location == "")
      return

    const request = new CoordinatesRequest(location, apiKey)

    const fetchData = async () => {
      getCoordinatesByLocation(request).then((data) => console.log(data[0]))
      
    }

    fetchData()
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

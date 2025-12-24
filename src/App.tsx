import { useEffect, useState } from 'react'
import './App.css'
import WeatherCard from "./component/WeatherCard/WeatherCard"
import SearchBar from './component/SearchBar/SearchBar'
import { getCurrentWeatherByLocation } from './utility/WeatherApi'
import { apiKeyWeatherApi } from './environment/ApiKey'
import { plainToInstance } from 'class-transformer'
import { CurrentWeatherResponse } from './classes/CurrentWeatherResponse'
import { CurrentWeatherRequest } from './classes/CurrentWeatherRequest'

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

    const request = new CurrentWeatherRequest(apiKeyWeatherApi)
    request.city = location

    let response: CurrentWeatherResponse
    
    const fetchData = async () => {
      getCurrentWeatherByLocation(request).then((data) => {
        response = plainToInstance(CurrentWeatherResponse, data)
        
        setWeatherData(response)
      })
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

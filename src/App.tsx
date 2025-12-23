import { useState } from 'react'
import './App.css'
import WeatherCard from "./component/WeatherCard/WeatherCard"
import SearchBar from './component/SearchBar/SearchBar'

function App() {
  const [location, setLocation] = useState("")

  const onSearchLocation = (location: string) => {
    location = location.trim()

    if(location == "")
      return

    setLocation(location)
  }

  return (
    <>
      <div className='w-screen h-screen bg-[rgba(24,24,24,0.3)] flex justify-center items-center'>
        <SearchBar onClick={onSearchLocation}></SearchBar>
        <WeatherCard city={location}></WeatherCard>
      </div>
    </>
  )
}

export default App

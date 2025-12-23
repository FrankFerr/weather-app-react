import './App.css'
import WeatherCard from "./component/WeatherCard/WeatherCard"
import SearchBar from './component/SearchBar/SearchBar'

function App() {
  
  return (
    <>
      <div className='w-screen h-screen bg-[rgba(24,24,24,0.3)] flex justify-center items-center'>
        <SearchBar></SearchBar>
        <WeatherCard></WeatherCard>
      </div>
    </>
  )
}

export default App

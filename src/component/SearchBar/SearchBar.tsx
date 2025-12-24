import { useState, type FormEvent } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import type { SearchBarProps } from "./SearchBarProps"

const inputStyle = "w-full rounded-xl p-2 pr-8 border-4 border-black"
const inputFocusStyle = "focus:border-[rgb(102,138,255)] focus:outline-none focus:shadow-[0_0_12px_rgba(102,138,255,0.8)]"

export function SearchBar({ onClick } : SearchBarProps){
    const [location, setLocation] = useState("")

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        onClick(location)
        setLocation("")
    }

    return (
        <form className="fixed top-4 w-2/5" onSubmit={onSubmit}>
            <input 
                className={`${inputStyle} ${inputFocusStyle}`} 
                type="text" 
                value={location} 
                onChange={(e) => setLocation(e.target.value)} 
                placeholder="Insert location..." 
            />
            <button type="submit"><FaMagnifyingGlass size={22} className="absolute right-3 top-3" /></button>
        </form>
    )
}

export default SearchBar
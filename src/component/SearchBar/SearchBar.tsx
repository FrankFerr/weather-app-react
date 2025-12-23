import { FaMagnifyingGlass } from "react-icons/fa6";

const inputStyle = "w-full rounded-xl p-2 pr-8 border-4 border-black"
const inputFocusStyle = "focus:border-[rgb(102,138,255)] focus:outline-none focus:shadow-[0_0_12px_rgba(102,138,255,0.8)]"

function SearchBar(){
    return (
        <div className="fixed top-4 w-1/3">
            <input className={`${inputStyle} ${inputFocusStyle}`} type="text" placeholder="Insert location..." />
            <FaMagnifyingGlass size={22} className="absolute right-3 top-3" />
        </div>
    )
}

export default SearchBar
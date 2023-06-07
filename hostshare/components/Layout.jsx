import Link from 'next/link'
import listings from '../data/listings.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Layout({children}) {

    const [search, setSearch] = useState({
        city: "",
        guests: "# of guests"
    });
    console.log(search.city, search.guests)
    function handleChange(e) {
        const {name, value} = e.target

        setSearch(prevSearch => {
            return {
                ...prevSearch,
                [name]: value
            }
        })
        
    }

    const cityList = listings.data.map(listing => {
        return (
            listing.info.location.city
        )
    })
    const uniqueCityList = [...new Set(cityList)]

    const listingCities = uniqueCityList.map(city => {
        return (
            <option key={city} value={city}>{city}</option>
        )
    })

    return (
        <div>
            <nav className="sticky top-0 bg-default-color sm:h-20 h-36 min-w-full flex sm:flex-row flex-col sm:items-center sm:justify-around shadow-lg z-20 pr-8 pl-8 flex-shrink-0">
                <Link href="/" className="ml-auto mr-auto"><img src='../images/hostshareBlack.png' className="h-14 w-120"/></Link> 
        <div className="flex justify-center">
            <div className="w-[550px] h-8 border-[1px] rounded-xl bg-[white] flex items-center justify-between">
                <select value={search.city} onChange={handleChange} className="rounded-xl w-32 pl-2" name="city">
                    <option value="null">Choose City</option>
                    {listingCities}
                </select>
                <input type="date" className="rounded-xl w-32 pl-2"/>
                -
                <input type="date" className="rounded-xl w-32 pl-2"/>
                <input name="guests" value={search.guests} onChange={handleChange} type="number" placeholder='# of guests' className="rounded-xl w-28 pl-2"/>
            </div>
            <div className="bg-[red] rounded-full h-8 w-8 flex-shrink-0 flex justify-center items-center cursor-pointer"><FontAwesomeIcon className="text-[white]" icon={faSearch}></FontAwesomeIcon></div>
        </div>

                <div className="w-24 m-2 rounded-xl mr-auto ml-auto flex items-center justify-between">
                    <img src="../images/profilepic.jpg" className="w-8 rounded-full" />
                </div>
            </nav>
            <div className="flex flex-col items-center">
                {children}

            </div>
        </div>
    )
}
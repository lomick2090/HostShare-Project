import Link from 'next/link'
import listings from '../data/listings.json'

export default function Layout({children}) {

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
            <nav className="container sticky top-0 bg-default-color h-20 min-w-full flex items-center shadow-lg z-20 p-8">
                <Link href="/"><img src='../images/hostshareBlack.png' className="h-14 w-120"/></Link> 
                <div className="w-[550px] h-8 border-[1px] rounded-xl mr-auto ml-auto bg-[white] flex items-center justify-between">
                    <select className="rounded-xl w-32 pl-2" name="city">
                        <option value="null">Choose City</option>
                        {listingCities}
                    </select>
                    <input type="date" placeholder='Keywords' className="rounded-xl w-32 pl-2"/> 
                    -
                    <input type="date" placeholder='Keywords' className="rounded-xl w-32 pl-2"/>
                    <input type="number" placeholder='# of guests' className="rounded-xl w-28 pl-2"/>
                </div>

                <div className="w-24 h-8 border-[1px] rounded-xl mr-auto ml-auto bg-[white] flex items-center justify-between">
                    <img src="../public/images/profpic.png" className="w-24" />
                </div>
            </nav>
            <div className="flex flex-col items-center">
                {children}

            </div>
        </div>
    )
}
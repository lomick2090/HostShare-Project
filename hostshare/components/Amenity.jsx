import { useState } from "react"

export default function Amentity({amenityTag, amenities}) {
    const [hovered, setHovered] = useState(false)

    function handleHover() {
        setHovered(prevHover => !prevHover)
    }
    const shallowAmenities= [...amenities]
    const filteredAmenities = shallowAmenities.filter(amenity => {
        return amenity.group == amenityTag
    })

    const amentityElements = filteredAmenities.map(amenity => {
        return (
            <li key={amenity.title} className="whitespace-nowrap">{amenity.title}</li>
        )
    })

    

    return (
        <div className="bg-default-color p-2 rounded-sm relative cursor-pointer" onMouseEnter={handleHover} onMouseLeave={handleHover} >
            <h1 className="text-[white]">{amenityTag}</h1>

            {
                hovered

                &&

                <div className="flex flex-col p-8 z-30 bg-[white] rounded-md absolute left-0 bottom-10 border-2">
                    <ul>
                        {amentityElements}
                    </ul>
                </div>
            }
        </div>
    )
}
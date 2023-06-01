import Listing from "./Listing"


export default function Grid({listings}) {

    const gridElements = []
    for (let i = 0; i < 18; i++ ) {
        let listing = listings.data[i]
        gridElements.push(
            <Listing 
                key={i}
                title={listing.info.title}
                host={listing.info.host}
                rating={listing.info.ratings}
                location={listing.info.location.city}
                available={listing.info.available}
                maxGuest={listing.info.maxGuestCapacity}
                images={listing.info.images.data}
                mainImage={listing.info.mainImage}
                description={listing.info.description}
                details={listing.info.details.data}
            />
        )
    }

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
            {gridElements}
        </div>
    )
}
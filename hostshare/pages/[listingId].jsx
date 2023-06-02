import Layout from "../components/Layout";
import { useRouter } from "next/router";
import listings from "../data/listings.json"
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function ListingPage(){
    const [descOn, setDescOn] = useState(false)

    const router = useRouter()
    const listing = listings.data.find(element => {
        return element.info.id == router.query.listingId
    })

    function handleClick() {
        setDescOn(prevDesc => !prevDesc)
    }

    

    if (listing) {
        console.log(listing)
        const {description, details, location, price, amenities, host, images, mainImage, ratings, title, type, visibleREviewCount} = listing.info
        const imageElements = [];
        for (let i = 3; i < 12; i++) {
            let image = images.data[i];
            imageElements.push(
                <img  src={image.url} className={`w-64 h-1/3 aspect-[${image.aspectRatio}/1]  border-2`}/> 
            )
        }

        
    
        return (
            <Layout>
            { 
            listing 

            &&
                
                <div className="w-4/5 flex flex-col items-center mt-8">

                    <h1 className="text-[40px] font-bold">{title}</h1>

                    <br />

                    <div className="self-start">
                        <p className="font-bold">{location.city}</p>
                        <p className="text-default-color">
                            <FontAwesomeIcon icon={faStar} className="fa-xs mr-1"/>
                            {ratings.guestSatisfactionOverall} / 5
                        </p>
                        <p className=" text-default-color">
                            ${price} / night
                        </p>
                        {
                            host
                            &&
                            <p className="text-default-color">{host.name}</p>
                        }
                    </div>

                    <br />


                    <div className='flex justify-center h-[77vh]'>
                        <img src={mainImage.url} alt="Main image" className="w-2/5 border-4"/>
                        <div className={`flex flex-wrap w-3/5`}>
                            {imageElements}
                        </div>
                    </div>
                    <br /><br /><br />
                    <div className="w-3/5 shadow-lg p-8 self-start">
                    {
                        descOn ?

                        <div>
                            <p>{description}</p>

                            <p className="underline font-bold text-end cursor-pointer" onClick={handleClick}>Show Less ...</p>

                        </div>

                        :
                        <div>
                            <p>{description.slice(0, 450) + ' ...'}</p>
    
                            <p className="underline font-bold text-end cursor-pointer" onClick={handleClick}>Show More ...</p>

                        </div>
                    }

                    </div>
                </div>
                }
            </Layout>
        )
    } else {
    return (
            <Layout>
                
            </Layout>
        )
    }
}
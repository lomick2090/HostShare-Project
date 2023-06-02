import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

export default function Listing(props) {
    const {title, host, rating, mainImage, location, price, id} = props;
    return (
        <Link href={id}>
            <div className="flex flex-col justify-center self-center items-center rounded-xl pb-8 pt-4 max-w-md hover:z-10 shadow-md">
                <h1 className="text-lg font-bold ml-8 mt-4 mr-8 mb-2 text-center">
                    {title}
                </h1>
                <p className="self-end mr-8 ">{location}</p>
                <p className="self-end mr-8  text-default-color">
                    <FontAwesomeIcon icon={faStar} className="fa-xs mr-1"/>
                    {rating.guestSatisfactionOverall} / 5
                </p>
                <p className="self-end mr-8  text-default-color">
                    ${price} / night
                </p>
                {
                host
                &&
                <p className="self-end mr-8 text-default-color">- {host.name}</p>
                }
                <div className="max-w-sm max-h-64 overflow-hidden hover:max-h-none transition-all rounded-xl">
                    <img src={mainImage.url} alt="Main Image" className={`aspect-[${mainImage.aspectRatio}/1] max-w-sm rounded-xl z-0 mt-4 hover:z-10`}/>
                </div>
            </div>
        </Link>
    )
}
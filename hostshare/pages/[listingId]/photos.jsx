import { useRouter } from "next/router"
import listings from "../../data/listings.json"
import Layout from "../../components/Layout"
import Link from "next/link"

export default function PhotosPage() {

    const router = useRouter()
    const listingId = router.query.listingId
    const listing = listings.data.find(element => {
        return element.info.id == listingId
    })

    const {images} = listing.info
    
    const imageElements = images.data.map((image, i) => {
        return (
            <div key={i}>
                <img src={image.url} className={`w-[${image.width}px] h-[${image.height}px] max-w-[45vw]`}/>
            </div>
        )
    })

    return (
        <Layout>
            <Link href={`/${listingId}`} className="underline text-[blue] mt-8">Back</Link>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
                {imageElements}
            </div>
            <Link href={`/listingId`} className="underline text-[blue] mb-8 mt-4">Back</Link>

        </Layout>
    )
}
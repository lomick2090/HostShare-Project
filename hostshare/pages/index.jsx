import Layout from "../components/Layout"
import Grid from "../components/Grid"
import listings from '../data/listings.json'

export default function Home() {
  return (
      <Layout>
        <div className="text-center">searchbar</div>

        <div className="flex justify-center">
          <Grid listings={listings}/>
        </div>
      </Layout>
  )
}

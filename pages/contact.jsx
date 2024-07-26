import { getListings } from "../utils/datocmsHelper"
import Link from "next/link";

export async function getStaticProps() {
  
  const data = await getListings();
  return {
    props: { listings: data.allHomepages }
  };
}

const contact = ({ listings }) => {
  return (
    <div>
      <h1>contact</h1>
      <div className="max-w-6xl">
        {listings.map((listing) => 
          <Link key={listing.slug} href={`/contatti/${listing.slug}`}>{listing.name}</Link>
        )}
      </div>
    </div>
  );
};

export default contact;

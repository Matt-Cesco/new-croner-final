import { getListings, getListing } from "../../utils/datocmsHelper";
import Link from "next/link";
import HomeSection from "../../components/HomeSection";

export async function getStaticPaths() {
  const data = await getListings();
  return {
    paths: data.allHomepages.map((listing) => ({ params: { slug: listing.slug } })),
    fallback: false,
  };
}

export const getStaticProps = async (context) => {
  const data = await getListing(context.params.slug);
  console.log(data.homepage.homepageDetail);
  return {
    props: { listing: data.homepage },
  };
}

const Listing = ({listing}) => {
  return (
    <div>
      <h1>page name</h1>
      <div className="max-w-6xl">{listing.name}</div>
      <div className="w-full">
        {listing.homepageDetail.map((section) => (
          <HomeSection details={section} key={section.id} />
        ))}
      </div>
    </div>
  );
};

export default Listing;


import { gql, GraphQLClient } from 'graphql-request';
import Head from 'next/head';
import HomeSection from '../components/HomeSection';
import Navbar from '../components/Navbar';
import CaseStudy from '../components/CaseStudy';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';


export default function Home({homepage}) {
  return (
    <div>
      <Head>
        <title>Croner datoCMS test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Navbar />
        {homepage.homepageDetail.map((section) => (
          <HomeSection details={section} key={section.id} />
        ))}
        <CaseStudy />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

const query = gql`
query {
  homepage {
    id
    name
    slug
    homepageDetail {
      ... on LandingPageRecord {
        __typename
        bigTitleH1
        subtitleH2
        image {
          url
        }
        firstButton
        secondButton
      }
      ... on SupportBusinessRecord {
        __typename
        subTitleTop
        title
        id
        secondSectionCards{
          image {
            url
          }
          title
          id
          description
          highligthedWord
        }
      }
      ... on EventRecord {
        __typename
        subtitleTop
        title
        description
      }
      ... on FreeResourceRecord {
        __typename
        subtitleTop
        title
        id
        freeResourcesCard {
          image {
            url
          }
          title
          id
          description
        }
      }
    }
  }
}
`;

export async function getStaticProps () {
   const endpoint = "https://graphql.datocms.com";
   const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
         "content-type": "application/json",
         authorization: "Bearer " + process.env.DATOCMS_API_KEY
      }
   });
   const course = await graphQLClient.request(query);
   return {
      props: course
   }
}
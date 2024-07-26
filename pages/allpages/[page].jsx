import { gql, GraphQLClient } from "graphql-request";
// import HomeSection from "../components/HomeSection"

const Page = ({ page }) => {
  return (
    <div className="max-w-6xl mx-auto py-28">
      <h1 className="text-6xl pb-12">blog title</h1>
      <pre>{JSON.stringify(page, null, 2)}</pre>
    </div>
  );
};

export default Page;


const query = gql`
  query MyQuery {
    allHomepages {
      slug
    }
  }
`;

const queryPage = gql`
  query ($slug: String) {
    homepage(filter: { slug: { eq: $slug } }) {
      id
      name
      slug
      homepageDetail {
        ... on EventRecord {
          __typename
          subtitleTop
          title
          description
        }
      }
    }
  }
`;

export const getStaticPaths = async () => {
  const endpoint = "https://graphql.datocms.com";
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "content-type": "application/json",
      authorization: "Bearer " + process.env.DATOCMS_API_KEY,
    },
  });
  const dataPage = await graphQLClient.request(query);
    return {
      fallback: false,
      paths: 
        dataPage.allHomepages.map((page) => ({
          params: { page: page.slug },
        }))
    };
};

export async function getStaticProps({ params }) {
  const { page } = params;
  const endpoint = "https://graphql.datocms.com";
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "content-type": "application/json",
      authorization: "Bearer " + process.env.DATOCMS_API_KEY,
    },
  });
  const data = await graphQLClient.request(queryPage);
  return {
    props: { pages: data.homepage },
  };
}




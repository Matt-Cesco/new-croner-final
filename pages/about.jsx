
import { gql, GraphQLClient } from "graphql-request";
import Link from "next/link";

const AboutPage = ({ pages }) => {
  return (
    <div className="max-w-6xl mx-auto py-28">
      <h1 className="text-6xl pb-12">blog title</h1>
      <ul>
        {pages.map((page) => (
          <li key={page.slug}>
            <Link href={`/allpages/${page.slug}`}>{page.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;

const query = gql`
  query MyQuery {
    allHomepages {
      slug
      name
    }
  }
`;

export async function getStaticProps() {
  const endpoint = "https://graphql.datocms.com";
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "content-type": "application/json",
      authorization: "Bearer " + process.env.DATOCMS_API_KEY,
    },
  });
  const data = await graphQLClient.request(query);
  return {
    props: { pages: data.allHomepages }
  };
}


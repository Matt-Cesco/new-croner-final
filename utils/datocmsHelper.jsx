import { GraphQLClient, gql } from "graphql-request";

const endpoint = "https://graphql.datocms.com";
const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.DATOCMS_API_KEY}`,
  },
});


export const getListings = async () => {
  
  const listingsQuery = gql`
    query MyQuery {
      allHomepages {
        slug
        name
      }
    }
  `;
    
  return graphQLClient.request(listingsQuery);
}

export const getListing = async (slug) => {
  
  const querySpage = gql`
    query ($slug: String) {
      homepage(filter: { slug: { eq: $slug } }) {
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
            secondSectionCards {
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

  return graphQLClient.request(querySpage, {
    slug,
  });
};
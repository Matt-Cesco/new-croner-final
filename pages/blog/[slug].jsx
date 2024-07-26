import { Image, StructuredText } from "react-datocms";
import { request } from "../../lib/datocms";

const PATHS_QUERY = `
query MyQuery {
  allArticles {
    slug
  }
}
`;

export const getStaticPaths = async () => {
  const slugQuery = await request({
    query: PATHS_QUERY,
  });

  let paths = [];
  slugQuery.allArticles.map((p) => paths.push(`/blog/${p.slug}`));

  return {
    paths,
    fallback: false,
  };
};

const ARTICLE_QUERY = `
query MyQuery($slug: String) {
  article(filter: {slug: {eq: $slug}}) {
    author {
      name
    }
    content {
      value
            blocks {
        __typename
        ... on ImageRecord {
          id
          image { 
            responsiveImage {
              alt
              aspectRatio
              base64
              bgColor
              height
              sizes
              src
              srcSet
              title
              webpSrcSet
              width
            }
          }
        }
      }
    }
    coverImage {
      responsiveImage {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
      }
    }
    id
    publishDate
    slug
    title
  }
}
`;

export const getStaticProps = async ({ params }) => {
  const post = await request({
    query: ARTICLE_QUERY,
    variables: { slug: params.slug },
  });
  return {
    props: {
      postData: post.article,
    }
  }
};

const BlogPost = (props) => {
  const { postData } = props;
  return (
    <>
      <div className="max-w-5xl mx-auto pt-28">
        <div className="flex flex-col">
          <p className="text-sm">Blog post</p>
          <h2 className="text-5xl font-bold">{postData.title}</h2>
          <div className="flex justify-between py-12">
            <div className="flex">
              <p className="text-base font-semibold">Share</p>
              <p className="text-base font-semibold px-4">Download</p>
            </div>
            <div className="flex">
              <p className="text-base font-semibold">{postData.author.name}</p>
              <p className="text-base font-semibold px-2">/</p>
              <p className="text-base font-semibold">{postData.publishDate}</p>
            </div>
          </div>
          <Image data={postData.coverImage.responsiveImage} />
        </div>
      </div>
      <div className="max-w-5xl mx-auto">
        <p className="text-lg pt-12 font-semibold">
          Maternity Pay is an employee right. this is a p text-lg font semibold
        </p>
        <h5 className="text-4xl font-semibold pt-10">
          this is a static h4 text-4xl
        </h5>
        <p className="text-lg pt-6">
          this is a static p tag
        </p>
        <StructuredText
          data={postData.content}
          renderBlock={({ record }) => {
            switch (record.__typename) {
              case "ImageRecord":
                return <Image data={record.image.responsiveImage} />;
              default:
                return null;
            }
          }}
        />
      </div>
      <div className="w-full bg-red-dark mt-28">
        <div className="max-w-screen-xl mx-auto py-12">
          <div className="flex justify-between items-end">
            <div className="py-3"></div>
            <div className="">
              <h6 className="text-xs uppercase pb-1 text-white">
                &bull; Book a <span className="font-bold">free</span> Call
              </h6>
              <h3 className="text-4xl text-white font-semibold pb-3">
                Speak with an expert
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto">
        <div className="pt-28 pb-20">
          <div className="flex justify-between items-end">
            <div className="max-w-xl">
              <h3 className="text-4xl font-bold">Related articles:</h3>
            </div>
            <h5 className="underline underline-offset-4 hover:text-red text-base font-semibold max-w-xl">
              View all blog posts &rarr;
            </h5>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto pb-20"></div>
    </>
  );
};

export default BlogPost;

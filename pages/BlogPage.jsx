import BlogItem from "../components/BlogItem";
import { request } from "../lib/datocms";

const HOMEPAGE_QUERY = `
query MyQuery {
  allArticles {
    title
    author {
      name
    }
    content {
      value
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
    excerpt
    id
    publishDate
    slug
  }
}
`;
export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
  });
  return {
    props: { data },
  };
}

const BlogPage = (props) => {
  const { data } = props;
  const posts = data.allArticles;
  return (
    <div className="max-w-6xl mx-auto py-28">
      <h1 className="text-6xl pb-12">blog title</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((p) => (
          <BlogItem key={p.id} data={p} />
        ))}
      </div>
    </div>
  );
};



export default BlogPage;

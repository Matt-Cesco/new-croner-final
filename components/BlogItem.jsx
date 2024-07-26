import Link from "next/link";
import { Image } from "react-datocms";
import maternityImage from "../public/images/maternity-pay.png";

const BlogItem = (props) => {
  const { data } = props;
  return (
    <div className="overflow-hidden">
      <Link href={`/blog/${data.slug}`}>
        <Image
          data={data.coverImage.responsiveImage}
          className="transition hover:scale-110 duration-300"
        />
        <div className="pt-3 pb-12">
          <h5 className="text-xl font-semibold py-3">{data.title}</h5>
          <p className="text-sm">{data.excerpt}</p>
          <h5 className="underline underline-offset-2 text-red-600 text-base font-semibold pt-3">
            Read this article &rarr;
          </h5>
        </div>
      </Link>
    </div>
  );
};

export default BlogItem;

import Heading from "@/components/Heading";
import ShareLinkButton from "@/components/ShareLinkButton";
import { getReview, getSlugs } from "@/lib/reviews";
import { Metadata } from "next";

interface ReviewPageParams {
  slug: string;
}

interface ReviewPageProps {
  params: ReviewPageParams;
}

export async function generateStaticParams(): Promise<ReviewPageParams[]> {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params: { slug },
}: ReviewPageProps): Promise<Metadata> {
  const { title } = await getReview(slug);
  return { title };
}
const ReviewPage = async ({ params: { slug } }: ReviewPageProps) => {
  const { title, date, image, __html } = await getReview(slug);
  return (
    <div className="flex items-center justify-center flex-col">
      <Heading>{title}</Heading>
      <div className="flex gap-3 items-baseline">
        <p className="italic pb-2">{date}</p>
        <ShareLinkButton />
      </div>
      <img src={image} width="640" height="360" className="mb-2 rounded" />
      <article
        className="prose prose-slate"
        dangerouslySetInnerHTML={{ __html }}
      />
    </div>
  );
};

export default ReviewPage;

import Heading from "@/components/Heading";
import { getLatestReview } from "@/lib/reviews";
import Link from "next/link";

export const metadata = {
  title: "Indie Gamer",
  description: "Only the best indie games, reviewed for you.",
};

export default async function HomePage() {
  const { image, title, slug } = await getLatestReview();

  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you</p>

      <div className="m-auto bg-white border rounded w-80 shadow hover:shadow-xl sm:w-full">
        <Link href={`/reviews/${slug}`} className="flex flex-col sm:flex-row">
          <img
            src={image}
            width="320"
            height="180"
            className="mb-2 rounded-t sm:mb-0 sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="font-semibold font-orbitron py-1 text-center sm:px-2">
            {title}
          </h2>
        </Link>
      </div>
    </>
  );
}

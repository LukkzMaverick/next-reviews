import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Reviews",
};

type Props = {};

const ReviewsPage = async (props: Props) => {
  const reviews = await getReviews();
  return (
    <div className="flex items-center justify-center min-h-[87vh]">
      <div className="flex flex-col justify-center h-full">
        <Heading>Reviews</Heading>
        <ul className="gap-y-4 gap-x-8 md:grid-cols-2 md:grid lg:grid-cols-3 lg:gap-x-12 xl:gap-x-16 2xl:gap-x-20">
          {reviews.map(({ title, image, slug }) => {
            return (
              <li
                className="bg-white border rounded shadow w-80 hover:shadow-xl m-auto mb-7"
                key={slug}
              >
                <Link href={`/reviews/${slug}`}>
                  <img
                    src={image}
                    width="320"
                    height="180"
                    className="mb-2 rounded-t"
                  />
                  <h2 className="font-semibold font-orbitron py-1 text-center">
                    {title}
                  </h2>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ReviewsPage;

import { readdir, readFile } from "node:fs/promises";
import { marked } from "marked";
import matter from "gray-matter";
import { redirect } from "next/navigation";

interface Review {
  title: string;
  date: string;
  image: string;
  __html: string;
  slug: string;
}

export const getReview = async (slug: string): Promise<Review> => {
  let text: string = "";
  try {
    text = await readFile(`./src/content/reviews/${slug}.md`, "utf-8");
  } catch (error) {
    return redirect("/reviews");
  }
  const data = matter(text);
  const content = data.content;
  const title: string = data.data.title;
  const date: string = data.data.date;
  const image: string = data.data.image;
  const __html = marked(content, { headerIds: false, mangle: false });
  return { title, date, image, __html, slug };
};

export async function getReviews(): Promise<Array<Review>> {
  const slugs = await getSlugs();
  const reviews: Array<Review> = [];
  for (const slug of slugs) {
    const review = await getReview(slug);
    reviews.push(review);
  }
  return reviews.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getLatestReview(): Promise<Review> {
  const reviews = await getReviews();
  return reviews[0];
}

export async function getSlugs(): Promise<string[]> {
  const files = await readdir("./src/content/reviews");
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
}

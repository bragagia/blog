import { ArticleHeader, BlogHeader } from "@/components/blogHeader";

export default function ArticleOne() {
  return (
    <>
      <BlogHeader />
      <ArticleHeader
        number="1"
        title="This is the beginning"
        subtitle={
          "When life give you lemons, go find an apple tree.\n Lemons sucks."
        }
        date="16 august"
        year="2023"
      />

      <article className="prose max-w-none md:prose-xl">
        <p>
          Seriously, have you ever tried bitting a lemon? The only way to make
          it taste good is to add a fuckton of sugar to make it taste
          acceptable. Well, i tasted a pretty bad lemon not long ago, and it was
          aweful. It was called "employment".
        </p>

        <p>PS: I actually like lemons btw</p>
      </article>
    </>
  );
}

import { BlogHeader } from "@/components/blogHeader";
import Image from "next/image";
import Link from "next/link";

function ArticleLink({
  number,
  title,
  subtitle,
  date,
}: {
  number: string;
  title: string;
  subtitle: string;
  date: string;
}) {
  return (
    <Link href={"/" + number + "/" + title.replaceAll(" ", "-").toLowerCase()}>
      <li className="mb-4 font-light group relative">
        <span className="font-bold">{title}</span>
        <br />

        <span className="text-base">
          {subtitle + " "}
          <span className="text-base italic">- {date}</span>
        </span>

        <svg
          className="transition-all duration-200 ease-in-out opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-700"
          width="24"
          height="24"
        >
          <image xlinkHref="/arrow-right.svg" />
        </svg>
      </li>
    </Link>
  );
}

function YearHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-bold text-2xl mt-12 mb-2 josefin">{children}</div>
  );
}

export default async function Home() {
  return (
    <>
      <BlogHeader />
      <main>
        <ol reversed className="list-decimal text-lg pt-2 pb-8">
          <YearHeader>2023</YearHeader>

          <ArticleLink
            number="1"
            title="This is the start"
            subtitle="When life give you lemons, go find an apple tree. Lemons sucks."
            date="16 august"
          />
        </ol>

        <Image
          className="sepiatify w-full"
          src="/me-at-my-best.jpeg"
          alt="A beautiful picture of me (trying to) look cool"
          title="I don't usually smoke okay? Stop judging me"
          width={696}
          height={1080}
        />
      </main>
    </>
  );
}

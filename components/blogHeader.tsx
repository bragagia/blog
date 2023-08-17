import Link from "next/link";

export function ArticleHeader({
  number,
  title,
  subtitle,
  date,
  year,
}: {
  number: string;
  title: string;
  subtitle: string;
  date: string;
  year: string;
}) {
  return (
    <>
      <nav className="prata text-xs flex flex-row justify-between items-center mb-12 mt-3 text-gray-700">
        <Link href="/">
          <svg
            className="inline mr-2"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            style={{ transform: "scaleX(-1)" }}
          >
            <image xlinkHref="/arrow-right.svg" />
          </svg>
          Go back home
        </Link>
        {date} {year} - Article {number}
      </nav>

      <h2 className="text-4xl font-bold mb-6 md:text-5xl">{title}</h2>
      <div className="text-xl italic mb-6 text-gray-700 md:text-2xl">
        {subtitle.split("\n").map((item, key) => {
          return (
            <span key={key}>
              {item}
              <br />
            </span>
          );
        })}
      </div>
    </>
  );
}

export function BlogHeader() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center justify-between md:mt-8 mb-8">
        <Link href="/">
          <h1 className="prata text-4xl md:text-5xl my-2 font-bold">
            Mathias
            <br />
            Bragagia
          </h1>
        </Link>

        <p className="crimson italic text-md md:max-w-xs my-2 text-justify text-gray-700">
          Life is a dance in which one must opt to either follow the structured
          choreography of a maestro or move freely to the rhythm of one's soul.
          Each has its merit, but only the latter can bring unexplored ideas.
          Yet, I dance!
        </p>
      </div>

      <hr className="h-px my-1 border-0 bg-black" />
    </header>
  );
}

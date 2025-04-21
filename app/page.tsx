import Image from "next/image";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mb-2 text-gray-500 josefin">{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-gray-800 space-y-4 font-light pl-6">{children}</div>
  );
}

function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
}

export default function HomePage() {
  return (
    // Apply light theme styles, using Inter as the base font (font-sans)
    <div className="bg-white p-8 md:p-12 max-w-4xl mx-auto font-sans text-gray-700 leading-relaxed">
      {/* Header Section - Updated to 2 columns */}

      <header className="mb-12">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between  mb-8">
          <div className="flex flex-row my-2 items-end gap-4">
            <div>
              <Image
                src="/me-way-too-corpo.jpg"
                alt="Mathias Bragagia"
                width={1895}
                height={3237}
                className="w-16 inline sepiatify"
              />
            </div>

            <h1 className="prata text-4xl md:text-5xl font-bold">
              Mathias
              <br />
              Bragagia
            </h1>
          </div>

          <div className="crimson italic text-md md:max-w-xs my-2 text-justify text-gray-700 flex flex-col">
            <a href="tel:+33781208307" className="hover:text-blue-600">
              07 81 20 83 07
            </a>
            <a
              href="mailto:mathias@bragagia.com"
              className="hover:text-blue-600"
            >
              mathias@bragagia.com
            </a>
            <a
              href="https://www.linkedin.com/in/bragagiamathias"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              linkedin.com/in/bragagiamathias
            </a>
          </div>
        </div>

        <hr className="h-px my-1 border-0 bg-black" />
      </header>

      {/* Summary Section */}
      <section className="mb-10">
        {/* Section Title - Use josefin class */}
        <SectionTitle>Summary</SectionTitle>
        <SectionContent>
          <p>
            <span className="font-semibold">
              Freelance Senior Full-Stack Developer & Entrepreneur in Paris
            </span>
            , my job is to turn your cool ideas into seriously impactful digital
            products.
          </p>

          <p>
            As I have worn both Technical and Product hats, I bring a unique
            perspective that combines deep technical expertise with a strategic
            vision for product development.
          </p>

          <p>
            <span className="font-semibold">In short:</span>
            <br />
            <span className="mr-1 font-semibold">→</span>Taking complex web &
            mobile apps (PWA, SSR, Native) from zero to one, end-to-end
            <br />
            <span className="mr-1 font-semibold">→</span>Mastery of the modern
            tech stack: Cloud (AWS, Vercel), CI/CD, Docker, databases (Postgres,
            NoSQL), Microservices, queues, comprehensive testing...
            <br />
            <span className="mr-1 font-semibold">→</span>Clear communication and
            strong teamwork (fully bilingual French/English)
          </p>
        </SectionContent>
      </section>

      {/* Side Projects Section */}
      <section className="mb-10">
        <SectionTitle>Portfolio - Pro & Side Projects</SectionTitle>
        <SectionContent>
          <div className="grid grid-cols-2 gap-x-6 gap-y-5 text-gray-800 text-sm">
            <ul className="space-y-1 group border border-gray-300 p-3 rounded-md">
              <li className="text-lg font-semibold text-gray-800 josefin mb-1 flex flex-row justify-between items-center">
                <div>Sunrise Briefing</div>
                <div className="text-xs text-gray-500 flex h-4 w-4 opacity-0 group-hover:opacity-100">
                  <ArrowRight />
                </div>
              </li>
              <li className="text-sm text-gray-500 mb-1 font-light">
                AI-generated daily news summaries delivered each sunrise.
              </li>
            </ul>

            <ul className="space-y-1 group border border-gray-300 p-3 rounded-md">
              <li className="text-lg font-semibold text-gray-800 josefin mb-1 flex flex-row justify-between items-center">
                <div>YouWise</div>
                <div className="text-xs text-gray-500 opacity-0 group-hover:opacity-100">
                  #offline
                </div>
              </li>
              <li className="text-sm text-gray-500 mb-1 font-light">
                Spaced repetition system (SRS) application focused on learning
                business and self-development book summaries.
              </li>
            </ul>

            <ul className="space-y-1 group border border-gray-300 p-3 rounded-md">
              <li className="text-lg font-semibold text-gray-800 josefin mb-1 flex flex-row justify-between items-center">
                <div>Todobeast</div>
                <div className="text-xs text-gray-500 opacity-0 group-hover:opacity-100">
                  #offline
                </div>
              </li>
              <li className="text-sm text-gray-500 mb-1 font-light">
                Project management-focused todo application with emphasis on
                prioritization, clean UI/UX, and efficient task handling.
              </li>
            </ul>

            <ul className="space-y-1 group border border-gray-300 p-3 rounded-md">
              <li className="text-lg font-semibold text-gray-800 josefin mb-1 flex flex-row justify-between items-center">
                <div>Dome</div>
                <div className="text-xs text-gray-500 opacity-0 group-hover:opacity-100">
                  #offline
                </div>
              </li>
              <li className="text-sm text-gray-500 mb-1 font-light">
                Real estate agent all-in-one tool, from prospecting to closing a
                deal, including broadcasting to all real estate portals.
              </li>
            </ul>

            <ul className="space-y-1 group border border-gray-300 p-3 rounded-md">
              <li className="text-lg font-semibold text-gray-800 josefin mb-1 flex flex-row justify-between items-center">
                <div>Splinar</div>
                <div className="text-xs text-gray-500 opacity-0 group-hover:opacity-100">
                  #offline
                </div>
              </li>
              <li className="text-sm text-gray-500 mb-1 font-light">
                CRM hygiene tool automating deduplication and mass operations in
                Hubspot.
              </li>
            </ul>
          </div>
        </SectionContent>
      </section>

      {/* Experience Section */}
      <section className="mb-10">
        {/* Section Title - Use josefin class */}
        <SectionTitle>Professional Experience</SectionTitle>
        <SectionContent>
          <div className="space-y-6">
            {/* Job entries */}
            {/* Example: Swan */}
            <div>
              {/* Job title - Use josefin class */}
              <h3 className="text-lg font-semibold text-gray-800 josefin">
                Software Engineer
              </h3>
              <p className="text-sm text-gray-500 mb-1 font-light">
                Swan | Paris, France | Feb 2025 - Present (3 months)
              </p>
              <ul className="list-disc list-inside text-gray-800 space-y-1 text-sm font-light marker:text-gray-400">
                <li>
                  Contributed to a leading European BaaS platform, simplifying
                  banking integration via APIs.
                </li>
                <li>
                  Focused on scalable back-end development using Node.js and
                  TypeScript.
                </li>
                <li>
                  Worked with reactive architecture, Kafka, GraphQL, CI/CD, AWS,
                  and Docker.
                </li>
              </ul>
            </div>
            {/* Splinar */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 josefin">
                CTO - Co-Founder
              </h3>
              <p className="text-sm text-gray-500 mb-1 font-light">
                Splinar | Paris, France | Oct 2023 - Sep 2024 (1 year)
              </p>
              <ul className="list-disc list-inside text-gray-800 space-y-1 text-sm font-light marker:text-gray-400">
                <li>
                  Co-founded and led technology for Splinar, a CRM hygiene tool
                  automating deduplication and mass operations in Hubspot.
                </li>
                <li>
                  Responsible for architecture, development, and deployment of
                  the platform.
                </li>
              </ul>
            </div>
            {/* Liberkeys */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 josefin">
                Product Manager
              </h3>
              <p className="text-sm text-gray-500 mb-1 font-light">
                Liberkeys | Paris, France | Jan 2021 - Apr 2023 (2 years 4
                months)
              </p>
              <ul className="list-disc list-inside text-gray-800 space-y-1 text-sm font-light marker:text-gray-400">
                <li>
                  Led design and development of a B2B SaaS PWA for real estate
                  agents.
                </li>
                <li>
                  Managed functional scope, conducted user interviews, designed
                  major features (e-signature, site generation, task
                  automation).
                </li>
                <li>
                  Implemented and evangelized tools like Slite and Linear.app.
                </li>
                <li>
                  Defined roadmap, managed QA, and acted as liaison between
                  departments.
                </li>
              </ul>
              <h3 className="text-lg font-semibold text-gray-800 mt-3 josefin">
                Product Engineer
              </h3>
              {/* Added margin top */}
              <p className="text-sm text-gray-500 mb-1 font-light">
                Liberkeys | Paris, France | Dec 2018 - Jan 2021 (2 years 2
                months)
              </p>
              <ul className="list-disc list-inside text-gray-800 space-y-1 text-sm font-light marker:text-gray-400">
                <li>Developed tools and APIs using Go and Ruby on Rails.</li>
                <li>
                  Managed AWS infrastructure, implemented microservices, and
                  improved local development workflow with Docker.
                </li>
                <li>Performed zero-downtime server migrations.</li>
              </ul>
            </div>
            {/* Scalingo */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 josefin">
                Fullstack Developer
              </h3>
              <p className="text-sm text-gray-500 mb-1 font-light">
                Scalingo | Strasbourg, France | Apr 2017 - Aug 2017 (5 months)
              </p>
              <ul className="list-disc list-inside text-gray-800 space-y-1 text-sm font-light marker:text-gray-400">
                <li>
                  Developed across the Scalingo PaaS platform using Go, Ruby on
                  Rails (backend), and EmberJS (frontend).
                </li>
                <li>Worked extensively with microservices and Docker.</li>
                <li>Provided technical support and managed incidents.</li>
              </ul>
            </div>
            {/* Previous Roles */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 josefin">
                Previous Roles (2014-2017)
              </h3>
              <ul className="list-disc list-inside mt-2 text-gray-800 space-y-1 text-sm font-light marker:text-gray-400">
                <li>
                  <strong className="font-medium text-gray-700">
                    Development Manager | Teacher at Play2Code
                  </strong>
                  (Alsace Digitale): Organized coding workshops, managed teams,
                  created tutorials.
                </li>
                <li>
                  <strong className="font-medium text-gray-700">
                    Secretary & Resource Manager
                  </strong>
                  (Student office - Epitech): Managed team, organized events,
                  handled budget and partnerships.
                </li>
                <li>
                  <strong className="font-medium text-gray-700">
                    Pedagogical Assistant
                  </strong>
                  (Epitech): Mentored students, evaluated projects.
                </li>
                <li>
                  <strong className="font-medium text-gray-700">
                    C# Developer (Internship)
                  </strong>
                  (VOSSLOH): Developed a C# library for railway simulation
                  testing.
                </li>
              </ul>
            </div>
          </div>
        </SectionContent>
      </section>

      {/* Education Section */}
      <section className="mb-10">
        {/* Section Title - Use josefin class */}
        <SectionTitle>Education</SectionTitle>

        <SectionContent>
          <div>
            {/* School name - Use josefin class */}
            <h3 className="text-lg font-semibold text-gray-800 josefin">
              EPITECH - European Institute of Technology
            </h3>
            <p className="text-sm text-gray-500 font-light">
              Master of Technology - MS, Information Technology,
              Entrepreneurship | 2014 - 2019
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 josefin">
              Université Laval
            </h3>
            <p className="text-sm text-gray-500 font-light">
              Certificat en Technologie de l'Information | 2017 - 2018
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 josefin">
              Lycée Alphonse Heinrich
            </h3>
            <p className="text-sm text-gray-500 font-light">
              Baccalauréat | 2011 - 2014
            </p>
          </div>
        </SectionContent>
      </section>

      {/* Honors & Awards Section */}
      <section className="mb-10">
        {/* Section Title - Use josefin class */}
        <SectionTitle>Honors & Awards</SectionTitle>
        <SectionContent>
          <p className="text-gray-800 font-light">
            Prix Alsace Digitale - Hacking Industry Camp 2016
          </p>
        </SectionContent>
      </section>

      {/* Skills Section */}
      <section className="mb-10">
        {/* Section Title - Use josefin class */}
        <SectionTitle>Core Skills</SectionTitle>
        <SectionContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-5 text-gray-800 text-sm">
            <ul className="space-y-1">
              <li className="font-medium text-gray-700 text-base mb-1">
                Languages & Frameworks
              </li>
              <li className="font-light">JavaScript, TypeScript</li>
              <li className="font-light">React.js, React Native</li>
              <li className="font-light">Node.js, Golang</li>
              <li className="font-light">HTML5, CSS3</li>
            </ul>
            <ul className="space-y-1">
              <li className="font-medium text-gray-700 text-base mb-1">
                Architecture & Ops
              </li>
              <li className="font-light">Microservices</li>
              <li className="font-light">LLMOps</li>
              <li className="font-light">Progressive Web Apps (PWA)</li>
              <li className="font-light">Server-Side Rendering (SSR)</li>
              <li className="font-light">CI/CD (e.g., GitHub Actions)</li>
              <li className="font-light">Docker</li>
            </ul>
            <ul className="space-y-1">
              <li className="font-medium text-gray-700 text-base mb-1">
                Cloud & Databases
              </li>
              <li className="font-light">AWS, Vercel, Scalingo</li>
              <li className="font-light">PostgreSQL, NoSQL (e.g., MongoDB)</li>
              <li className="font-light">GraphQL, REST APIs</li>
              <li className="font-light">Kafka</li>
            </ul>
            <ul className="space-y-1">
              <li className="font-medium text-gray-700 text-base mb-1">
                Product & Methodology
              </li>
              <li className="font-light">Agile Development</li>
              <li className="font-light">Product Management</li>
              <li className="font-light">User Research & Design</li>
              <li className="font-light">Testing (Unit, Integration)</li>
            </ul>
            <ul className="space-y-1">
              <li className="font-medium text-gray-700 text-base mb-1">
                Languages
              </li>
              <li className="font-light">French (Native)</li>
              <li className="font-light">English (Full Professional)</li>
            </ul>
          </div>
        </SectionContent>
      </section>
    </div>
  );
}

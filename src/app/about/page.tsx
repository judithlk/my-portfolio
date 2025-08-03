"use client";

import { Tenor_Sans, Cardo } from "next/font/google";

import { motion } from "framer-motion";

const tenor = Tenor_Sans({
  subsets: ["latin"], // Optional: define subsets
  weight: ["400"], // Optional: define the weight
});

const cardo = Cardo({
  subsets: ["latin"], // Optional: define subsets
  weight: ["400"], // Optional: define the weight
});

export default function About() {
  return (
    <>
      <main className="w-[80%] sm:w-[70%] m-auto pt-5 sm:mt-auto sm:p-10 space-y-8 ">
        <div className="w-[100%] flex justify-between ">
          <div className="w-6 h-6 border-t-2 border-l-2 border-[#5B3256]"></div>
          <div className="w-6 h-6 border-t-2 border-r-2 border-[#5B3256]"></div>
        </div>
        <div className="px-10">
          <div className="flex flex-col justify-between space-y-8">
            <motion.div
              transition={{
                type: "tween",
                ease: "easeIn",
                duration: 0.2,
                delay: 0.4,
              }}
              initial={{ x: -200, visibility: "hidden" }}
              animate={{ x: 0, visibility: "visible" }}
              exit={{ opacity: 0 }}
            >
              <h1
                className={`text-[3rem] sm:text-[5rem] text-[#614051] ${cardo.className}`}
              >
                about me
              </h1>
            </motion.div>

            <motion.div
              transition={{
                type: "tween",
                ease: "easeIn",
                duration: 0.3,
                delay: 0.5,
              }}
              initial={{ y: 300, visibility: "hidden" }}
              animate={{ y: 0, visibility: "visible" }}
              exit={{ opacity: 0 }}
            >
              <div>
                <h2
                  className={`text-[1.2rem] sm:text-[1.5rem]  ${cardo.className}`}
                >
                  I am...
                </h2>
                <p
                  className={`text-[1rem] smtext-[1.1rem] font-[400] text-[#222] ${tenor.className}`}
                >
                  a Full-Stack Software Engineer with hands-on experience
                  building end-to-end web applications, both independently and
                  within cross-functional teams. My expertise spans both
                  frontend and backend development, with some experience in
                  mobile app development. 
                </p>
                <br />
                <p
                  className={`text-[1rem] smtext-[1.1rem] font-[400] text-[#222] ${tenor.className}`}
                >
                  On the frontend, I work with
                  TypeScript, Next.js, Tailwind CSS, Redux, and Axios to create
                  clean, responsive user interfaces. On the backend, I use
                  Node.js, Express.js, and MongoDB to build and integrate
                  RESTful APIs. I also have foundational experience with React
                  Native for mobile development, and a working knowledge of
                  Python and C.
                </p>
                <br />
                <p
                  className={`text-[1rem] smtext-[1.1rem] font-[400] text-[#222] ${tenor.className}`}
                >
                  Alongside my technical background, I hold a B.Eng in Computer Engineering (July, 2025) and I am Google-certified in
                  Project Management, hence I have a solid grasp of Agile and Scrum
                  practices, which help me contribute effectively in team
                  environments. At my core, I am driven by curiosity and purpose
                  — always learning, building, and improving.
                </p>

                <div className="xl:flex xl:space-x-2 items-center my-5">
                  <h2
                    className={`${cardo.className} text-[1.1rem] sm:text-[1.3rem] text-[#AB274F]`}
                  >
                    fact:
                  </h2>{" "}
                  <p
                    className={`${tenor.className} text-[1rem] sm:text-[1.1rem] text-[#AB274F] font-[400]`}
                  >
                    I am a firm believer that if your goals do not intimidate
                    you, they are not large enough.
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <h2
                  className={`text-[1.2rem] sm:text-[1.5rem]  ${cardo.className}`}
                >
                  Experience
                </h2>
                <div className="md:flex md:space-x-6 items-start">
                  <div className="md:w-[20%]">
                    <h2
                      className={`${cardo.className} text-[1.2rem] text-[#AB274F]`}
                    >
                      2024-2025
                    </h2>
                    {/* <h2 className={`${cardo.className} text-[1.2rem] text-[#AB274F]`}>present</h2> */}
                  </div>
                  <div>
                    <h2
                      className={`${cardo.className} text-[1.2rem] text-[#614051]`}
                    >
                      Frontend Developer - NASCO Satelite (NASSAT)
                    </h2>
                    <p
                      className={`text-[1rem] smtext-[1.1rem] font-[400] text-[#222] ${tenor.className}`}
                    >
                      Worked with the engineering team to build, optimize and
                      maintain highly functional systems.
                    </p>
                  </div>
                </div>
                <div className="md:flex md:space-x-6 items-start">
                  <div className="md:w-[18%]">
                    <h2
                      className={`${cardo.className} text-[1.2rem] text-[#AB274F]`}
                    >
                      2022-2023
                    </h2>
                    {/* <h2
                      className={`${cardo.className} text-[1.2rem] text-[#AB274F]`}
                    >
                      2023
                    </h2> */}
                  </div>
                  <div>
                    <h2
                      className={`${cardo.className} text-[1.2rem] text-[#614051]`}
                    >
                      Web Developer - Freelance
                    </h2>
                    <p
                      className={`text-[1rem] smtext-[1.1rem] font-[400] text-[#222] ${tenor.className}`}
                    >
                      Developed and managed websites for organizations.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* <div className="flex items-center space-x-5">
          <h2 className="text-xl font-[200]">Read more <Link href="/about" className="text-[#AB274F] font-[400] hover:underline hover:decoration-[#AB274F]">about me</Link> or check out <Link href="/projects" className="text-[#AB274F] font-[400] hover:underline hover:decoration-[#AB274F]">my projects</Link>.</h2>
        </div> */}
        </div>
        <div className="w-[100%] flex justify-between ">
          <div className="w-6 h-6 border-b-2 border-l-2 border-[#5B3256]"></div>
          <div className="w-6 h-6 border-b-2 border-r-2 border-[#5B3256]"></div>
        </div>
      </main>
    </>
  );
}

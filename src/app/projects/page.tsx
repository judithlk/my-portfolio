"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { Tenor_Sans, Cardo } from "next/font/google";

import { RxExternalLink } from "react-icons/rx";

const tenor = Tenor_Sans({
  subsets: ["latin"], // Optional: define subsets
  weight: ["400"], // Optional: define the weight
});

const cardo = Cardo({
  subsets: ["latin"], // Optional: define subsets
  weight: ["400"], // Optional: define the weight
});

export default function Projects() {
  // const age = (new Date().getFullYear() - 2001)
  // const projects: object[] = [
  //   {name:,
  //     tools: [],

  //   }
  // ]
  return (
    <>
      <main className="w-[80%] sm:w-[70%] m-auto p-10 space-y-8 ">
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
                className={`text-[3rem] md:text-[5rem] text-[#614051] ${cardo.className}`}
              >
                my projects
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
              className="space-y-3"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                <div className="rounded-lg p-5 border border-[#997A8D] space-y-2">
                  {/* <Link href="https://judithlk.github.io/book-finder/" className="flex space-x-1 items-center"> */}
                  <h2
                    className={`text-[1.1rem] sm:text-[1.3rem] hover:text-[#AB274F] hover:underline ${cardo.className}`}
                  >
                    E-Signing System
                  </h2>
                  {/* <RxExternalLink size={20} color="#AB274F" />
                  </Link> */}
                  <p
                    className={`text-[0.9rem] font-[400] text-[#222] ${tenor.className}`}
                  >
                    Worked with the team at NASSAT on a system that
                    enables electronic signing and sharing of documents.{" "}
                    <b>NextJS. Tailwind CSS. TypeScript. Redux</b>
                  </p>

                  {/* <Link
                    href="https://github.com/judithlk/book-finder"
                    className="block"
                  >
                    <h2
                      className={`text-[1rem] font-[400] text-[#AB274F] hover:underline ${tenor.className}`}
                    >
                      Source code{" "}
                    </h2>
                  </Link> */}
                </div>
                <div className="rounded-lg p-5 border border-[#997A8D] space-y-2">
                  {/* <Link href="https://judithlk.github.io/book-finder/" className="flex space-x-1 items-center"> */}
                  <h2
                    className={`text-[1.1rem] sm:text-[1.3rem] hover:text-[#AB274F] hover:underline ${cardo.className}`}
                  >
                    Vendor App
                  </h2>
                  {/* <RxExternalLink size={20} color="#AB274F" />
                  </Link> */}
                  <p
                    className={`text-[0.9rem] font-[400] text-[#222] ${tenor.className}`}
                  >
                    Single-tenant e-commerce app for vendors to manage products
                    and customer orders, built with the team at NASSAT
                    <b>NextJS. Tailwind CSS. TypeScript. Redux</b>
                  </p>

                  {/* <Link
                    href="https://github.com/judithlk/book-finder"
                    className="block"
                  >
                    <h2
                      className={`text-[1rem] font-[400] text-[#AB274F] hover:underline ${tenor.className}`}
                    >
                      Source code{" "}
                    </h2>
                  </Link> */}
                </div>
              </div>

              <h2 className={`text-[1.1rem] sm:text-[1.3rem] text-[#AB274F] ${cardo.className}`}>Personal Projects</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="rounded-lg p-5 border border-[#997A8D] space-y-3">
                  <Link
                    href="https://judithlk.github.io/book-finder/"
                    className="flex space-x-1 items-center"
                  >
                    <h2
                      className={`text-[1.1rem] sm:text-[1.3rem] hover:text-[#AB274F] hover:underline ${cardo.className}`}
                    >
                      Book Finder App
                    </h2>
                    <RxExternalLink size={20} color="#AB274F" />
                  </Link>
                  <p
                    className={`text-[0.9rem] font-[400] text-[#222] ${tenor.className}`}
                  >
                    Search any book and get information on it.{" "}
                    <b>React.js. CSS. APIs</b>
                  </p>

                  <Link
                    href="https://github.com/judithlk/book-finder"
                    className="block"
                  >
                    <h2
                      className={`text-[1rem] font-[400] text-[#AB274F] hover:underline ${tenor.className}`}
                    >
                      Source code{" "}
                    </h2>
                  </Link>
                </div>
                <div className="rounded-lg p-5 border border-[#997A8D] space-y-3">
                  <Link
                    href="https://judithlk.github.io/tic-tac-toe-game/"
                    className="flex space-x-1 items-center"
                  >
                    <h2
                      className={`text-[1.1rem] sm:text-[1.3rem] hover:text-[#AB274F] hover:underline ${cardo.className}`}
                    >
                      Tic Tac Toe
                    </h2>
                    <RxExternalLink size={20} color="#AB274F" />
                  </Link>
                  <p
                    className={`text-[0.9rem] font-[400] text-[#222] ${tenor.className}`}
                  >
                    A simple tic-tac-toe game. <b>HTML. CSS. JavaScript</b>
                  </p>

                  <Link
                    href="https://github.com/judithlk/tic-tac-toe-game"
                    className="block"
                  >
                    <h2
                      className={`text-[1rem] font-[400] text-[#AB274F] hover:underline ${tenor.className}`}
                    >
                      Source code{" "}
                    </h2>
                  </Link>
                </div>
                <div className="rounded-lg p-5 border border-[#997A8D] space-y-3">
                  <Link
                    href="https://mars-spotter.vercel.app/"
                    className="flex space-x-1 items-center"
                  >
                    <h2
                      className={`text-[1.1rem] sm:text-[1.3rem] hover:text-[#AB274F] hover:underline ${cardo.className}`}
                    >
                      MARS Spotter
                    </h2>
                    <RxExternalLink size={20} color="#AB274F" />
                  </Link>
                  <p
                    className={`text-[0.9rem] font-[400] text-[#222] ${tenor.className}`}
                  >
                    View photos from NASA{"'"}s Mars rovers.{" "}
                    <b>NextJS. Tailwind CSS. TypeScript</b>
                  </p>

                  <Link
                    href="https://github.com/judithlk/mars-spotter"
                    className="block"
                  >
                    <h2
                      className={`text-[1rem] font-[400] text-[#AB274F] hover:underline ${tenor.className}`}
                    >
                      Source code{" "}
                    </h2>
                  </Link>
                </div>
                <div className="rounded-lg p-5 border border-[#997A8D] space-y-3">
                  <Link
                    href="https://judithlk.github.io/uni-life-simulator/"
                    className="flex space-x-1 items-center"
                  >
                    <h2
                      className={`text-[1.1rem] sm:text-[1.3rem] hover:text-[#AB274F] hover:underline ${cardo.className}`}
                    >
                      UniLife Sim
                    </h2>
                    <RxExternalLink size={20} color="#AB274F" />
                  </Link>
                  <p
                    className={`text-[0.9rem] font-[400] text-[#222] ${tenor.className}`}
                  >
                    How long can you survive university life? <b>React.js</b>
                  </p>

                  <Link
                    href="https://github.com/judithlk/uni-life-simulator"
                    className="block"
                  >
                    <h2
                      className={`text-[1rem] font-[400] text-[#AB274F] hover:underline ${tenor.className}`}
                    >
                      Source code{" "}
                    </h2>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="w-[100%] flex justify-between ">
          <div className="w-6 h-6 border-b-2 border-l-2 border-[#5B3256]"></div>
          <div className="w-6 h-6 border-b-2 border-r-2 border-[#5B3256]"></div>
        </div>
      </main>
    </>
  );
}

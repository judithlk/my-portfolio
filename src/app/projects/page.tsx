"use client";

import Link from "next/link";
import Image from "next/image";

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
              

              <div className="space-y-4">
                <p
                  className={`text-[1rem] sm:text-[1.2rem]  ${cardo.className}`}
                >
                  Below are some projects I have worked on, both personal and professional.
                </p>
                <div className="rounded-lg p-5 space-y-3 bg-white">
                  <Link
                    href="https://overanda.vercel.app/"
                    className="flex space-x-1 items-center"
                  >
                    <h2
                      className={`text-[1.1rem] sm:text-[1.3rem] hover:text-[#AB274F] hover:underline ${cardo.className}`}
                    >
                      Event Planners Website
                    </h2>
                    <RxExternalLink size={20} color="#AB274F" />
                  </Link>
                  <p
                    className={`text-[0.9rem] font-[400] text-[#222] ${tenor.className}`}
                  >
                    A minimalist, frontend heavy, one-page website for an event planning business. Aesthetic, fully responsive, smooth interface.{" "}
                    <b>
                      NextJS. Tailwind CSS.
                    </b>
                  </p>

                  <div className="overflow-x-auto">
                    <div className="flex gap-4 w-max items-end">
                      <div className="shrink-0">
                        <Image
                          src="/eventsite1.PNG"
                          alt="Event website screenshot 1"
                          width={500}
                          height={300}
                          className="rounded"
                        />
                      </div>
                      <div className="shrink-0">
                        <Image
                          src="/eventsite2.PNG"
                          alt="Event website screenshot 2"
                          width={500}
                          height={300}
                          className="rounded"
                        />
                      </div>

                      
                      <div className="shrink-0">
                        <Image
                          src="/eventsite4.PNG"
                          alt="Event website screenshot 3"
                          width={160}
                          height={300}
                          className="rounded"
                        />
                      </div>
                      <div className="shrink-0">
                        <Image
                          src="/eventsite3.PNG"
                          alt="Event website screenshot 4"
                          width={160}
                          height={300}
                          className="rounded"
                        />
                      </div>
                      
                    </div>
                  </div>

                  <div className="md:flex md:space-x-8">
                    <Link
                      href="https://github.com/judithlk/overanda"
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
                <div className="rounded-lg p-5 space-y-3 bg-white">
                  <Link
                    href="https://smart-waste-web-one.vercel.app/"
                    className="flex space-x-1 items-center"
                  >
                    <h2
                      className={`text-[1.1rem] sm:text-[1.3rem] hover:text-[#AB274F] hover:underline ${cardo.className}`}
                    >
                      Smart Waste Management System
                    </h2>
                    <RxExternalLink size={20} color="#AB274F" />
                  </Link>
                  <p
                    className={`text-[0.9rem] font-[400] text-[#222] ${tenor.className}`}
                  >
                    A fullstack system to track location and fill levels of
                    waste bins and manage emptying schedules.{" "}
                    <b>
                      NextJS. Tailwind CSS. React.js. Express. MongoDB. Node.js.
                      React Native. IoT and Embedded Systems.
                    </b>
                  </p>

                  <div className="overflow-x-auto">
                    <div className="flex gap-4 w-max items-end">
                      {/* Web screenshots – show fully */}
                      <div className="shrink-0">
                        <Image
                          src="/sm1.PNG"
                          alt="Smart Waste System screenshot 1"
                          width={500}
                          height={300}
                          className="rounded"
                        />
                      </div>
                      <div className="shrink-0">
                        <Image
                          src="/sm2.PNG"
                          alt="Smart Waste System screenshot 2"
                          width={500}
                          height={300}
                          className="rounded"
                        />
                      </div>

                      {/* Mobile screenshots – narrower width to match height */}
                      <div className="shrink-0">
                        <Image
                          src="/sm6.jpeg"
                          alt="Smart Waste System screenshot 4"
                          width={160}
                          height={300}
                          className="rounded"
                        />
                      </div>
                      <div className="shrink-0">
                        <Image
                          src="/sm5.jpeg"
                          alt="Smart Waste System screenshot 5"
                          width={160}
                          height={300}
                          className="rounded"
                        />
                      </div>
                      <div className="shrink-0">
                        <Image
                          src="/sm4.jpeg"
                          alt="Smart Waste System screenshot 6"
                          width={160}
                          height={300}
                          className="rounded"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="md:flex md:space-x-8">
                    <Link
                      href="https://github.com/judithlk/smart-waste-web"
                      className="block"
                    >
                      <h2
                        className={`text-[1rem] font-[400] text-[#AB274F] hover:underline ${tenor.className}`}
                      >
                        Frontend source code{" "}
                      </h2>
                    </Link>
                    <Link
                      href="https://github.com/judithlk/smart-waste-backend"
                      className="block"
                    >
                      <h2
                        className={`text-[1rem] font-[400] text-[#AB274F] hover:underline ${tenor.className}`}
                      >
                        Backend source code{" "}
                      </h2>
                    </Link>
                    <Link
                      href="https://github.com/judithlk/smart-waste-mobile"
                      className="block"
                    >
                      <h2
                        className={`text-[1rem] font-[400] text-[#AB274F] hover:underline ${tenor.className}`}
                      >
                        Mobile App source code{" "}
                      </h2>
                    </Link>
                  </div>
                </div>
                <div className="rounded-lg p-5 space-y-3 bg-white">
                  <Link
                    href="https://rivu.vercel.app/"
                    className="flex space-x-1 items-center"
                  >
                    <h2
                      className={`text-[1.1rem] sm:text-[1.3rem] hover:text-[#AB274F] hover:underline ${cardo.className}`}
                    >
                      Rivu
                    </h2>
                    <RxExternalLink size={20} color="#AB274F" />
                  </Link>
                  <p
                    className={`text-[0.9rem] font-[400] text-[#222] ${tenor.className}`}
                  >
                    A fullstack book review web app.{" "}
                    <b>
                      NextJS. Tailwind CSS. React.js. Express. MongoDB. Node.js.
                      Redux. APIs
                    </b>
                  </p>
                  <div className="md:p-7 md:flex gap-4 space-y-3 md:space-y-0">
                    <div className="flex-1">
                      <Image
                        src="/rivu1.PNG"
                        alt="Rivu screenshot 1"
                        layout="responsive"
                        width={500}
                        height={300}
                        className="rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <Image
                        src="/rivu2.PNG"
                        alt="Rivu screenshot 2"
                        layout="responsive"
                        width={500}
                        height={300}
                        className="rounded"
                      />
                    </div>
                  </div>
                  <div className="md:flex md:space-x-8">
                    <Link
                      href="https://github.com/judithlk/bookreview_frontend"
                      className="block"
                    >
                      <h2
                        className={`text-[1rem] font-[400] text-[#AB274F] hover:underline ${tenor.className}`}
                      >
                        Frontend source code{" "}
                      </h2>
                    </Link>
                    <Link
                      href="https://github.com/judithlk/bookreview_backend"
                      className="block"
                    >
                      <h2
                        className={`text-[1rem] font-[400] text-[#AB274F] hover:underline ${tenor.className}`}
                      >
                        Backend source code{" "}
                      </h2>
                    </Link>
                  </div>
                </div>
                <div className="rounded-lg p-5 space-y-3 bg-white">
                 
                    <h2
                      className={`flex space-x-1 items-center text-[1.1rem] sm:text-[1.3rem] hover:text-[#AB274F] hover:underline ${cardo.className}`}
                    >
                      Food Vendor App
                    </h2>
                    
                  <p
                    className={`text-[0.9rem] font-[400] text-[#222] ${tenor.className}`}
                  >
                    Frontend of a single-tenant e-commerce app for vendors to manage products
                    and customer orders, built with the team at NASSAT.{" "}
                    <b>NextJS. Tailwind CSS. TypeScript. Redux</b>
                  </p>

                  <div className="md:p-7 md:flex gap-4 space-y-3 md:space-y-0">
                    <div className="flex-1">
                      <Image
                        src="/food1.PNG"
                        alt="Food vendor app screenshot 1"
                        layout="responsive"
                        width={500}
                        height={300}
                        className="rounded border border-gray-200"
                      />
                    </div>
                    <div className="flex-1">
                      <Image
                        src="/food2.PNG"
                        alt="Food vendor app screenshot 2"
                        layout="responsive"
                        width={500}
                        height={300}
                        className="rounded"
                      />
                    </div>
                  </div>
                  <h2
                    className={`text-[1rem] font-[400] text-[#AB274F]  ${tenor.className}`}
                  >
                    Source code is unavailable for public viewing, as it was
                    built for the organization{" "}
                  </h2>
                </div>
                <div className="rounded-lg p-5 space-y-3 bg-white">
                  <Link
                    href="https://real-estate-landing-seven.vercel.app/"
                    className="flex space-x-1 items-center"
                  >
                    <h2
                      className={` flex space-x-1 items-centertext-[1.1rem] sm:text-[1.3rem] hover:text-[#AB274F] hover:underline ${cardo.className}`}
                    >
                      Real Estate Landing
                    </h2>
                    <RxExternalLink size={20} color="#AB274F" />
                  </Link>
                  <p
                    className={`text-[0.9rem] font-[400] text-[#222] ${tenor.className}`}
                  >
                    A minimalist, functional landing page for a real estate
                    agency firm. <b>Next.js. Tailwind CSS. Redux.</b>
                  </p>

                  <div className="md:p-7 md:flex gap-4 space-y-3 md:space-y-0">
                    <div className="flex-1">
                      <Image
                        src="/realestate1.PNG"
                        alt="Real estate landing page screenshot 1"
                        layout="responsive"
                        width={500}
                        height={300}
                        className="rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <Image
                        src="/realestate2.PNG"
                        alt="Real estate landing page screenshot 2"
                        layout="responsive"
                        width={500}
                        height={300}
                        className="rounded"
                      />
                    </div>
                  </div>

                  <Link
                    href="https://github.com/judithlk/real-estate-landing"
                    className="block"
                  >
                    <h2
                      className={`text-[1rem] font-[400] text-[#AB274F] hover:underline ${tenor.className}`}
                    >
                      Source code{" "}
                    </h2>
                  </Link>
                </div>

                {/* <div className="rounded-lg p-5 space-y-3 bg-white">
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

                  <div className="md:p-7 md:flex gap-4 space-y-3 md:space-y-0">
                    <div className="flex-1">
                      <Image
                        src="/mars1.PNG"
                        alt="Mars spotter screenshot 1"
                        layout="responsive"
                        width={500}
                        height={300}
                        className="rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <Image
                        src="/mars2.PNG"
                        alt="Mars spotter screenshot 2"
                        layout="responsive"
                        width={500}
                        height={300}
                        className="rounded"
                      />
                    </div>
                  </div>

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
                </div> */}
                {/* <div className="rounded-lg p-5 border border-[#997A8D] space-y-3">
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
                    A simple tic-tac-toe game with basic frontend tools.{" "}
                    <b>HTML. CSS. JavaScript</b>
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
                </div> */}
                {/* <div className="rounded-lg p-5 border border-[#997A8D] space-y-3">
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
                </div> */}
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

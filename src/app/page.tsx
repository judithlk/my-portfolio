"use client"

import Link from "next/link";

import { motion } from "framer-motion"

import { Averia_Serif_Libre, Tenor_Sans, Cardo } from 'next/font/google'

const averiaserif = Averia_Serif_Libre({
  subsets: ['latin'], // Optional: define subsets
  weight: ['400'], // Optional: define the weight
});

const tenor = Tenor_Sans({
  subsets: ['latin'], // Optional: define subsets
  weight: ['400'], // Optional: define the weight
});

const cardo = Cardo({
  subsets: ['latin'], // Optional: define subsets
  weight: ['400'], // Optional: define the weight
});

export default function Home() {
  return (
    <>
      <motion.div className="w-[80%] sm:w-[70%] m-auto p-10 space-y-8"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}>
        <div className="w-[100%] flex justify-between ">
          <div className="w-6 h-6 border-t-2 border-l-2 border-[#5B3256]"></div>
          <div className="w-6 h-6 border-t-2 border-r-2 border-[#5B3256]"></div>
        </div>
        <div className="px-10">
        <div className="lg:flex justify-between items-center lg:space-x-10">
          <div >
            <h1 className={`text-[4rem] sm:text-[7rem] text-[#614051] ${cardo.className}`}>hello:</h1>
          </div>
          <div className="">
            <p className={`text-[1.1rem] sm:text-[1.2rem] font-[400] text-[#222] ${tenor.className}`}>
              I'm a passionate software engineer with a creative edge,
              constantly fueled by the desire to learn and grow in the
              ever-evolving digital world.
            </p>
          </div>
        </div>
        <div className={`flex items-center space-x-5 mt-4 ${tenor.className}`}>
          <h2 className="text-[1.1rem] sm:text-xl font-[200]">Read more <Link href="/about" className="text-[#AB274F] font-[400] hover:underline hover:decoration-[#AB274F]">about me</Link> or check out <Link href="/projects" className="text-[#AB274F] font-[400] hover:underline hover:decoration-[#AB274F]">my projects</Link>.</h2>
        </div>
        </div>
        <div className="w-[100%] flex justify-between ">
          <div className="w-6 h-6 border-b-2 border-l-2 border-[#5B3256]"></div>
          <div className="w-6 h-6 border-b-2 border-r-2 border-[#5B3256]"></div>
        </div>
        
      </motion.div>
    </>
  );
}

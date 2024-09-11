"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Tenor_Sans, Cardo } from "next/font/google";

const tenor = Tenor_Sans({
  subsets: ["latin"], // Optional: define subsets
  weight: ["400"], // Optional: define the weight
});

const cardo = Cardo({
  subsets: ["latin"], // Optional: define subsets
  weight: ["400"], // Optional: define the weight
});

export default function Navigation() {
  const pathName = usePathname();

  return (
    <div className="w-[100%] sm:flex justify-between items-center px-20 py-3 space-y-8">
      <div>
        <h1 className={`text-[1.9rem] text-[#614051] ${tenor.className}`}>
          judith yusuf
        </h1>
        <h2 className={`text-black ${cardo.className}`}>SOFTWARE ENGINEER</h2>
      </div>
      <div
        className={`flex justify-between items-center space-x-8 text-xl ${tenor.className}`}
      >
        <div>
          <Link href="/" className="block">
            <h1
              className={`${
                pathName === "/"
                  ? "font-[500] text-[#AB274F]"
                  : "font-[100] text-[#614051]"
              } hover:text-[#AB274F] cursor-pointer`}
            >
              home
            </h1>
          </Link>

          <div
            className={`text-right w-3 border border-[#AB274F] ${
              pathName === "/" ? "block" : "hidden"
            }`}
          ></div>
        </div>
        <div>
          <Link href="/about" className="block">
            <h1
              className={`${
                pathName === "/about"
                  ? "font-[500] text-[#AB274F]"
                  : "font-[100] text-[#614051]"
              } hover:text-[#AB274F] cursor-pointer`}
            >
              about
            </h1>
          </Link>

          <div
            className={`text-right w-3 border border-[#AB274F] ${
              pathName === "/about" ? "block" : "hidden"
            }`}
          ></div>
        </div>
        <div>
          <Link href="/projects" className="block">
            <h1
              className={`${
                pathName === "/projects"
                  ? "font-[500] text-[#AB274F]"
                  : "font-[100] text-[#614051]"
              } hover:text-[#AB274F] cursor-pointer`}
            >
              projects
            </h1>
          </Link>
          <div
            className={`text-right w-3 border border-[#AB274F] ${
              pathName === "/projects" ? "block" : "hidden"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}

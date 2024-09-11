import Link from "next/link";

import { Averia_Serif_Libre, Tenor_Sans, Cardo } from 'next/font/google'

import { MdOutlineMail } from "react-icons/md";
import { FaGithub, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

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

export default function Footer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-end space-x-4 px-20 p-5">
        <div className="flex items-center">
            <h1 className={`text-[1rem] font-[400] ${cardo.className}`}>get in touch with me:</h1>
          </div>
        <div className="flex space-x-2 items-center">
            <div className="p-1 rounded-lg">
              <Link href="mailto:judithyusuf00@gmail.com"><MdOutlineMail size={25} className="fill-[#5B3256] hover:fill-[#B284BE]" /></Link>
            </div>
            <div className="p-1 rounded-lg">
              <Link href="https://github.com/judithlk/"><FaGithub size={22} className="fill-[#5B3256] hover:fill-[#B284BE]" /></Link>
            </div>
            <div className="p-1 rounded-lg">
              <Link href="https://x.com/judithiscoding"><FaXTwitter size={22} className="fill-[#5B3256] hover:fill-[#B284BE]" /></Link>
            </div>
            <div className="p-1 ">
              <Link href="https://www.linkedin.com/in/judith-yusuf-21u14n/"><FaLinkedinIn size={22} className="fill-[#5B3256] hover:fill-[#B284BE]" /></Link>
            </div>
          </div>
          
    </div>
  );
}

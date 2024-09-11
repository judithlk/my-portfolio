"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from 'react';

import { motion } from "framer-motion";

export default function Wrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Show content after animation starts
    }, 500); // Adjust the delay to match your animation timing
    return () => clearTimeout(timer); // Cleanup
  }, []);

  const pathName = usePathname();

  const variants = {
    hidden: { y: 500, visibility: "hidden" },
    enter: { y: 0, visibility: "visible" },
    exit: { opacity: 0 },
  };

  const indexVariants = {
    hidden: { y: -500, visibility: "hidden" },
    enter: { y: 0, visibility: "visible" },
    exit: { opacity: 0 },
  };

  return (
    <>
    {!isVisible ? (
      <div className=" h-screen w-screen flex justify-center items-center"> 
    
      </div>
    ) : (
      <motion.div
    key={pathName}
    transition={{type: "tween", ease: "easeIn", duration: 0.3}}
    initial="hidden"
      animate="enter"
      exit="exit"
      variants={pathName === '/' ? indexVariants : variants}
      className="min-h-screen w-screen m-auto flex flex-col bg-[#F1DDCF]"
    >
      {children}
    </motion.div>
    )}
    </>    
  );
}

"use client"
import { motion } from "framer-motion";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 md:px-24 xl:px-44 pt-5 bg-gradient-to-b from-background from-70% to-transparent">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <Link href={"/"} className="title text-2xl">Tomás.</Link>
          <Link href={"#home"} className="hover:underline underline-offset-2 text-md mt-1.5">Home</Link>
          <Link href={"#about-me"} className="hover:underline underline-offset-2 text-md mt-1.5">About</Link>
          <Link href={"#home"} className="hover:underline underline-offset-2 text-md mt-1.5">Skills</Link>
          <Link href={"#home"} className="hover:underline underline-offset-2 text-md mt-1.5">Portfolio</Link>
        </div>
        <button className="border border-foreground rounded-full text-md px-4 py-1 mt-1 hover:bg-primary hover:border-primary hover:text-background transition-colors">
          Contact Me!
        </button>
      </div>
    </nav>
  )
}
"use client"
import AnimatedLogoCloud from "@/components/animated-logo-cloud";
import { Footer } from "@/components/footer";
import { Timeline } from "@/components/timeline";
import { TimelineItem } from "@/components/timeline-item";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const timelineItems = [
  {
    title: "Started learning programming",
    bullet: "📚",
    date: "Sep. 2021 - Jul. 2024",
    children: <p className="text-primary-foreground">In 2021, I began my journey into programming when I got into a vocational programming course at <a href="https://www.epad.edu.pt/" className="text-background hover:underline">EPAD</a>. </p>
  },
  {
    title: "Internship at Zarph SA.",
    bullet: "💻",
    date: "Mar. 2024 - Jul. 2024",
    children: <p className="text-primary-foreground">As a part of my course, I got a 3-month internship at <a href="https://www.zarph.com/en" className="text-background hover:underline">Zarph SA</a>. </p>
  },
  {
    title: "Bachelors Degree",
    bullet: "🎓",
    date: "Expected graduation: 2027",
    children: <p className="text-primary-foreground">I&apos;ve recently started a level 5 vocation course that has the option of getting a bachelors degree.</p>
  }
]

export default function Home() {
  return (
    <>
      <main className="w-full">
        <section className="grid grid-cols-2 md:px-36 xl:px-60 pt-56">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col gap-4"
            >
              <h1 className="title font-bold text-[40px]">
                Hey! I&apos;m Tomás
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, 20, -10, 20, 0] }}
                  transition={{ duration: 2, ease: "easeInOut", repeat: 2 }}
                  className="inline-block ml-1"
                >
                  👋
                </motion.span>
              </h1>
              <h2 className="text-[20px]">
                I&apos;m a student / junior full-stack web developer based in <span className="title"><span>📍</span>Lisbon, Portugal</span>.
              </h2>
            </motion.div>
          </div>
          <div className="flex items-center justify-end">
            <motion.img
              src="/foto.jpg"
              className="rounded-full size-80 object-cover border-2 border-primary"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            />
          </div>
        </section>
        <section className="bg-primary mt-80" id="about-me">
          <div className="grid grid-cols-2 gap-4 md:px-36 xl:px-60 py-14">
            <div className="flex flex-col gap-3">
              <h1 className="text-background font-bold text-4xl">About Me 😁</h1>
              <p className="text-primary-foreground">My name is <span className="text-background">Tomás Andrade </span>and I&apos;m a <span className="text-background px-2">🇵🇹 Portuguese-Angolan 🇦🇴</span> web developer / student born in 2006. I&apos;m very passionate about what I do and very eager to learn new things.</p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-background font-bold text-4xl">My Journey ⌛️</h1>
              <Timeline items={timelineItems} activeItem={0} />
            </div>
          </div>
        </section>
        <div className="flex flex-col md:px-36 xl:px-60 mt-20" id="skills">
          <h1 className="title text-xl text-center font-bold">Tools and technologies I work / have worked with:</h1>
        </div>
        <AnimatedLogoCloud />
        <section className="mt-20 md:px-36 xl:px-60" id="portfolio"> 
          <h1 className="title text-4xl font-bold">Projects</h1>
          
        </section>
        <Footer />
      </main>
      <motion.a
        initial={{ y: 0 }}
        animate={{ y: 10 }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
        className="absolute bg-primary right-0 bottom-0 text-background rounded-full md:m-10 xl:m-14 p-5"
        href="#about-me"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#about-me')?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <ArrowDown />
      </motion.a>
    </>
  );
}
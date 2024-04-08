"use client";
import { ProjectsCard } from "./projects-card";
import { motion } from "framer-motion";

export const ProjectsSection = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed h-[500px] w-[500px] rounded-full bg-primary blur-3xl top-0 left-[200px] -z-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed h-[400px] w-[400px] rounded-full bg-primary blur-3xl bottom-0 right-[350px] -z-10"
      />
      <section className="flex flex-col w-full md:w-2/4 gap-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="h-full bg-zinc-900/70 border border-zinc-800 backdrop-blur-2xl rounded-xl p-4 flex flex-col gap-3 overflow-auto"
        >
          <h1 className="font-bold text-white text-3xl">Projetos</h1>
          <ProjectsCard />
        </motion.div>
      </section>
    </>
  );
};

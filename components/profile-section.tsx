"use client";
import { FileText, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export const ProfileSection = () => {
  return (
    <>
      <section className="flex flex-col w-full md:w-1/4 gap-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full h-2/3 bg-zinc-900/70 border border-zinc-800 backdrop-blur-2xl rounded-2xl p-4 flex flex-col gap-3"
        >
          <img src={"/foto.jpg"} alt="Foto" className="rounded-md h-full" />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="w-full h-full bg-zinc-900/70 border border-zinc-800 backdrop-blur-2xl rounded-xl p-5 flex flex-col gap-3"
        >
          <div className="flex flex-col h-full justify-between">
            <div className="flex flex-col justify-between">
              <p className="text-white font-bold text-3xl">Tomás Andrade</p>
              <div className="flex gap-1">
                <MapPin className="size-4 mb-1.5 text-primary" />
                <p className="text-sm text-white/90">Lisboa, Portugal</p>
              </div>
            </div>
            <p className="text-white/70">
              Eu sou o Tomás, tenho 17 anos e sou um programador full-stack.
            </p>
            <div className="mt-2 xl:mt-0 w-full gap-2">
              <a href="/cv.pdf" download>
                <Button className="gap-1 w-full text-white">
                  <FileText className="size-5" />
                  Baixar CV
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

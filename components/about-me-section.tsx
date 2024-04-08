"use client";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Mails, Phone, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export const AboutMeSection = () => {
  return (
    <>
      <section className="h-full flex flex-col w-full md:w-1/4 gap-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full h-full bg-zinc-900/70 border border-zinc-800 backdrop-blur-2xl rounded-xl p-4 flex flex-col gap-3"
        >
          <h1 className="font-bold text-white text-3xl pl-1">Percurso </h1>
          <ol className="relative border-s border-zinc-700">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-primary"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Setembro 2021 - Presente
              </time>
              <h3 className="text-lg font-semibold text-white">
                Curso de TGPSI na EPAD
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Entrei no curso "Técnio de Gestão e Programação de Sistemas
                Informáticos" na Escola Profissional de Artes Tecnologia e
                Desporto.
              </p>
            </li>
          </ol>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.001, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="w-full h-fit bg-zinc-900/70 border border-zinc-800 backdrop-blur-2xl rounded-xl p-4 flex flex-col gap-3"
        >
          <h1 className="font-bold text-white text-3xl pl-1">Contatos</h1>
          <div className="grid grid-cols-3 gap-2">
            <Button className="w-full text-white">
              <Github className="size-5" />
            </Button>
            <Button className="w-full text-white">
              <Linkedin className="size-5" />
            </Button>
            <Button className="w-full text-white">
              <Twitter className="size-5" />
            </Button>
            <Button className="w-full text-white">
              <Mail className="size-5" />
            </Button>
            <Button className="w-full text-white">
              <Mails className="size-5" />
            </Button>
            <Button className="w-full text-white">
              <Phone className="size-5" />
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
};

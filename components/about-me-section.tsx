"use client";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Mails, Phone, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
                Entrei no curso &quot;Técnio de Gestão e Programação de Sistemas
                Informáticos&quot; na Escola Profissional de Artes Tecnologia e
                Desporto.
              </p>
            </li>
            <li className=" ms-4">
              <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-primary"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Abril 2024 - 2024
              </time>
              <h3 className="text-lg font-semibold text-white">
                Estágio na Zarph
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Na reta final do meu curso na EPAD, entrei num estágio na Zarph.
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
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link href={"https://github.com/Tomas2043"}>
                    <Button className="w-full text-white">
                      <Github className="size-5" />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>Github</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    href={
                      "https://www.linkedin.com/in/tom%C3%A1s-andrade-6a449a241/"
                    }
                  >
                    <Button className="w-full text-white">
                      <Linkedin className="size-5" />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>LinkedIn</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Link href={"https://twitter.com/Toms2043"}>
                    <Button className="w-full text-white">
                      <Twitter className="size-5" />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>Twitter</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Link href={"mailto:tomas.andrade2043@gmail.com"}>
                    <Button className="w-full text-white">
                      <Mail className="size-5" />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>Email Pessoal</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Link href={"mailto:aluno221418@epad.edu.pt"}>
                    <Button className="w-full text-white">
                      <Mails className="size-5" />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>Email Escolar</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Link href={"tel:936314098"}>
                    <Button className="w-full text-white">
                      <Phone className="size-5" />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>Telefone</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </motion.div>
      </section>
    </>
  );
};

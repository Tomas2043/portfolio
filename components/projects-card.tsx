"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Ellipsis, FileText, Link2 } from "lucide-react";
import { motion } from "framer-motion";

export const ProjectsCard = () => {
  return (
    <>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full h-fit bg-zinc-900/70 border border-zinc-800 backdrop-blur-2xl rounded-xl p-4 flex flex-col"
      >
        <div className="flex justify-between">
          <h1 className="font-bold text-white text-xl">
            PAP - Prova de Aptidão Profissional
          </h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant={"ghost"}
                size={"icon"}
                className="hover:bg-zinc-950"
              >
                <Ellipsis className="size-5 text-white" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-zinc-900 border-zinc-800 w-38">
              <DropdownMenuLabel className="text-white">
                ClínicaOnline
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <a href="/Relatorio_pap.pdf" download>
                <DropdownMenuItem className="text-white hover:bg-zinc-950 flex gap-1">
                  <FileText className="size-4" />
                  Baixar Relatório
                </DropdownMenuItem>
              </a>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <p className="text-white/70 text-sm">
          Para a minha Prova de Aptidão Profissional, desenvolvi um projeto com
          o nome de ClínicaOnline, onde os utilizadores podem marcar consultas
          online.
        </p>
        <Carousel className="mt-3 cursor-grab active:cursor-grabbing group">
          <CarouselContent>
            <CarouselItem>
              <img
                className="rounded-sm"
                src="/foto-clinica-online-dark.png"
                alt="ClíncaOnline"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                className="rounded-sm"
                src="/foto-clinica-online.png"
                alt="ClíncaOnline"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselNext className="rounded-sm bg-transparent border-none hover:bg-zinc-700/20 scale-0 group-hover:scale-100 transition-all" />
          <CarouselPrevious className="rounded-sm bg-transparent border-none hover:bg-zinc-700/20 scale-0 group-hover:scale-100 transition-all" />
        </Carousel>
      </motion.div>
    </>
  );
};

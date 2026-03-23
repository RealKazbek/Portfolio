"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SpotlightBackground } from "@/components/ui/SpotlightBackground";
import { motion } from "framer-motion";

const projects = [
  {
    id: 7,
    title: "Telegram Web (Realtime)",
    description:
      "Веб-версия Telegram с поддержкой realtime-чатов через WebSocket. Реализованы мгновенные сообщения, онлайн-статусы и синхронизация диалогов.",
    tech: ["Next.js", "Django", "WebSocket", "Redis"],
    status: "Удалено",
    demoLink: null,
    repoLink: null,
  },
  {
    id: 8,
    title: "1Trading AI",
    description:
      "AI-платформа для торговли. Анализирует рынок, предлагает сделки и автоматизирует принятие решений с помощью моделей машинного обучения.",
    tech: ["Next.js", "Django", "OpenAI API", "PostgreSQL"],
    status: "Потеряно",
    demoLink: null,
    repoLink: null,
  },
  {
    id: 6,
    title: "INO IITU",
    description:
      "Инновационная платформа для МУИТ. Объединяет веб-интерфейс и Telegram-бота для быстрого доступа к академическим сервисам и расписанию.",
    tech: ["Next.js", "Aiogram", "PostgreSQL"],
    status: "Удалено",
    image: "/projects/ino.png",
    demoLink: null,
    repoLink: null,
  },
  {
    id: 2,
    title: "UniVerse (IT FEST)",
    description:
      "Хакатон-проект. Единый хаб для студентов и абитуриентов университетов Казахстана. Выступал в роли PM и Frontend разработчика.",
    tech: ["Next.js", "Google AI Studio", "Data Analysis"],
    status: "Удалено",
    image: "/projects/universe.png",
    demoLink: null,
    repoLink: null,
  },
  {
    id: 5,
    title: "Platonus 2.0",
    description:
      "Альтернативный, быстрый интерфейс для университетской системы. Работает мгновенно. Включает Telegram-бота для уведомлений.",
    tech: ["Next.js", "Aiogram", "PostgreSQL"],
    status: "Потеряно",
    demoLink: null,
    repoLink: null,
  },
  {
    id: 1,
    title: "SHYRAQ MARKET",
    description:
      "Полноценный маркетплейс для заказа товаров из Китая. Локализация на казахский язык, админ-панель.",
    tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "Django"],
    status: "Удалено",
    demoLink: null,
    repoLink: null,
  },
  {
    id: 3,
    title: "FinRoast AI",
    description:
      "Мобильное приложение с интеграцией AI. Анализирует банковские траты и дает саркастичные советы по экономии.",
    tech: ["Kotlin", "Django", "OpenAI API", "Android"],
    status: "Потеряно",
    demoLink: null,
    repoLink: null,
  },
  {
    id: 4,
    title: "Telegram Bot: Ration Calc",
    description:
      "Бот для компании '4 сала' для расчета рациона скота. Автоматизирует сложные формулы и выдает результат за секунды.",
    tech: ["Python", "Aiogram", "PostgreSQL"],
    status: "Удалено",
    demoLink: null,
    repoLink: null,
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ProjectsPage() {
  return (
    <SpotlightBackground>
      <main className="min-h-screen pt-24 pb-12 px-4 container mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto mb-12 text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Мои{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
              Проекты
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            Подборка моих коммерческих работ, пет-проектов и участий в
            хакатонах.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.id}>
              <Card className="flex flex-col h-full bg-black/40 border-white/10 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(16,185,129,0.2)] backdrop-blur-sm group overflow-hidden">
                <div className="relative h-48 w-full rounded-t-xl overflow-hidden border-b border-white/5">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-white/5 to-white/0 flex items-center justify-center group-hover:from-green-500/10 group-hover:to-transparent transition-colors duration-500">
                      <FolderGit2 className="text-gray-600 w-16 h-16 group-hover:text-green-500 group-hover:scale-110 transition-all duration-500" />
                    </div>
                  )}
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start gap-2">
                    <CardTitle className="text-xl truncate text-white group-hover:text-green-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-white/10 text-gray-300 font-normal hover:bg-white/20 border-0"
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="line-clamp-3 text-gray-400 mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="font-normal text-gray-500 border-white/10 bg-black/20"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="grid grid-cols-2 gap-3 pt-0 mt-auto">
                  {project.repoLink ? (
                    <Button
                      variant="outline"
                      className="w-full gap-2 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white"
                      asChild
                    >
                      <Link href={project.repoLink} target="_blank">
                        <Github size={16} /> Code
                      </Link>
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      disabled
                      className="w-full gap-2 border-white/10 text-gray-500 cursor-not-allowed"
                    >
                      <Github size={16} /> Недоступно
                    </Button>
                  )}

                  {project.demoLink ? (
                    <Button
                      className="w-full gap-2 bg-green-600 text-white hover:bg-green-500 border-none shadow-lg shadow-green-900/20"
                      asChild
                    >
                      <Link href={project.demoLink} target="_blank">
                        <ExternalLink size={16} /> Demo
                      </Link>
                    </Button>
                  ) : (
                    <Button
                      disabled
                      className="w-full gap-2 bg-gray-700 text-gray-400 cursor-not-allowed"
                    >
                      <ExternalLink size={16} /> Недоступно
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </SpotlightBackground>
  );
}

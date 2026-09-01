"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  User,
  Code2,
  GraduationCap,
  Trophy,
  BrainCircuit,
  Bot,
} from "lucide-react";
import { SpotlightBackground } from "@/components/ui/SpotlightBackground";
import { motion } from "framer-motion";

const technologyGroups = [
  {
    name: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Backend",
    technologies: ["Go", "Python", "Django", "PostgreSQL"],
  },
  {
    name: "Infrastructure",
    technologies: ["Docker", "Nginx", "Linux", "Git"],
  },
  {
    name: "AI & Automation",
    technologies: [
      "OpenAI API",
      "Google AI Studio",
      "Telegram Bots",
      "Algorithms",
    ],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function AboutPage() {
  return (
    <SpotlightBackground>
      <main className="min-h-screen pt-24 pb-12 px-4 container mx-auto">
        {/* Заголовок */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-4xl mx-auto mb-12 text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Обо{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
              мне
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Студент 4 курса МУИТ, Frontend-разработчик и начинающий Go
            Backend-разработчик. Интересуюсь AI, FinTech, автоматизацией и
            созданием реальных цифровых продуктов.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto grid gap-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={fadeInUp} className="md:col-span-2">
              <Card className="h-full bg-black/40 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl text-white">
                    <User className="text-green-500 w-5 h-5" />
                    Кто я?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Я студент 4 курса Международного университета
                    информационных технологий (IITU) по направлению Computer
                    Engineering. Основной опыт связан с Frontend-разработкой на
                    React, Next.js и TypeScript. Сейчас активно развиваюсь в Go
                    Backend, изучаю серверную архитектуру, REST API, PostgreSQL
                    и Docker.
                  </p>
                  <p>
                    Также работаю с Python и интересуюсь AI-интеграциями,
                    FinTech и автоматизацией. Регулярно практикую алгоритмы и
                    участвую в хакатонах, чтобы улучшать инженерное мышление и
                    навыки командной разработки.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-black/40 border-white/10 backdrop-blur-sm flex flex-col justify-center">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl text-white">
                    <GraduationCap className="text-green-500 w-5 h-5" />
                    Образование
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-2">
                    <p className="font-bold text-white text-lg">IITU (МУИТ)</p>
                    <p className="text-sm text-gray-400">
                      4 курс, Computer Engineering
                    </p>
                  </div>
                  <Badge
                    variant="secondary"
                    className="mt-2 bg-white/10 text-white hover:bg-white/20"
                  >
                    2023 — 2027
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* ХАКАТОНЫ (ОПЫТ) */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
              <Trophy className="text-yellow-500" /> Хакатоны & Опыт
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* IT FEST */}
              <Card className="bg-black/40 border-white/10 hover:border-green-500/50 transition-colors backdrop-blur-sm group">
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-green-400 transition-colors">
                    IT FEST Hackathon
                  </CardTitle>
                  <CardDescription className="text-gray-500">
                    Роль: Project Manager & Frontend Developer
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 text-sm">
                    Работал над проектом UniVerse: координировал команду и
                    отвечал за клиентскую часть продукта в условиях
                    ограниченного времени.
                  </p>
                  <div className="flex gap-2">
                    <Badge
                      variant="outline"
                      className="border-white/20 text-gray-400"
                    >
                      Team Lead
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-white/20 text-gray-400"
                    >
                      React
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* HALYK OIY */}
              <Card className="bg-black/40 border-white/10 hover:border-green-500/50 transition-colors backdrop-blur-sm group">
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-green-400 transition-colors">
                    HALYK OIY
                  </CardTitle>
                  <CardDescription className="text-gray-500">
                    Роль: Frontend Developer
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 text-sm">
                    Работал над интерфейсом FinTech-прототипа, адаптивной
                    версткой и интеграцией клиентской части с API в рамках
                    хакатона.
                  </p>
                  <div className="flex gap-2">
                    <Badge
                      variant="outline"
                      className="border-white/20 text-gray-400"
                    >
                      FinTech
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-white/20 text-gray-400"
                    >
                      Rapid Prototyping
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* НАВЫКИ И LEETCODE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-black/40 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl text-white">
                    <Code2 className="text-green-500 w-5 h-5" />
                    Технический стек
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {technologyGroups.map((group) => (
                    <div key={group.name} className="space-y-3">
                      <p className="text-sm font-medium text-gray-300">
                        {group.name}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {group.technologies.map((technology) => (
                          <Badge
                            key={technology}
                            variant="outline"
                            className="border-white/20 text-gray-400"
                          >
                            {technology}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              {/* LeetCode Card */}
              <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl text-white">
                    <BrainCircuit className="text-green-500 w-5 h-5" />
                    Problem Solving
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">
                    Регулярно решаю алгоритмические задачи на LeetCode и других
                    платформах, развивая навыки работы со структурами данных и
                    алгоритмами.
                  </p>
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10">
                    <div className="text-lg font-bold text-green-400">
                      Algorithms
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* AI & Bots */}
              <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl text-white">
                    <Bot className="text-green-500 w-5 h-5" />
                    AI & Automation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">
                    Работаю с AI API и автоматизацией: интегрирую LLM в
                    веб-приложения, экспериментирую с AI-ассистентами и
                    Telegram-ботами.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </SpotlightBackground>
  );
}

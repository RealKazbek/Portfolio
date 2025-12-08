"use client";

import { Progress } from "@/components/ui/progress";
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

const skills = [
  { name: "Python (Django / AI)", level: 90 },
  { name: "Next.js / React", level: 85 },
  { name: "Telegram Bots (Aiogram)", level: 95 },
  { name: "React Native (Mobile)", level: 80 },
  { name: "Data Structures", level: 75 },
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
            Об{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
              Операторе
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Студент МУИТ, Full Stack разработчик и энтузиаст искусственного
            интеллекта. Код это мой инструмент для создания будущего.
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
                    Я студент 3-го курса{" "}
                    <strong className="text-white">
                      Международного IT Университета (IITU)
                    </strong>
                    . В отличие от многих, я не просто пишу код, я создаю
                    продукты. Моя суперсила это сочетание сильного бэкенда на{" "}
                    <span className="text-green-400">Django/Python</span> и
                    современного фронтенда на{" "}
                    <span className="text-green-400">Next.js</span>.
                  </p>
                  <p>
                    Активно внедряю{" "}
                    <strong className="text-white">AI-технологии</strong> в свои
                    проекты. Решаю сложные алгоритмические задачи (50+ на
                    LeetCode), чтобы держать ум в тонусе.
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
                      3 курс, Computer Science
                    </p>
                  </div>
                  <Badge
                    variant="secondary"
                    className="mt-2 bg-white/10 text-white hover:bg-white/20"
                  >
                    2023 {"<-->"} 2027
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
                    Роль: Project Manager & Frontend Dev
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 text-sm">
                    Разрабатывали проект UniVerse. Я руководил командой и
                    отвечал за клиентскую часть. Получил колоссальный опыт
                    управления продуктом в сжатые сроки.
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
                    Отвечал за UI/UX и интеграцию с API банка. Реализовал
                    адаптивный интерфейс сложной финансовой системы за 48 часов.
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
                  {skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm font-medium text-gray-300">
                        <span>{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2 bg-white/10"
                      />
                      {/* Индикатор прогресса будет зеленым благодаря global css --primary */}
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
                    Регулярно решаю алгоритмические задачи для улучшения
                    логического мышления.
                  </p>
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10">
                    <div className="text-3xl font-bold text-white">50+</div>
                    <div className="text-sm text-gray-400">
                      Задач решено на{" "}
                      <span className="text-green-400 font-bold">LeetCode</span>{" "}
                      (Python)
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
                    Умею интегрировать LLM (ChatGPT, Claude API) в реальные
                    проекты. Создаю сложных Telegram-ботов с админками и базами
                    данных.
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

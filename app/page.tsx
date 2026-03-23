"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Terminal, Code, Cpu, Database, ArrowRight } from "lucide-react";
import { SpotlightBackground } from "@/components/ui/SpotlightBackground";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <SpotlightBackground>
      <main className="min-h-screen">
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 flex flex-col items-center text-center max-w-5xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-sm font-medium text-green-400 backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            IITU Student & Developer
          </motion.div>

          <p className="text-green-500 font-mono mb-4 tracking-widest uppercase">
            Kazbek Assanbek Talgatuly
          </p>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-5xl md:text-8xl font-bold tracking-tight text-white"
          >
            Building the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-500 animate-gradient-x">
              Digital Future
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-xl text-gray-400 max-w-2xl leading-relaxed"
          >
            Привет! Я студент 3 курса МУИТ и Full Stack разработчик. Объединяю{" "}
            <span className="text-white font-bold">AI технологии</span>,
            надежный код и современный дизайн для создания уникальных
            веб-продуктов.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Link href="/projects">
              <Button
                size="lg"
                className="rounded-full h-12 px-8 text-base bg-white text-black hover:bg-gray-200 font-bold transition-all hover:scale-105"
              >
                Смотреть проекты <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full h-12 px-8 text-base border-gray-700 hover:bg-white/10 hover:text-white transition-all"
              >
                Связаться
              </Button>
            </Link>
          </motion.div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Технологический арсенал
              </h2>
              <p className="text-gray-400">
                Современный стек для решения сложных задач
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  icon: Code,
                  title: "Frontend",
                  skills: ["Next.js", "React", "Tailwind", "Framer Motion"],
                  color: "text-blue-400",
                },
                {
                  icon: Database,
                  title: "Backend",
                  skills: ["Django", "Python", "PostgreSQL", "MongoDB"],
                  color: "text-green-400",
                },
                {
                  icon: Cpu,
                  title: "AI & Data",
                  skills: [
                    "OpenAI API",
                    "GOOGLE AI STUDIO",
                    "Pandas",
                    "Telegram Bots",
                    "Algorithms",
                  ],
                  color: "text-purple-400",
                },
                {
                  icon: Terminal,
                  title: "Tools",
                  skills: ["Git", "Render", "Neon", "Vercel"],
                  color: "text-orange-400",
                },
              ].map((category, idx) => (
                <motion.div key={idx} variants={fadeInUp}>
                  <Card className="h-full flex flex-col bg-black/40 border-white/10 hover:border-white/20 transition-all hover:-translate-y-2 backdrop-blur-sm group overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-lg text-white">
                        <div
                          className={`p-2 bg-white/5 rounded-lg ${category.color}`}
                        >
                          <category.icon size={24} />
                        </div>
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="flex flex-wrap gap-2 relative z-10">
                        {category.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-white/5 hover:bg-white/10 text-gray-300 font-normal border-transparent"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-24 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/5 to-black overflow-hidden shadow-2xl group"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-16 flex flex-col justify-center space-y-6 z-10">
                <div>
                  <div className="text-green-400 font-mono text-sm mb-2 tracking-widest flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    NEWEST RELEASE
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    INO IITU
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                    Инновационная экосистема для МУИТ. Единое окно доступа к
                    академическим сервисам через Веб и Telegram-бота. Мгновенное
                    расписание, оценки и справки.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {["Next.js", "Aiogram", "PostgreSQL", "Telegram API"].map(
                      (t) => (
                        <Badge
                          key={t}
                          variant="outline"
                          className="border-white/20 text-gray-300"
                        >
                          {t}
                        </Badge>
                      )
                    )}
                  </div>
                </div>
                <Link href="/projects">
                  <Button className="w-fit rounded-full bg-white text-black hover:bg-gray-200 font-bold px-8">
                    Смотреть кейс
                  </Button>
                </Link>
              </div>

              <div className="relative h-64 md:h-auto min-h-[350px] bg-gradient-to-br from-green-500/10 to-blue-600/10 flex items-center justify-center overflow-hidden">
                <div className="absolute w-64 h-64 bg-green-500/20 rounded-full blur-3xl -top-10 -right-10 animate-pulse" />
                <div className="absolute w-64 h-64 bg-blue-500/20 rounded-full blur-3xl bottom-10 left-10 animate-pulse delay-700" />

                <div className="relative z-10 w-[85%] h-[70%] rounded-xl overflow-hidden border border-white/20 shadow-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-700 ease-out">
                  <Image
                    src="/projects/ino.png"
                    alt="INO IITU Interface"
                    fill
                    className="object-cover object-top"
                  />

                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50 pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </SpotlightBackground>
  );
}

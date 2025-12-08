"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SpotlightBackground } from "@/components/ui/SpotlightBackground";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <SpotlightBackground>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 max-w-lg"
        >
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-green-500/20 rounded-full blur-3xl animate-pulse" />

            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 tracking-tighter">
              404
            </h1>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Ошибка в матрице...
            </h2>
            <p className="text-gray-400 text-lg">
              Страница, которую вы ищете, была удалена, перемещена или никогда
              не существовала.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-lg p-2 inline-block">
              <code className="text-red-400 font-mono text-sm">
                Error: PAGE_NOT_FOUND_EXCEPTION
              </code>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white gap-2 rounded-full font-bold"
              >
                <Home size={18} />
                На главную
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto gap-2 rounded-full border-white/20 text-gray-300 hover:text-white hover:bg-white/10"
              >
                <ArrowLeft size={18} />
                Сообщить о баге
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </SpotlightBackground>
  );
}

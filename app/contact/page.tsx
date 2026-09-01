"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Send, Loader2, CheckCircle } from "lucide-react";
import Link from "next/link";
import { SpotlightBackground } from "@/components/ui/SpotlightBackground";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSuccess(true);
        setFormData({ name: "", phone: "", subject: "", message: "" });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Ошибка при отправке. Попробуйте позже.");
      }
    } catch {
      alert("Что-то пошло не так.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SpotlightBackground>
      <main className="min-h-screen pt-24 pb-12 px-4 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto mb-12 text-center space-y-4"
        >
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Связаться со мной
          </h1>
          <p className="text-gray-400 text-lg">
            Готов обсудить ваш проект. Напишите мне в мессенджеры или
            используйте форму ниже.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Card className="h-full bg-black/40 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Контакты</CardTitle>
                <CardDescription className="text-gray-500">
                  Быстрая связь
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors border border-blue-500/20">
                    <Send size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-300">
                      Telegram
                    </p>
                    <Link
                      href="https://t.me/RealKazbek"
                      target="_blank"
                      className="text-gray-500 hover:text-green-400 transition-colors text-sm font-mono"
                    >
                      @RealKazbek
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-green-500/10 rounded-xl text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors border border-green-500/20">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-300">Телефон</p>
                    <Link
                      href="tel:+77066620060"
                      className="text-gray-500 hover:text-green-400 transition-colors text-sm font-mono"
                    >
                      +7 (706) 662-00-60
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-orange-500/10 rounded-xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors border border-orange-500/20">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-300">Email</p>
                    <a
                      href="mailto:37765@iitu.edu.kz"
                      className="text-gray-500 hover:text-green-400 transition-colors text-sm font-mono"
                    >
                      37765@iitu.edu.kz
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="bg-black/40 border-white/10 backdrop-blur-sm relative overflow-hidden">
              <CardHeader>
                <CardTitle className="text-white">
                  Отправить сообщение
                </CardTitle>
                <CardDescription className="text-gray-500">
                  Заполните форму, и я свяжусь с вами.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center z-20 text-center p-6"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Отправлено!
                    </h3>
                    <p className="text-gray-400">
                      Я свяжусь с вами по указанному номеру.
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300">
                        Имя
                      </Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ваше имя"
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-green-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-300">
                        Телефон
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+7 (777) 000-00-00"
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-green-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-300">
                      Тема
                    </Label>
                    <Input
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Сотрудничество"
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-green-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">
                      Сообщение
                    </Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Ваше сообщение..."
                      className="min-h-[150px] resize-none bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-green-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    size="lg"
                    className="w-full md:w-auto bg-green-600 text-white hover:bg-green-500 border-none"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Отправка...
                      </>
                    ) : (
                      "Отправить"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </SpotlightBackground>
  );
}

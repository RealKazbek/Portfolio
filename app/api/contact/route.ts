import { NextResponse } from "next/server";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

type ContactRequest = {
  name?: unknown;
  phone?: unknown;
  subject?: unknown;
  message?: unknown;
};

const limits = { name: 100, phone: 30, subject: 150, message: 3000 };

function isValidField(value: unknown, maxLength: number): value is string {
  return (
    typeof value === "string" &&
    value.trim().length > 0 &&
    value.length <= maxLength
  );
}

function escapeHtml(value: string): string {
  return value.replace(
    /[&<>]/g,
    (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[character]!,
  );
}

export async function POST(req: Request) {
  if (!BOT_TOKEN || !CHAT_ID) {
    return NextResponse.json(
      { error: "Server config missing" },
      { status: 500 }
    );
  }

  try {
    if (!req.headers.get("content-type")?.includes("application/json")) {
      return NextResponse.json(
        { error: "Content-Type must be application/json" },
        { status: 415 },
      );
    }

    const { name, phone, subject, message } =
      (await req.json()) as ContactRequest;

    if (
      !isValidField(name, limits.name) ||
      !isValidField(phone, limits.phone) ||
      !isValidField(subject, limits.subject) ||
      !isValidField(message, limits.message)
    ) {
      return NextResponse.json(
        { error: "Invalid contact form data" },
        { status: 400 },
      );
    }

    const text = `
🔥 <b>Новая заявка с портфолио!</b>

👤 <b>Имя:</b> ${escapeHtml(name.trim())}
📱 <b>Телефон:</b> ${escapeHtml(phone.trim())}
📝 <b>Тема:</b> ${escapeHtml(subject.trim())}

💬 <b>Сообщение:</b>
${escapeHtml(message.trim())}
    `;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: "HTML",
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } catch {
    return NextResponse.json({ error: "Internal Error" }, { status: 500 });
  }
}

import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function WhatsappButton() {
  const message = encodeURIComponent("Olá! Gostaria de fazer um orçamento.");

  return (
    <Link
      href={`https://wa.me/+5514991288413?text=${message}`}
      target="_blank"
      className="fixed bottom-4 right-4 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg transition duration-300 overflow-hidden hover:bg-green-600"
    >
      <span className="absolute inset-0 w-full h-full scale-x-125 blur-md bg-green-500 opacity-10 hover:opacity-20 transition duration-300"></span>

      <MessageCircle size={32} className="relative z-10" />
    </Link>
  );
}

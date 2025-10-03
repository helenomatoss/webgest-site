import { MessageCircle } from "lucide-react";
import { WHATSAPP_WA } from "@/config/contact";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_WA}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir conversa no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-green-500 p-4 text-white shadow-lg transition duration-300 hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

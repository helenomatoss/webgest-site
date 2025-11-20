import { MessageCircle } from "lucide-react";
import { WHATSAPP_WA } from "@/config/contact";
import { useLanguage } from "@/i18n/LanguageContext";

export function WhatsAppButton() {
  const { t } = useLanguage();
  return (
    <a
      href={WHATSAPP_WA}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("whatsapp.ariaLabel")}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-green-500 p-4 text-white shadow-lg transition duration-300 hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

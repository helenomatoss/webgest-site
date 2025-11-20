import React from "react";
import { MessageCircle, Phone, Mail, Send } from "lucide-react";
import { PHONE_DISPLAY, PHONE_ONLY, WHATSAPP_WA } from "@/config/contact";
import { useLanguage } from "@/i18n/LanguageContext";

type MessageState = { type: "ok" | "err"; text: string } | null;

export function Contact() {
  const { t } = useLanguage();
  const [sending, setSending] = React.useState(false);
  const [msg, setMsg] = React.useState<MessageState>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot
    const hp = (data.get("company") || "").toString().trim();
    if (hp) {
      setMsg({ type: "ok", text: t("contact.form.feedback.success") });
      form.reset();
      return;
    }

    const nome = (data.get("nome") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const telefoneRaw = (data.get("telefone") || "").toString();
    const descricao = (data.get("descricao") || "").toString().trim();

    const telefone = telefoneRaw.replace(/\D/g, "");

    if (nome.length < 2) {
      setMsg({ type: "err", text: t("contact.form.feedback.invalidName") });
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      setMsg({ type: "err", text: t("contact.form.feedback.invalidEmail") });
      return;
    }
    if (telefone.length < 8) {
      setMsg({ type: "err", text: t("contact.form.feedback.invalidPhone") });
      return;
    }
    if (descricao.length < 3) {
      setMsg({ type: "err", text: t("contact.form.feedback.invalidMessage") });
      return;
    }

    setSending(true);
    setMsg(null);

    try {
      const res = await fetch("https://webgestsolutions.com/webconnect/api/lead.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          email,
          telefone,
          descricao,
          company: ""
        })
      });

      const json = await res.json().catch(() => ({}));
      if (json && json.ok) {
        setMsg({ type: "ok", text: t("contact.form.feedback.success") });
        form.reset();
      } else {
        const fallback = t("contact.form.feedback.error");
        const errMsg =
          typeof json?.message === "string" && json.message.trim()
            ? json.message
            : fallback;
        setMsg({ type: "err", text: errMsg });
      }
    } catch (error) {
      setMsg({ type: "err", text: t("contact.form.feedback.networkError") });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contato" className="py-20 bg-background relative tech-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("contact.sectionTitle")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("contact.sectionSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                {t("contact.direct.title")}
              </h3>
              <p className="text-muted-foreground mb-8">
                {t("contact.direct.description")}
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {/* WhatsApp */}
              <a
                href={WHATSAPP_WA}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 group hover-scale cursor-pointer"
              >
                <div className="bg-green-500 p-4 rounded-xl mr-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">{t("contact.direct.whatsapp.title")}</h4>
                  <p className="text-muted-foreground text-sm">
                    {t("contact.direct.whatsapp.subtitle")}
                  </p>
                  <p className="text-primary font-semibold mt-2">{PHONE_DISPLAY}</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={"tel:" + PHONE_ONLY}
                className="flex items-center p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 group hover-scale cursor-pointer"
              >
                <div className="bg-gradient-to-r from-primary to-webgest-orange p-4 rounded-xl mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">{t("contact.direct.phone.title")}</h4>
                  <p className="text-muted-foreground text-sm">{t("contact.direct.phone.subtitle")}</p>
                  <p className="text-primary font-semibold mt-2">{PHONE_DISPLAY}</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="#"
                className="flex items-center p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 group hover-scale cursor-pointer"
              >
                <div className="bg-gradient-to-r from-webgest-orange to-primary p-4 rounded-xl mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">{t("contact.direct.email.title")}</h4>
                  <p className="text-muted-foreground text-sm">{t("contact.direct.email.subtitle")}</p>
                  <p className="text-primary font-semibold mt-2">contato@webgestsolutions.com</p>
                </div>
              </a>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/20 transition-colors duration-300 relative z-10">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              {t("contact.form.title")}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10 pointer-events-auto">
              <div>
                <label htmlFor="nome" className="block text-sm font-semibold text-foreground mb-2">
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-300 outline-none"
                  placeholder={t("contact.form.placeholder.name")}
                />
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm font-semibold text-foreground mb-2">
                  {t("contact.form.phone")}
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-300 outline-none"
                  placeholder={t("contact.form.placeholder.phone")}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-300 outline-none"
                  placeholder={t("contact.form.placeholder.email")}
                />
              </div>

              <div>
                <label htmlFor="descricao" className="block text-sm font-semibold text-foreground mb-2">
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="descricao"
                  name="descricao"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-300 outline-none resize-none"
                  placeholder={t("contact.form.placeholder.message")}
                />
              </div>

              <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" />

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-gradient-to-r from-primary to-webgest-orange text-white py-4 px-6 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 transition-all duration-300 flex items-center justify-center gap-2 hover-scale cursor-pointer disabled:opacity-60"
              >
                <Send className="h-5 w-5" />
                {sending ? t("contact.form.sending") : t("contact.form.submit")}
              </button>

              {msg && (
                <p className={`mt-2 text-sm ${msg.type === "ok" ? "text-green-600" : "text-red-600"}`}>
                  {msg.text}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

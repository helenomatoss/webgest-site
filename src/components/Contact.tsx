import { useState } from "react";
import { MessageCircle, Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em até 24 horas.",
    });

    // Reset form
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background relative tech-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para começar seu projeto? Vamos conversar sobre suas necessidades digitais
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Fale Conosco Diretamente
              </h3>
              <p className="text-muted-foreground mb-8">
                Escolha a forma mais conveniente para entrar em contato. Estamos sempre prontos para atender você!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {/* WhatsApp */}
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 group hover-scale cursor-pointer"
              >
                <div className="bg-green-500 p-4 rounded-xl mr-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">WhatsApp</h4>
                  <p className="text-muted-foreground text-sm">
                    Resposta rápida e atendimento personalizado
                  </p>
                  <p className="text-primary font-semibold mt-2">(11) 99999-9999</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="#"
                className="flex items-center p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 group hover-scale cursor-pointer"
              >
                <div className="bg-gradient-to-r from-primary to-webgest-orange p-4 rounded-xl mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Telefone</h4>
                  <p className="text-muted-foreground text-sm">Seg-Sex, 9h às 18h</p>
                  <p className="text-primary font-semibold mt-2">(11) 99999-9999</p>
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
                  <h4 className="font-bold text-foreground mb-2">E-mail</h4>
                  <p className="text-muted-foreground text-sm">Resposta em até 24h</p>
                  <p className="text-primary font-semibold mt-2">contato@webgest.com.br</p>
                </div>
              </a>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/20 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Envie sua Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Nome completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-300 outline-none"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-300 outline-none"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-300 outline-none"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-300 outline-none resize-none"
                  placeholder="Conte-nos sobre seu projeto..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-webgest-orange text-white py-4 px-6 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 transition-all duration-300 flex items-center justify-center gap-2 hover-scale cursor-pointer"
              >
                <Send className="h-5 w-5" />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
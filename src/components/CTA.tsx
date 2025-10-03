import { ArrowRight, Sparkles } from "lucide-react";
import { WHATSAPP_WA } from "@/config/contact";

export function CTA() {
  const handleGoToContact = () => {
    const el = document.getElementById('contato');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary-light to-webgest-orange relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full floating-element"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border border-white/10 rotate-45 floating-element" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 border border-white/10 rounded-full floating-element" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 border border-white/10 rotate-12 floating-element" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Icon */}
          <div className="bg-white/20 p-6 rounded-2xl inline-block mb-8">
            <Sparkles className="h-12 w-12 text-white" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Pronto para elevar sua{" "}
            <span className="text-white/90 font-extrabold">presença digital?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transforme suas ideias em <strong>soluções digitais</strong> que geram resultados reais. 
            Vamos conversar sobre o seu próximo projeto!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                handleGoToContact();
              }}
              className="bg-white text-primary px-10 py-5 rounded-lg font-bold text-xl hover:bg-white/95 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3 group"
            >
              Solicitar Orçamento Agora
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href={WHATSAPP_WA}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-10 py-5 rounded-lg font-bold text-xl hover:bg-white hover:text-primary transition-all duration-300 flex items-center gap-3"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.346"/>
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Success Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">🚀</div>
              <div className="text-white/90 font-semibold">Entrega Rápida</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">💎</div>
              <div className="text-white/90 font-semibold">Qualidade Premium</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">📈</div>
              <div className="text-white/90 font-semibold">Resultados Reais</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

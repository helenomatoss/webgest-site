import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-8xl font-bold bg-gradient-to-r from-primary to-webgest-orange bg-clip-text text-transparent mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {t("notFound.title")}
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            {t("notFound.description")}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-webgest-orange text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <Home className="h-5 w-5" />
            {t("notFound.cta.home")}
          </a>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
            {t("notFound.cta.back")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

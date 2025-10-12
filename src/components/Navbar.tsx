import { useTranslation } from "react-i18next";
import "../styles/fonts.css";
import { Languages, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [lenguaje, setLenguaje] = useState(() =>
    i18n.language?.startsWith("es") ? "es" : "en"
  );
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguaje = (idioma: string) => i18n.changeLanguage(idioma);
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setLenguaje(newLang);
    changeLanguaje(newLang);
  };

  return (
    <nav className="fixed w-full z-50 bg-black/30 backdrop-blur-lg py-4 px-8 glass-card">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold gradient-text text-cyan-300">
          {t("navbar.title1")}
          <span className="text-white">{t("navbar.title2")}</span>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Language selector */}
          <div className="flex items-center space-x-2">
            <span className="text-cyan-300 font-semibold text-sm">
              <Languages />
            </span>
            <select
              value={lenguaje}
              onChange={handleLanguageChange}
              aria-label={t("navbar.languageSelector") || "Language"}
              className="bg-transparent text-white font-bold border border-white/30 rounded px-2 py-1 hover:border-emerald-300 focus:outline-none cursor-pointer transition-colors"
            >
              <option value="en">{t("navbar.languaje1")}</option>
              <option value="es">{t("navbar.languaje2")}</option>
            </select>
          </div>

          {/* Links */}
          <a href="#about" className="text-white font-bold hover:text-emerald-300 transition-colors">
            {t("navbar.nav1")}
          </a>
          <a href="#work" className="text-white font-bold hover:text-emerald-300 transition-colors">
            {t("navbar.nav2")}
          </a>
          <a href="#skills" className="text-white font-bold hover:text-emerald-300 transition-colors">
            {t("navbar.nav3")}
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col items-center space-y-4 bg-black/50 p-4 rounded-xl">
          <select
            value={lenguaje}
            onChange={handleLanguageChange}
            className="bg-transparent text-white font-bold border border-white/30 rounded px-2 py-1 hover:border-emerald-300 focus:outline-none cursor-pointer transition-colors"
          >
            <option value="en">{t("navbar.languaje1")}</option>
            <option value="es">{t("navbar.languaje2")}</option>
          </select>

          <a href="#about" className="text-white font-bold hover:text-emerald-300 transition-colors">
            {t("navbar.nav1")}
          </a>
          <a href="#work" className="text-white font-bold hover:text-emerald-300 transition-colors">
            {t("navbar.nav2")}
          </a>
          <a href="#skills" className="text-white font-bold hover:text-emerald-300 transition-colors">
            {t("navbar.nav3")}
          </a>
        </div>
      )}
    </nav>
  );
};

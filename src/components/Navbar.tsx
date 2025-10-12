import { useTranslation } from "react-i18next";
import "../styles/fonts.css";
import { Languages } from "lucide-react";
import { useState } from "react";
export const Navbar = () => {
  const { t, i18n } = useTranslation();
  //funcion para cambiar idioma
  const changeLanguaje = (idioma: string) => {
    i18n.changeLanguage(idioma);
  };
  const [lenguaje, setLenguaje] = useState(() =>
    i18n.language?.startsWith("es") ? "es" : "en"
  );

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

        {/* Menu */}
        <div className="flex items-center space-x-6">
          {/* Selector de idioma */}
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
              <option value="en" className="text-black">
                {t("navbar.languaje1")}
              </option>
              <option value="es" className="text-black">
                {t("navbar.languaje2")}
              </option>
            </select>
          </div>

          <a
            href="#about"
            className="text-white font-bold hover:text-emerald-300 transition-colors blink"
          >
            {t("navbar.nav1")}
          </a>
          <a
            href="#work"
            className="text-white font-bold hover:text-emerald-300 transition-colors blink"
          >
            {t("navbar.nav2")}
          </a>
          <a
            href="#skills"
            className="text-white font-bold hover:text-emerald-300 transition-colors blink"
          >
            {t("navbar.nav3")}
          </a>
        </div>
      </div>
    </nav>
  );
};

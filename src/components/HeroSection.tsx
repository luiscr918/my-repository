import { useTranslation } from "react-i18next";

export const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="min-h-screen flex items-center pt-20 px-8 text-gray-100">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
              {t("hero.title1")}
            </span>
            <br />
            {t("hero.title2")} &<br />
            <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
              {t("hero.title3")}
            </span>
          </h1>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-lg font-medium hover:shadow-lg transition">
              {t("hero.view")}
            </button>
            <button className="px-6 py-3 border border-white rounded-lg hover:bg-white/10 transition">
              {t("hero.contact")}
            </button>
          </div>
        </div>
        <div className="relative tilt-effect">
          <div className="rounded-2xl p-1 backdrop-blur-sm bg-white/10">
            <img
              src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80"
              alt="Developer"
              className="rounded-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

import { useTranslation } from "react-i18next";
import { Github } from "lucide-react";

export const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <div
      id="about"
      className="relative bg-gradient-to-br from-cyan-800 via-teal-700 to-emerald-300 overflow-hidden mt-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-gradient-to-br from-cyan-800 via-teal-700 to-emerald-300 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-transparent transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100"></polygon>
          </svg>

          <div className="pt-1"></div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="my-6 text-2xl tracking-tight font-extrabold text-white sm:text-3xl md:text-4xl">
                {t("about.title1")}
              </h2>

              <p className="text-gray-300 mb-4">{t("about.desc")}</p>
              <a
                href="https://drive.google.com/file/d/1jz7f3nWLp_85XnLfRNe9u5tR66CZUGjS/view?usp=sharing"
                target="_blank"
              >
                <span className="text-cyan-300 cursor-pointer underline block mb-4">
                  {t("about.link")}
                </span>
              </a>

              {/* GitHub icon link */}
              <a
                href="https://github.com/luiscr918"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-200 hover:text-white transition-colors"
              >
                <Github size={28} />
                <span className="font-medium">GitHub</span>
              </a>
            </div>
          </main>
        </div>
      </div>

      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://i.postimg.cc/JhBf6LtL/redim1.png"
          alt="Developer workspace"
        />
      </div>
    </div>
  );
};

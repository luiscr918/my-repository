import { useTranslation } from "react-i18next";
import "../styles/fonts.css";
export const MyProjects = () => {
  const { t } = useTranslation();
  const projects = [
    {
      title: t("projects.project1t"),
      desc: t("projects.project1d"),
      tech: ["React", "Redis", "Docker", "Postgresql", "Inertia", "Adonis"],
      img: "https://iili.io/KOWbKYu.md.png",
      color: "neon",
      link: "https://educacion.dpe.gob.ec/",
    },
    {
      title: t("projects.project2t"),
      desc: t("projects.project2d"),
      tech: ["React", "Firebase", "Typescipt", "Vite", "Tailwind CSS"],
      img: "https://iili.io/KOW4Vb1.md.png",
      color: "cyber",
      link: "https://uelincolnlarrea.com/",
    },
    {
      title: t("projects.project3t"),
      desc: t("projects.project3d"),
      tech: ["React", "Typescript", "Vite", "Tailwind CSS"],
      img: "https://iili.io/KOWtzwQ.md.png",
      color: "matrix",
      link: "https://focusupluiscr918.netlify.app/",
    },
  ];
  return (
    <section id="work" className="py-20 px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 gradient-text text-cyan-300">
          {t("projects.title1")}{" "}
          <span className="text-white">{t("projects.title2")}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="tilt-effect "
              data-tilt
              data-tilt-max="5"
              data-tilt-glare="true"
            >
              <div
                className={`glass-card rounded-xl overflow-hidden hover:shadow-lg hover:shadow-${project.color}/20 transition-all h-full`}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="opacity-80 mb-4 text-gray-300">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 text-cyan-700">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-glass rounded-full text-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    target="_blank"
                    href={project.link}
                    className={`text-${project.color} hover:underline text-white font-extrabold blink`}
                  >
                    {t("projects.view")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

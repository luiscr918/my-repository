import { useTranslation } from "react-i18next";

export const Skills = () => {
  const skills = [
    {
      name: "React",
      type: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Angular",
      type: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
    },
    {
      name: "React Native",
      type: "Mobile Development",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original-wordmark.svg",
    },
    {
      name: "SpringBoot",
      type: "Backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
    },
    {
      name: "Tailwind",
      type: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "TypeScript",
      type: "Language",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "MySQL",
      type: "Database",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    },
    {
      name: "Postgresql",
      type: "Database",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "MongoDB",
      type: "Database",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
  ];
  const { t } = useTranslation();
  return (
    <section
      id="skills"
      className="py-20 px-8 bg-gradient-to-br from-void to-gray-900"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 gradient-text">
          {t("skills.title1")}{" "}
          <span className="text-white">{t("skills.title2")}</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-glass rounded-full">
                <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
              </div>
              <h3 className="font-bold">{skill.name}</h3>
              <p className="text-sm opacity-70">{skill.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

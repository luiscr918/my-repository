

export const MyProjects=()=> {
   const projects = [
    {
      title: "AI Dashboard",
      desc: "Next.js + Tailwind + TensorFlow",
      tech: ["React", "AI", "Node.js"],
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "neon",
      link: "#",
    },
    {
      title: "E-Commerce Platform",
      desc: "React + GraphQL + Stripe",
      tech: ["React", "GraphQL", "MongoDB"],
      img: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "cyber",
      link: "#",
    },
    {
      title: "Blockchain Explorer",
      desc: "Solidity + Web3.js + Ethers",
      tech: ["Blockchain", "Web3", "React"],
      img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "matrix",
      link: "#",
    },
  ];

  return (
    <section id="work" className="py-20 px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 gradient-text">
          Featured <span className="text-white">Work</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="tilt-effect" data-tilt data-tilt-max="5" data-tilt-glare="true">
              <div className={`glass-card rounded-xl overflow-hidden hover:shadow-lg hover:shadow-${project.color}/20 transition-all h-full`}>
                <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="opacity-80 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-glass rounded-full text-sm">{t}</span>
                    ))}
                  </div>
                  <a href={project.link} className={`text-${project.color} hover:underline`}>
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

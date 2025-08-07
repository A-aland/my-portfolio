import { useRef } from "react";

const projects = [
  {
    title: "Smart Dashboard",
    description:
      "A responsive dashboard UI using React, Tailwind, and Recharts for interactive data visualization.",
    link: "https://github.com", // GitHub main page
  },
  {
    title: "Task Manager",
    description:
      "A minimalistic to-do app built with React that helps manage daily tasks with filters and animations.",
    link: "https://github.com", // GitHub main page
  },
];

function TiltCard({ children }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateX = (y / height - 0.5) * 20;
    const rotateY = (x / width - 0.5) * -20;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-300 perspective p-1"
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}

export default function Projects() {
  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-green-400 mb-14 border-b-4 border-green-600 pb-3 drop-shadow-lg">
          My Projects
        </h2>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project, idx) => (
            <TiltCard key={idx}>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="block bg-gray-850 rounded-xl shadow-lg p-8 border border-green-600 hover:shadow-green-500 transition-all"
              >
                <h3 className="text-2xl font-semibold mb-3 text-green-300 drop-shadow-md">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 text-base">{project.description}</p>
                <span className="text-green-400 underline hover:text-green-200 drop-shadow text-base">
                  View on GitHub →
                </span>
              </a>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

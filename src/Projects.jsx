import { useRef } from "react";

// Projects array with updated POS system info and PDF
const projects = [
  {
    title: "POS System",
    description:
      "A complete market management and cashier system built with React and Tailwind. " +
      "Includes modules for Dashboard, Users, Items, Stock Entries, Brands, Categories, POS, and Returns.",
    pdf: "https://drive.google.com/uc?export=download&id=1fwyv965VdgZ9RKcPdSaMUIWp7PbU_Oq6", // Your Google Drive direct link
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
              <div className="block bg-gray-850 rounded-xl shadow-lg p-8 border border-green-600 hover:shadow-green-500 transition-all">
                <h3 className="text-2xl font-semibold mb-3 text-green-300 drop-shadow-md">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 text-base">
                  {project.description}
                </p>

                {/* Links Section */}
                <div className="flex flex-wrap gap-3">
                  {project.pdf && (
                    <a
                      href={project.pdf}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-gray-700 text-green-300 rounded-lg shadow hover:bg-gray-600 transition"
                    >
                      View PDF Showcase
                    </a>
                  )}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

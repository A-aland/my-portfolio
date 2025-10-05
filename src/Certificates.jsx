// Certificates.jsx
import { useRef } from "react";

// Certificates array
const certificates = [
  {
    title: "Internship Completion Certificate",
    subtitle: "Front-End Web Application Development",
    description:
      "Successfully completed a 6-week internship program focused on building responsive and interactive front-end web applications, hosted by Chance.",
    link: "https://drive.google.com/file/d/1jhlwNv_fKtabM4l7qTyL1wq8kb87z8HM/view?usp=sharing",
  },
  {
    title: "Arabic Language Completion Certificate",
    subtitle: "6 Months at CIS College",
    description:
      "Successfully completed a 6-month intensive Arabic language course at CIS College, developing proficiency in reading, writing, and speaking.",
    link: "https://drive.google.com/file/d/1LXH5GuQaV6vz7n9iaqXoyIiM0fcbdaDX/view?usp=sharing",
  },
  {
    title: "English Language Completion Certificate",
    subtitle: "Intensive Program at Komar University",
    description:
      "Successfully completed this intensive English program at Komar University, achieving proficiency at CEFR B2 English level.",
    link: "https://drive.google.com/file/d/1WnWiIqWexSAY4jh16x240qGQzLeIMhEx/view?usp=sharing", // Replace with actual link
  },
];

// TiltCard component for 3D hover effect
function TiltCard({ children }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateX = Math.min(Math.max((y / height - 0.5) * 15, -15), 15);
    const rotateY = Math.min(Math.max((x / width - 0.5) * -15, -15), 15);
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.willChange = "transform";
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
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

// Certificates component
export default function Certificates({ whiteMode }) {
  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h2
          className={`text-4xl font-bold mb-14 border-b-4 pb-3 drop-shadow-lg ${
            whiteMode
              ? "border-black text-black"
              : "border-yellow-600 text-yellow-400"
          }`}
        >
          Certificates
        </h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map(({ title, subtitle, description, link }, idx) => (
            <TiltCard key={idx}>
              <div
                className={`block rounded-xl shadow-lg p-8 border transition-transform duration-300 ${
                  whiteMode
                    ? "bg-white border-black text-black hover:shadow-gray-400 hover:scale-105"
                    : "bg-gray-800 border-yellow-600 text-white hover:shadow-yellow-500 hover:scale-105"
                }`}
              >
                <h3 className="text-2xl font-semibold mb-2 text-yellow-300 drop-shadow-md">
                  {title}
                </h3>
                <h4 className="text-lg font-medium mb-4">{subtitle}</h4>
                <p className="mb-4">{description}</p>
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${title}`}
                    className="px-4 py-2 bg-gray-700 text-yellow-300 rounded-lg shadow hover:bg-gray-600 transition"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

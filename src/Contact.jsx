import { useRef } from "react";
import {
  FaWhatsapp,
  FaViber,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const contacts = [
  {
    icon: <FaWhatsapp size={24} className="text-green-400" />,
    label: "WhatsApp",
    detail: "+964 771 599 47 37",
    href: "https://wa.me/9647715994737",
    hoverColor: "hover:text-green-400",
  },
  {
    icon: <FaViber size={24} className="text-purple-500" />,
    label: "Viber",
    detail: "+964 771 599 47 37",
    href: "viber://chat?number=%2B9647715994737",
    hoverColor: "hover:text-purple-400",
  },
  {
    icon: <FaEnvelope size={24} className="text-blue-400" />,
    label: "Email",
    detail: "alandkamal1999@gmail.com",
    href: "mailto:alandkamal1999@gmail.com",
    hoverColor: "hover:text-blue-400",
  },
  {
    icon: <FaFacebook size={24} className="text-blue-600" />,
    label: "Facebook",
    detail: "aland.kamal.58",
    href: "https://www.facebook.com/aland.kamal.58/",
    hoverColor: "hover:text-blue-500",
  },
  {
    icon: <FaInstagram size={24} className="text-pink-500" />,
    label: "Instagram",
    detail: "aland___99",
    href: "https://www.instagram.com/aland___99/",
    hoverColor: "hover:text-pink-500",
  },
  {
    icon: <FaLinkedin size={24} className="text-sky-400" />,
    label: "LinkedIn",
    detail: "aland-kamal",
    href: "https://www.linkedin.com/in/aland-kamal-4ab57b31a/",
    hoverColor: "hover:text-sky-400",
  },
];

function TiltCard({ children }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateX = ((y / height) - 0.5) * 20;
    const rotateY = ((x / width) - 0.5) * -20;
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

export default function Contact({ whiteMode }) {
  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h2
          className={`text-4xl font-bold mb-14 border-b-4 pb-3 drop-shadow-lg ${
            whiteMode
              ? "border-black text-black"
              : "border-cyan-600 text-cyan-400"
          }`}
        >
          Contact Me
        </h2>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
          {contacts.map(({ icon, label, detail, href, hoverColor }, idx) => (
            <TiltCard key={idx}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-6 p-6 rounded-xl border shadow-lg transition-all ${
                  whiteMode
                    ? "bg-white border-black text-black hover:shadow-gray-400"
                    : "bg-gray-850 border-cyan-600 text-white hover:shadow-cyan-500"
                } ${hoverColor}`}
              >
                <div>{icon}</div>
                <div>
                  <h3 className="text-xl font-semibold">{label}</h3>
                  <p className={`text-cyan-300 ${whiteMode ? "text-black" : ""}`}>
                    {detail}
                  </p>
                </div>
              </a>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

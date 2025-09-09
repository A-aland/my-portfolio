import { useRef } from "react";

function TiltLink({ href, text, color, whiteMode }) {
  const linkRef = useRef(null);

  const handleMouseMove = (e) => {
    const link = linkRef.current;
    const { left, top, width, height } = link.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = (y / height - 0.5) * 40;
    const rotateY = (x / width - 0.5) * -40;
    const rotateZ = ((x - width / 2) / width) * 25;

    link.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      rotateZ(${rotateZ}deg)
      scale(1.1)
    `;
  };

  const handleMouseLeave = () => {
    const link = linkRef.current;
    link.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      rotateZ(0deg)
      scale(1)
    `;
  };

  // Build the color class safely
  let colorClass;
  switch (color) {
    case "blue":
      colorClass = whiteMode
        ? "text-gray-800 hover:text-blue-600"
        : "text-gray-300 hover:text-blue-400";
      break;
    case "purple":
      colorClass = whiteMode
        ? "text-gray-800 hover:text-purple-600"
        : "text-gray-300 hover:text-purple-400";
      break;
    case "green":
      colorClass = whiteMode
        ? "text-gray-800 hover:text-green-600"
        : "text-gray-300 hover:text-green-400";
      break;
    case "cyan":
      colorClass = whiteMode
        ? "text-gray-800 hover:text-cyan-600"
        : "text-gray-300 hover:text-cyan-400";
      break;
    case "yellow":
      colorClass = whiteMode
        ? "text-gray-800 hover:text-yellow-600"
        : "text-gray-300 hover:text-yellow-400";
      break;
    default:
      colorClass = "text-gray-300";
  }

  return (
    <a
      href={href}
      ref={linkRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative inline-block px-3 py-2 rounded-md drop-shadow-lg transition-transform duration-300`}
      style={{
        display: "inline-block",
        transformStyle: "preserve-3d",
        willChange: "transform",
        transition: "transform 0.3s ease-out",
      }}
    >
      <span
        className={`text-sm font-semibold transition-colors duration-300 ${colorClass}`}
      >
        {text}
      </span>
      <span
        className={`
          absolute left-0 -bottom-0.5 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 
          transition-transform origin-left duration-300
          ${
            color === "blue"
              ? "bg-blue-400"
              : color === "purple"
              ? "bg-purple-400"
              : color === "green"
              ? "bg-green-400"
              : color === "cyan"
              ? "bg-cyan-400"
              : color === "yellow"
              ? "bg-yellow-400"
              : "bg-gray-400"
          }
        `}
      />
    </a>
  );
}

function ModeToggle({ whiteMode, setWhiteMode }) {
  return (
    <button
      onClick={() => setWhiteMode(!whiteMode)}
      aria-label="Toggle Light/Dark Mode"
      className={`
        relative w-16 h-8 rounded-full cursor-pointer
        transition-colors duration-500
        ${whiteMode ? "bg-gray-300" : "bg-gray-800"}
        flex items-center px-1
        shadow-[0_0_15px_#0ff] hover:shadow-[0_0_25px_#0ff]
      `}
    >
      <span
        className={`
          absolute inset-0 rounded-full
          ${whiteMode ? "bg-white/80" : "bg-cyan-400/50"}
          filter blur-md
          animate-pulse
          pointer-events-none
        `}
      />
      <span
        className={`
          relative w-6 h-6 rounded-full transition-transform duration-500
          ${
            whiteMode
              ? "translate-x-8 bg-yellow-400 shadow-[0_0_10px_#fffb00]"
              : "translate-x-0 bg-cyan-400 shadow-[0_0_10px_#00fff7]"
          }
          flex justify-center items-center text-black font-bold text-xs select-none
          z-10
        `}
      >
        {whiteMode ? "☀️" : "🌙"}
      </span>
    </button>
  );
}

export default function Navbar({ whiteMode, setWhiteMode }) {
  return (
    <nav
      className={`w-full shadow sticky top-0 z-50 transition-colors duration-500 ${
        whiteMode ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1
          className={`text-4xl md:text-5xl font-extrabold drop-shadow-lg animate-floatUpDown glowingText transition-colors duration-500 ${
            whiteMode ? "text-black" : "text-blue-300"
          }`}
        >
          Aland's Portfolio
        </h1>

        <div className="space-x-8 hidden md:flex items-center">
          <TiltLink
            href="#home"
            text="Home"
            color="blue"
            whiteMode={whiteMode}
          />
          <TiltLink
            href="#about"
            text="About"
            color="purple"
            whiteMode={whiteMode}
          />
          <TiltLink
            href="#projects"
            text="Projects"
            color="green"
            whiteMode={whiteMode}
          />
          <TiltLink
            href="#certificates"
            text="Certificates"
            color="yellow"
            whiteMode={whiteMode}
          />
          <TiltLink
            href="#contact"
            text="Contact"
            color="cyan"
            whiteMode={whiteMode}
          />
          <ModeToggle whiteMode={whiteMode} setWhiteMode={setWhiteMode} />
        </div>
      </div>
    </nav>
  );
}

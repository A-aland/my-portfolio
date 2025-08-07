export default function Footer({ whiteMode }) {
  return (
    <footer
      className={`w-full py-10 mt-20 border-t transition-colors duration-500 ${
        whiteMode
          ? "bg-white text-black border-black"
          : "bg-gray-900 text-gray-300 border-blue-500"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left side */}
        <div className="text-center md:text-left space-y-2">
          <p className="text-xl font-bold drop-shadow-sm">
            Aland's Portfolio
          </p>
          <p className="text-sm opacity-75">
            © {new Date().getFullYear()} Aland. All rights reserved.
          </p>
        </div>

        {/* Center */}
        <div className="flex space-x-6">
          <a
            href="#home"
            className="hover:text-blue-400 transition duration-300 text-sm"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-purple-400 transition duration-300 text-sm"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-green-400 transition duration-300 text-sm"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-cyan-400 transition duration-300 text-sm"
          >
            Contact
          </a>
        </div>

        {/* Right side */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/aland"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <i className="fab fa-github text-xl" />
          </a>
          <a
            href="https://linkedin.com/in/aland"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <i className="fab fa-linkedin text-xl" />
          </a>
          {/* Add more icons as needed */}
        </div>
      </div>
    </footer>
  );
}

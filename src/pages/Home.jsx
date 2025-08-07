export default function Home({ whiteMode }) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400 blur-3xl opacity-30 rounded-full animate-pulse" />
      <div className="absolute bottom-0 -right-40 w-80 h-80 bg-purple-500 blur-2xl opacity-30 rounded-full animate-pulse" />

      <h1
        className={`text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg z-10 ${
          whiteMode ? "text-black" : "text-blue-400"
        }`}
      >
        Hello, I'm <span className={whiteMode ? "text-black" : "text-blue-300"}>Aland</span>
      </h1>
      <p
        className={`text-lg md:text-xl mb-8 max-w-3xl drop-shadow-md z-10 ${
          whiteMode ? "text-black" : "text-blue-300"
        }`}
      >
        A passionate Front-End Developer building modern, responsive, and user-friendly web applications.
      </p>
      <a
        href="#projects"
        className={`mt-4 inline-block px-8 py-3 border rounded-full font-semibold transition-all drop-shadow z-10 ${
          whiteMode
            ? "border-black text-black hover:bg-black hover:text-white"
            : "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900"
        }`}
      >
        View My Work
      </a>
    </section>
  );
}

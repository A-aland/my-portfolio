export default function About({ whiteMode }) {
  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-4xl font-bold mb-8 pb-3 border-b-4 border-purple-600 text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text drop-shadow-[0_0_25px_rgba(168,85,247,0.7)]`}
        >
          About Me
        </h2>

        <p
          className={`text-base leading-relaxed drop-shadow-md ${
            whiteMode ? "text-black" : "text-purple-300"
          }`}
        >
          I'm a Computer Science graduate passionate about crafting clean and
          efficient front-end solutions using React, Tailwind CSS, and modern UI
          tools. I enjoy learning new technologies and constantly aim to improve
          user experience and performance across all devices.
        </p>

        <p
          className={`mt-8 text-base leading-relaxed drop-shadow-md ${
            whiteMode ? "text-black" : "text-purple-300"
          }`}
        >
          When I'm not coding, I enjoy reading philosophical novels, working
          out, and exploring new skills that expand my creativity and logic.
        </p>
      </div>
    </section>
  );
}

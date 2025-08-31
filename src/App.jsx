import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Loading from "./components/Loading";
import { useScrollFadeIn } from "./hooks/useScrollFadeIn";
import Footer from "./components/Footer";
import Home from "./Home";

function FadeInSection({ children, id }) {
  const { ref, visible } = useScrollFadeIn();

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-opacity duration-1000 ease-in-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </section>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [whiteMode, setWhiteMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-500 ${
        whiteMode ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      {/* potential adding future hosting <title>Welcome to My Portfolio</title> */}

      <title>Welcome to My Portfolio</title>
      <Navbar whiteMode={whiteMode} setWhiteMode={setWhiteMode} />

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-20">
        <FadeInSection id="home">
          <Home whiteMode={whiteMode} />
        </FadeInSection>

        <hr
          className={`border-t opacity-50 glow ${
            whiteMode ? "border-black" : "border-blue-600"
          }`}
        />

        <FadeInSection id="about">
          <About whiteMode={whiteMode} />
        </FadeInSection>

        <hr
          className={`border-t opacity-50 glow ${
            whiteMode ? "border-black" : "border-purple-600"
          }`}
        />

        <FadeInSection id="projects">
          <Projects whiteMode={whiteMode} />
        </FadeInSection>

        <hr
          className={`border-t opacity-50 glow ${
            whiteMode ? "border-black" : "border-pink-600"
          }`}
        />

        <FadeInSection id="contact">
          <Contact whiteMode={whiteMode} />
        </FadeInSection>
      </main>

      {/* Footer Section */}
      <Footer whiteMode={whiteMode} />
    </div>
  );
}

import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import AIChatBox from "./components/AIChatBox";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <Layout>
      <Hero />

      {/* Journey Section with Heading */}
      <section
        id="journey"
        className="max-w-6xl mx-auto px-6 md:px-10 py-16"
      >
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My Journey & AI Chat
          </h2>
          <p className="text-gray-400 mt-3">
            A quick look at my path so far and a chatbot that knows everything
            about me.
          </p>
        </div>

        {/* Timeline & AIChatBox */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
  <div id="timeline" className="scroll-mt-24">
    <Timeline />
  </div>
  <div id="aichatbot" className="scroll-mt-24">
    <AIChatBox />
  </div>
</div>

      </section>

      <section id="skills" className="scroll-mt-20">
        <Skills />
      </section>

      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>

      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
    </Layout>
  );
}

export default App;

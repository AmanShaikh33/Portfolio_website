import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import AIChatBox from "./components/AIChatBox";
import Projects from "./components/Projects";
import Playground from "./components/Playground";
import Contact from "./components/Contact";

function App() {
  return (
    <Layout>
      <Hero />

      {/* Timeline & AI Assistant side by side */}
      <div className="grid md:grid-cols-2 gap-10 mt-20">
        <Timeline />
        <AIChatBox />
      </div>

      <Projects />
      <Playground />
      <Contact />
    </Layout>
  );
}

export default App;

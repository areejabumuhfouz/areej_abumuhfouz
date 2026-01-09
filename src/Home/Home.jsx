import Navbar from "../Components/Header";
import PortfolioHero from "./Hero";
import About from "./About";
import Skills from "./Skills";
// import Projects from "../components/Projects";
// import Experience from "../components/Experience";
// import Contact from "../components/Contact";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <PortfolioHero />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Projects Section */}
      {/* <section id="projects">
        <Projects />
      </section> */}

      {/* Experience Section (Optional) */}
      {/* <section id="experience">
        <Experience />
      </section> */}

      {/* Contact Section */}
      {/* <section id="contact">
        <Contact />
      </section> */}

      <Footer />
    </main>
  );
};

export default Home;

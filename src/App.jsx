import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Profile">
        <Parallax type="profile" />
      </section>
      <section>Profile</section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section>Portfolio</section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;

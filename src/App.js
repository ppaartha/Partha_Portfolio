import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Achievement from "./components/achievement/Achievement";
import Qualification from "./components/education/Qualification";
import Footer from "./components/footer/Footer";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Work from "./components/work/Work";
import Research from "./components/research_experience/Research";
// import Score from "./components/score/Score";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home/>
        <About/>
        <Services/>
        <Skills/>
        <Qualification/>
        <Research/>
        <Work/>
        <Achievement/>
        <Contact/>
        <Testimonials/>
        {/* <Score/> */}
        <Footer/>
      
      </main>
    </>
  );
}

export default App;

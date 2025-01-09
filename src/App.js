import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Achievement from "./components/achievement/Achievement";
import Qualification from "./components/qualification/Qualification";
import Footer from "./components/footer/Footer";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Qualification/>
        <Achievement/>
        <Testimonials/>
        <Footer/>
      
      </main>
    </>
  );
}

export default App;

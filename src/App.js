import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbarr from "./Component/Nav/Navbarr";
import Footer from "./Component/Footer/Footer";
import Hero from "./Component/Hero/Hero";
import About from "./Component/About/About";
import Recomended from "./Component/Recomended/Recomended";
import Testimonial from "./Component/Testimniul/Testimonial";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbarr />
        <Hero />
        <About />
        <Recomended />
        <Testimonial />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

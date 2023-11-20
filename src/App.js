import Navbar from "./components/Navbar";
import Heropage from "./components/Heropage";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Projects from "./components/Projects";




function App() {
  return (
    <div>
      <Navbar/>
      <Heropage/>
      <About/>
      <Projects/>


      <SocialLinks/>
    </div>
  );
}

export default App;

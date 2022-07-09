import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import "bootstrap/dist/js/bootstrap.esm.min.js";
import Header from "./components/header/Header";
import ParticlesBg from "particles-bg";

function App() {
  
  return (
    <div>
      <ParticlesBg
      color="#ffffff"
        type="cobweb"
      />
      <Navbar />
      <Header />
    </div>
  );
}

export default App;

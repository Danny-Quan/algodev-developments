import Header from "./components/Header";
import Services from "./components/Services";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Events from "./components/Events";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
      <Services/>
      </div>
      <About/>
      <div className="container">
      <Technologies/>
      <Events/>
      <Contact/>
      </div>
    </div>
  );
}

export default App;

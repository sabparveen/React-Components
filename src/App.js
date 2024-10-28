import "./App.css";
import Header from "./header/Header"
import About from "./about/About"
import Footer from "./footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


function App() {
  console.log("working");

  return (
    <div className="App">
      <Header />
      <About />
      <Footer />
    </div>
  );
}


export default App


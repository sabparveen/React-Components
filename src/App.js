import "./App.css";
import Header from "./header/Header"
import About from "./about/About"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


function App() {
  console.log("working");

  return (
    <div className="App">
      <Header />
      <About />
    </div>
  );
}


export default App


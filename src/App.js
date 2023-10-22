import "./App.css";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Second from "./components/second/Second";
import Third from "./components/third/Third";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Second />
      <Third />
      <Footer />
    </div>
  );
}

export default App;

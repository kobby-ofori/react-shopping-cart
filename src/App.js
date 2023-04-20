import "./App.css";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="container-fluid main-container">
      <Hero />
      <Nav />
      <Checkout />
      <Footer />
    </div>
  );
}

export default App;

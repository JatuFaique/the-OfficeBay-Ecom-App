import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import logo from "./logo.png";
import Home from "./pages/Home";
import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

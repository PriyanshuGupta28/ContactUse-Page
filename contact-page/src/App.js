import "./App.css";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <section>
        <Navbar />
        <Form />
      </section>
      <Footer />
    </div>
  );
}

export default App;

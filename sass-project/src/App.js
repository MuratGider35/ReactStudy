import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./scss/App.scss";
import datas from "./data";

function App() {
  return (
    <div className="App">
      <Header />
      <Card datam={datas} />
      <Footer />
    </div>
  );
}

export default App;

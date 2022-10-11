import Header from "./component/Header/Header.jsx";
import Main from "./component/Main/Main.jsx";
import Footer from "./component/Footer/Footer.jsx";
import data from "./assets/data";
function App() {
  return (
    <div className="App">
      <Header />
      {data.map((item) => (
        <Main {...item} />
      ))}
      <Footer />
    </div>
  );
}

export default App;

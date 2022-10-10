import Header from "./components/Header/Header";
import data from "./data";
import Card from "./components/Cards/Card";

function App() {
  return (
    <div className="App">
      <Header />
      {data.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          image={card.image}
          desc={card.desc}
        />
      ))}
    </div>
  );
}

export default App;

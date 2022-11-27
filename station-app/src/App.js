import { useState } from "react";

function App() {
  const [route, setRoute] = useState({
    route: "",
    stations: [],
  });

  const handleRoute = (e) => {
    setRoute((route) => ({ ...route, route: e.target.value }));
  };

  const addStation = () => {
    setRoute((route) => ({
      ...route,
      stations: [...route.stations, { name: "", lat: "", lon: "" }],
    }));
  };

  const enabled = route.route;
  return (
    <div>
      <br />
      <div>
        <input
          type="text"
          value={route.route}
          onChange={handleRoute}
          placeholder="güzergah"
        />
        <button onClick={addStation}>Yeni Durak Ekle</button>
      </div>
      <br />
      <div>
        {route.stations.map((station) => (
          <div>
            <input type="text" placeholder="durak" />
            <input type="number" placeholder="LAT" />
            <input type="number" placeholder="LON" />
          </div>
        ))}
      </div>
      <br />
      <button disabled={!enabled}>Tamam</button>

      <pre>{JSON.stringify(route)}</pre>
    </div>
  );
}

export default App;

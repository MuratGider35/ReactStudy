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

  const handleStation = (value, name, key) => {
    setRoute((route) => ({
      ...route,
      stations: route.stations.map((station, i) => {
        if (key === i) {
          station[name] = value;
        }
        return station;
      }),
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
        {route.stations.map((station, key) => (
          <div>
            <input
              type="text"
              placeholder="durak"
              onChange={(e) => handleStation(e.target.value, "name", key)}
            />
            <input
              type="number"
              placeholder="LAT"
              onChange={(e) => handleStation(e.target.value, "lat", key)}
            />
            <input
              type="number"
              placeholder="LON"
              onChange={(e) => handleStation(e.target.value, "lon", key)}
            />
          </div>
        ))}
      </div>
      <br />
      <button disabled={!enabled}>Tamam</button>
      <h1>{route.route}</h1>
      <h3>{route.stations[0].name}</h3>
      <pre>{JSON.stringify(route)}</pre>
    </div>
  );
}

export default App;

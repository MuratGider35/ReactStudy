import React, { useState } from "react";

function App() {
  const people = {
    isim: "",
    soyisim: "",
    yaş: "",
  };

  const [user, setUser] = useState(people);
  const [table, setTable] = useState([]);
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTable([...table, user]);
    setUser(people);
  };

  return (
    <div className="flex-form">
      <div className="vertical">
        <form onSubmit={handleSubmit} className="table-form">
          <input
            type="text"
            placeholder="isim"
            name="isim"
            value={user.isim}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="soyisim"
            name="soyisim"
            value={user.soyisim}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="yaş"
            name="yaş"
            value={user.yaş}
            onChange={handleChange}
          />
          <button type="submit">EKLE</button>
        </form>
      </div>

      <div>
        <table border={1}>
          <thead>
            <tr>
              <th>İSİM</th>
              <th>SOY İSİM</th>
              <th>YAŞ</th>
            </tr>
          </thead>
          <tbody>
            {table.map((item) => (
              <tr>
                <td>{item.isim}</td>
                <td>{item.soyisim}</td>
                <td>{item.yaş}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

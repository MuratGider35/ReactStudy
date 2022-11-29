import React, { useEffect, useState } from "react";

function App() {
  const people = {
    id: new Date().getTime(),
    isim: "",
    soyisim: "",
    yaş: "",
  };

  const [user, setUser] = useState(people);
  const [table, setTable] = useState([]);
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState(people);

  useEffect(() => {
    const temp = localStorage.getItem("tables");
    const loadedTables = JSON.parse(temp);
    if (loadedTables) {
      setTable(loadedTables);
    }
  }, []);

  useEffect(() => {
    const temp = JSON.stringify(table);
    localStorage.setItem("tables", temp);
  }, [table]);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const handleTableChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setEditingText({ ...editingText, [name]: value });
    console.log(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTable([...table, user]);
    setUser(people);
    console.log(table);
  };

  const deleteTable = (id) => {
    const updateTables = [...table].filter((sil) => sil.id !== id); //alt kısımda delete table fonksiyonuna item.id verdik paremetre olarak item.id ye eşit olmayanları döndürür yani item.id olan silinmiş olur
    setTable(updateTables);
  };
  const editTodo = (id) => {
    const updateTodos = [...table].map((edit) => {
      if (edit.id === id) {
        edit = editingText;
      }
      return edit;
    });
    setTable(updateTodos);
    setTodoEditing(null);
    setEditingText(people);
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
              <th>DELETE</th>
              <th>EDİT/SAVE</th>
            </tr>
          </thead>
          <tbody>
            {table.map((item) => (
              <>
                {todoEditing === item.id ? (
                  <tr key={item.id}>
                    <td>
                      <input
                        className="editinput"
                        name="isim"
                        value={editingText.isim}
                        type="text"
                        onChange={handleTableChange}
                      />
                    </td>
                    <td>
                      <input
                        className="editinput"
                        name="soyisim"
                        value={editingText.soyisim}
                        type="text"
                        onChange={handleTableChange}
                      />
                    </td>
                    <td>
                      <input
                        className="editinput"
                        name="yaş"
                        value={editingText.yaş}
                        type="text"
                        onChange={handleTableChange}
                      />
                    </td>
                    <td>
                      <button onClick={() => deleteTable(item.id)}>
                        DELETE
                      </button>
                    </td>
                    <td>
                      <button onClick={() => editTodo(item.id)}>SAVE</button>
                    </td>
                  </tr>
                ) : (
                  <tr key={item.id}>
                    <td>{item.isim}</td>
                    <td>{item.soyisim}</td>
                    <td>{item.yaş}</td>
                    <td>
                      <button onClick={() => deleteTable(item.id)}>
                        DELETE
                      </button>
                    </td>
                    <td>
                      <button onClick={() => setTodoEditing(item.id)}>
                        EDİT
                      </button>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { API_BASE } from "./api";

function App() {
  const [lecturas, setLecturas] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/lecturas/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setLecturas(data));
  }, []);

  return (
    <div>
      <h1>Lecturas</h1>
      <ul>
        {lecturas.map((l) => (
          <li key={l.id}>{l.fecha} - {l.monto_calculado} Gs</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
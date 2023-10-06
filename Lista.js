import React from "react";

function Lista({ zapisi, obrisiZapis }) {
  return (
    <ul>
      {zapisi.map((zapis, index) => (
        <li key={index}>
          {zapis.ime}: {zapis.telefon}
          <button onClick={() => obrisiZapis(index)}>Obriši</button>
        </li>
      ))}
    </ul>
  );
}

export default Lista;

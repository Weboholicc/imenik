import React, { useState } from "react";
import "./UnosZapisa.css";

function UnosZapisa({ dodajZapis }) {
  const [ime, setIme] = useState("");
  const [telefon, setTelefon] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ime && telefon) {
      dodajZapis({ ime, telefon });
      setIme("");
      setTelefon("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ime"
        value={ime}
        onChange={(e) => setIme(e.target.value)}
      />
      <input
        type="text"
        placeholder="Broj telefona"
        value={telefon}
        onChange={(e) => setTelefon(e.target.value)}
      />
      <button type="submit">Dodaj</button>
    </form>
  );
}

export default UnosZapisa;

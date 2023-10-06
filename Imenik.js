import React, { useState, useEffect } from "react";
import "./Imenik.css"; 
import Lista from "./Lista";
import UnosZapisa from "./UnosZapisa";


function Imenik() {
  const [zapisi, setZapisi] = useState([]);

  useEffect(() => {
   
    const spremljeniZapisi = JSON.parse(localStorage.getItem("imenik"));
    if (spremljeniZapisi) {
      setZapisi(spremljeniZapisi);
    }
  }, []);

  useEffect(() => {
 
    localStorage.setItem("imenik", JSON.stringify(zapisi));
  }, [zapisi]);

  const dodajZapis = (noviZapis) => {
    setZapisi([...zapisi, noviZapis]);
  };

  const obrisiZapis = (index) => {
    const noviZapisi = [...zapisi];
    noviZapisi.splice(index, 1);
    setZapisi(noviZapisi);
  };

  return (
    <div>
      <h1>Imenik</h1>
      <UnosZapisa dodajZapis={dodajZapis} />
      <Lista zapisi={zapisi} obrisiZapis={obrisiZapis} />
    </div>
  );
}

export default Imenik;
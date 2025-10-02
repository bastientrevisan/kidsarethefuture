"use client";
import { useEffect, useState } from "react";
import CarteEvent from "../../components/CarteEvent";

export default function Evenements() {
  const [evenements, setEvenements] = useState([]);

  useEffect(() => {
    const fetchEvenements = async () => {
      const response = await fetch("/api/evenements");
      const data = await response.json();

      setEvenements(data);
    };

    fetchEvenements();
  }, []);

  return (
    <div className="grid lg:grid-cols-3 gap-8 m-8">
      {evenements.map((evenement) => (
        <div key={evenement._id} className="mb-5">
          <CarteEvent titre={evenement.titre} desc={evenement.description} img={evenement.image} date={evenement.date} />
        </div>
      ))}
    </div>
  );
};

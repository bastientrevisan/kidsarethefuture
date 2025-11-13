"use client";
import { useEffect, useState } from "react";
import CarteEvent from "../../components/CarteEvent";

export default function Evenements() {
  const [evenements, setEvenements] = useState([]);

  useEffect(() => {
    const fetchEvenements = async () => {
      const response = await fetch("/api/evenements");
      const data = await response.json();

      // Sort events: upcoming events first (nearest first), then past events
      const now = new Date();
      now.setHours(0, 0, 0, 0); // Reset to start of day for fair comparison
      
      const sortedData = [...data].sort((a, b) => {
        // Handle missing dates by putting them at the end
        if (!a.date) return 1;
        if (!b.date) return -1;
        
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        
        const isAUpcoming = dateA >= now;
        const isBUpcoming = dateB >= now;
        
        // Both upcoming or both past: sort by date (nearest first)
        if (isAUpcoming === isBUpcoming) {
          return dateA - dateB;
        }
        
        // Prioritize upcoming events
        return isAUpcoming ? -1 : 1;
      });

      setEvenements(sortedData);
    };

    fetchEvenements();
  }, []);

  return (
    <div className="grid lg:grid-cols-3 gap-8 m-8">
      {evenements.map((evenement) => (
        <CarteEvent key={evenement._id} titre={evenement.titre} desc={evenement.description} img={evenement.image} date={evenement.date} />
      ))}
    </div>
  );
};

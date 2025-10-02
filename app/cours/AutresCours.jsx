"use client";

import { useEffect, useState } from "react";
import CarteCours from "../../components/CarteCours";

export default function AutresCours(props) {
  const [allCours, setAllCours] = useState([]);

  useEffect(() => {
    const fetchCours = async () => {
      const response = await fetch(`/api/cours/${props.discipline}`);
      const data = await response.json();

      setAllCours(data);
    };

    fetchCours();
  }, []);

  return allCours.map((cours) => (
    <CarteCours key={cours._id} titre={cours.nom} age={cours.age} seances={cours.seances} tarif={cours.tarif} img={cours.img} notes={cours.notes} />
  ));
}

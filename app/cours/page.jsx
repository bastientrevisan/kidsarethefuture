"use client";
import { useEffect, useState } from "react";
import Breaking from "./Breaking";
import AutresCours from "./AutresCours";

export default function Cours() {
  const [disciplines, setDisciplines] = useState([]);

  useEffect(() => {
    const fetchDisciplines = async () => {
      const response = await fetch("/api/disciplines");
      const data = await response.json();

      setDisciplines(data);
    };

    fetchDisciplines();
  }, []);

  return (
    <div className='place-content-center gap-4 p-6'>
      <div className="justify-between flex">
        <h1 className='text-2xl text-bold text-center mb-5'>Nos cours</h1>
        <a className="btn btn-outline" href="/planning.pdf" download="planning_MTB_BBoying_School.pdf">Planning complet (PDF)</a>
      </div>

      <a target="_blank" rel="noopener noreferrer" className="my-10 w-full btn btn-xl btn-outline" href="https://www.helloasso.com/associations/kids-are-the-future/adhesions/inscriptions-cours-d-essais-septembre-2026">
        COURS D'ESSAI - SEPTEMBRE 2026
      </a>

      <div className="join join-vertical bg-neutral w-full">

        { disciplines.map((discipline) => (
        <div key={discipline._id} className="collapse collapse-arrow join-item border-base-300 border">
          { discipline.code == "breaking" ?
          (<input type="radio" name="AccordionCours" defaultChecked />) : (<input type="radio" name="AccordionCours" />)
          }
          <div className="collapse-title font-semibold">{discipline.nom}</div>
          <div className="collapse-content text-sm lg:flex gap-6">
            { discipline.code == "breaking" ?
            (<Breaking />)
            :
            (<AutresCours discipline={discipline.code} />)
            }
          </div>
        </div>
        ))}
      </div>

      <a target="_blank" rel="noopener noreferrer" className="my-10 w-full btn btn-xl btn-outline" href="https://www.helloasso.com/associations/kids-are-the-future#membership">INSCRIPTIONS</a>

      <div>
        <ul>
          * ATTENTION:
          <li>+ 20€ d'adhésion obligatoire sur tous les tarifs</li>
          <li>- 10% famille sur la cotisation.</li>
          <li>Tarif préférentiel pour les personnes habitant dans les quartiers prioritaires de la ville (Chambord-Chaumes-Monplaisir-Coeur de ville)
              Contactez-nous pour plus d'informations</li>
        </ul>
      </div>
    </div>
  );
};

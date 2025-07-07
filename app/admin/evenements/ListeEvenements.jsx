"use client";
import { useEffect, useState } from "react";
import EditEvenement from "./EditEvenement";
import SuppEvenement from "./SuppEvenement";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function ListeEvenements() {
  const { data: session } = useSession();
  // State pour afficher tous les evenements
  const [evenements, setEvenements] = useState([]);
  // State pour éditer un evenement
  const [selectedEvenement, setselectedEvenement] = useState({
    id: null,
    titre: '',
    ordre: '',
    description: '',
    date: '',
    image: ''
  });

  const fetchEvenements = async () => {
    const response = await fetch("/api/evenements");
    const data = await response.json();
    setEvenements(data);
  };

  useEffect(() => {
    fetchEvenements();
  }, []);

  if (!session) {
    // On est pas connectés
    redirect('/auth/signin')
  }

  return (
    <div className="w-full overflow-x-auto">
      <button
        className="my-5 w-full btn btn-l btn-outline"
        onClick={ () => {
          setselectedEvenement({
            id: null,
            titre: '',
            ordre: '',
            description: '',
            date: '',
            image: ''
          });
          document.getElementById('EcrireEvenement').showModal();
        }}

      >
        Nouvel événement
      </button>

      <dialog id="EcrireEvenement" className="modal">
        <EditEvenement
          id={selectedEvenement.id}
          titre={selectedEvenement.titre}
          ordre={selectedEvenement.ordre}
          description={selectedEvenement.description}
          date={selectedEvenement.date}
          image={selectedEvenement.image}
          onRubriqueSaved={fetchEvenements}
        />
      </dialog>

      <dialog id="SupprimerEvenement" className="modal">
        <SuppEvenement
          id={selectedEvenement.id}
          titre={selectedEvenement.titre}
          onRubriqueDeleted={fetchEvenements}
        />
      </dialog>

      <table className="table table-md bg-neutral mx-5 mb-5">
        {/* head */}
        <thead>
          <tr>
            <th>Titre</th>
            <th>Position</th>
            <th>{/* boutons modifier/supprimer */}</th>
          </tr>
        </thead>

        <tbody>
        { evenements.map((evenement) => (
          <tr key={evenement._id}>
            <td>{evenement.titre}</td>
            <td>{evenement.ordre}</td>
            <td className="flex">
              <button
                className="btn btn-ghost btn-xs"
                onClick={() => {
                  setselectedEvenement({
                    id: evenement._id,
                    titre: evenement.titre,
                    ordre: evenement.ordre,
                    description: evenement.description,
                    date: evenement.date,
                    image: evenement.image
                  });
                  document.getElementById('EcrireEvenement').showModal();
                }}
              >
                Modifier
              </button>
              <button
                className="btn btn-ghost btn-xs"
                onClick={() => {
                  setselectedEvenement({
                    id: evenement._id,
                    titre: evenement.titre,
                    ordre: evenement.ordre,
                    description: evenement.description,
                    date: evenement.date,
                    image: evenement.image
                  });
                  document.getElementById('SupprimerEvenement').showModal();
                }}
              >
                Supprimer
              </button>
            </td>
          </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
};

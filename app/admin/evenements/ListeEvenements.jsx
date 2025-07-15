"use client";
import { useEffect, useState } from "react";
import EditEvenement from "./EditEvenement";
import SuppEvenement from "./SuppEvenement";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Reorder } from "motion/react";

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

  const reorderEvenements = async(newList) => {
    var i = 1;

    newList.map((event) => {
      event.ordre = i;
      i++;
    });

    await fetch('/api/evenements/update-order', {
                method: 'POST',
                body: JSON.stringify({ events: newList }),
                headers: { 'Content-Type': 'application/json' },
              });

    setEvenements(newList);
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
            ordre: evenements.length + 1,
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
          onEvenementSaved={fetchEvenements}
        />
      </dialog>

      <dialog id="SupprimerEvenement" className="modal">
        <SuppEvenement
          id={selectedEvenement.id}
          titre={selectedEvenement.titre}
          onEvenementDeleted={fetchEvenements}
        />
      </dialog>

      <Reorder.Group
        axis="y"
        values={evenements}
        onReorder={reorderEvenements}
        className="list rounded-box"
      >
        {evenements.map((evenement) => (
          <Reorder.Item
            key={evenement._id}
            value={evenement}
            className="list-row"
          >
            <div className="text-4xl font-thin opacity-30 tabular-nums">{evenement.ordre}</div>
            <div className="text-xl ml-10">{evenement.titre}</div>

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
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
};

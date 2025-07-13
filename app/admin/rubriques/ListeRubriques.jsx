"use client";
import { useEffect, useState } from "react";
import EditRubrique from "./EditRubrique";
import SuppRubrique from "./SuppRubrique";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function ListeRubriques() {
  const { data: session } = useSession();
  // State pour afficher toutes les rubriques
  const [rubriques, setRubriques] = useState([]);
  // State pour éditer une rubrique
  const [selectedRubrique, setselectedRubrique] = useState({
    id: null,
    titre: '',
    ordre: '',
    img: '',
    contenu: ''
  });

  const fetchRubriques = async () => {
    const response = await fetch("/api/rubriques");
    const data = await response.json();
    setRubriques(data);
  };

  useEffect(() => {
    fetchRubriques();
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
          setselectedRubrique({
            id: null,
            titre: '',
            ordre: '',
            img: '',
            contenu: ''
          });
          document.getElementById('EcrireRubrique').showModal();
        }}

      >
        Nouvelle rubrique
      </button>

      <dialog id="EcrireRubrique" className="modal">
        <EditRubrique
          id={selectedRubrique.id}
          titre={selectedRubrique.titre}
          ordre={selectedRubrique.ordre}
          img={selectedRubrique.img}
          contenu={selectedRubrique.contenu}
          onRubriqueSaved={fetchRubriques}
        />
      </dialog>

      <dialog id="SupprimerRubrique" className="modal">
        <SuppRubrique
          id={selectedRubrique.id}
          titre={selectedRubrique.titre}
          onRubriqueDeleted={fetchRubriques}
        />
      </dialog>

      <table className="table table-md bg-neutral mx-5 mb-5">
        {/* head */}
        <thead>
          <tr>
            <th>Titre</th>
            <th>Ordre</th>
            <th>{/* boutons modifier/supprimer */}</th>
          </tr>
        </thead>

        <tbody>
        { rubriques.map((rubrique) => (
          <tr key={rubrique._id}>
            <td>{rubrique.titre}</td>
            <td>{rubrique.ordre}</td>
            <td className="flex">
              <button
                className="btn btn-ghost btn-xs"
                onClick={() => {
                  setselectedRubrique({
                    id: rubrique._id,
                    titre: rubrique.titre,
                    ordre: rubrique.ordre,
                    img: rubrique.image,
                    contenu: rubrique.contenu
                  });
                  document.getElementById('EcrireRubrique').showModal();
                }}
              >
                Modifier
              </button>
              <button
                className="btn btn-ghost btn-xs"
                onClick={() => {
                  setselectedRubrique({
                    id: rubrique._id,
                    titre: rubrique.titre,
                    ordre: rubrique.ordre,
                    img: rubrique.image,
                    contenu: rubrique.contenu
                  });
                  document.getElementById('SupprimerRubrique').showModal();
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

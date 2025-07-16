"use client";
import { useEffect, useState } from "react";
import EditRubrique from "./EditRubrique";
import SuppRubrique from "./SuppRubrique";
import { Reorder } from "motion/react";

export default function ListeRubriques() {
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

  const reorderRubriques = async(newList) => {
    var i = 1;

    newList.map((rubrique) => {
      rubrique.ordre = i;
      i++;
    });

    await fetch('/api/rubriques/update-order', {
                method: 'POST',
                body: JSON.stringify({ rubriques: newList }),
                headers: { 'Content-Type': 'application/json' },
              });

    setRubriques(newList);
  };

  useEffect(() => {
    fetchRubriques();
  }, []);

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

      <Reorder.Group
        axis="y"
        values={rubriques}
        onReorder={reorderRubriques}
        className="list rounded-box"
      >
        {rubriques.map((rubrique) => (
          <Reorder.Item
            key={rubrique._id}
            value={rubrique}
            className="list-row"
          >
            <div className="text-4xl font-thin opacity-30 tabular-nums">{rubrique.ordre}</div>
            <div className="text-xl ml-10">{rubrique.titre}</div>

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
          </Reorder.Item>
          ))
        }
      </Reorder.Group>
    </div>
  );
};

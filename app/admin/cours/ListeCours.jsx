

// "_id": {
//     "$oid": "684882e9f5236eaeb4a3c2c9"
//   },
//   "nom": "Baby-break",
//   "discipline": "breaking",
//   "niveau": "Débutant",
//   "lieu" : " olnvron"
//   "age": "4-5 ans",
//   "tarif": 200,
//   "seances": [
//     {
//       "jour": "jeudi",
//       "hDeb": "17h",
//       "hFin": "17h45"
//     }
//   ],
//   "img" : "logoMTBBS.jpg",
//   "notes" : [
//     "note 1", "note2"
//   ]
//

"use client";
import { useEffect, useState } from "react";
import EditCours from "./EditCours";

export default function ListeCours() {
  // State pour afficher tous les cours
  const [allCours, setAllCours] = useState([]);
  // State pour éditer un cours
  const [selectedCours, setselectedCours] = useState(0);

  const fetchAllCours = async () => {
    const response = await fetch("/api/cours");
    const data = await response.json();
    setAllCours(data);
  };

  useEffect(() => {
    fetchAllCours();
  }, []);

  return (
    <div className="w-full overflow-x-auto">
      <dialog id="EcrireCours" className="modal">
        <EditCours
          id={selectedCours}
          onArticleSaved={fetchAllCours}
        />
      </dialog>

      <table className="table table-md bg-neutral mx-5 mb-5">
        {/* head */}
        <thead>
          <tr>
            <th>Nom</th>
            <th>Niveau</th>
            <th>Age</th>
            <th>{/* boutons modifier/supprimer */}</th>
          </tr>
        </thead>

        <tbody>
        {allCours.map((cours) => (
          <tr key={cours._id}>
            <td>{cours.nom}</td>
            <td>{cours.niveau}</td>
            <td>{cours.age}</td>
            <td className="flex">
              <button
                className="btn btn-ghost btn-xs"
                onClick={() => {
                  setselectedCours(cours._id);
                  document.getElementById('EcrireCours').showModal();
                }}
              >
                Modifier
              </button>
              <button
                className="btn btn-ghost btn-xs"
                onClick={() => {
                  // setselectedArticle({
                  //   id: article._id,
                  //   titre: article.titre,
                  //   auteur: article.auteur,
                  //   contenu: article.contenu,
                  //   lien: article.lien,
                  //   img: article.img
                  // });
                  // document.getElementById('SupprimerArticle').showModal();
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

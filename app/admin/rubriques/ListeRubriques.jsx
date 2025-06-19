"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function AdminRubriques() {
  const { data: session } = useSession();
  // State pour afficher toutes les rubriques
  const [rubriques, setRubriques] = useState([]);

  useEffect(() => {
    const fetchRubriques = async () => {
      const response = await fetch("/api/rubriques");
      const data = await response.json();
      setRubriques(data);
    };

    fetchRubriques();
  }, []);

  if (!session) {
    // On est pas connectés
    redirect('/auth/signin')
  }

  return (
    <div className="w-full overflow-x-auto">
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
        { rubriques.map((rubrique) => (
          <tr key={rubrique._id}>
            <td>{rubrique.titre}</td>
            <td>{rubrique.ordre}</td>
            <td className="flex">
              <button
                className="btn btn-ghost btn-xs"
              >
                Modifier
              </button>
              <button
                className="btn btn-ghost btn-xs"
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

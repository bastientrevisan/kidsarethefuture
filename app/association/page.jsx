"use client";
import { renderContentWithLinks } from "@/libs/utils";
import { useEffect, useState } from "react";

export default function Association() {
  const [rubriques, setRubriques] = useState([]);

  useEffect(() => {
    const fetchRubriques = async () => {
      const response = await fetch("/api/rubriques");
      const data = await response.json();

      setRubriques(data);
    };

    fetchRubriques();
  }, []);

  return (
    <div className="p-6">
      { rubriques.map((rubrique) => (
        <div key={rubrique._id} className="mb-5">
          <div className="card lg:card-side bg-neutral shadow-sm mb-8">

            {/* Ordre impair: image a gauche */}
            { rubrique.ordre % 2 != 0 ? (
              <figure className="card-img lg:max-w-1/2">
                <img
                  src={rubrique.image}
                  alt={rubrique.titre} />
              </figure>
            ) : null}

            <div className="card-body lg:max-w-1/2">
              <h2 className="card-title">{rubrique.titre}</h2>
              <div className="whitespace-pre-line text-justify">{renderContentWithLinks(rubrique.contenu)}</div>
            </div>

            {/* Ordre pair: image a droite */}
            { rubrique.ordre % 2 == 0 ? (
              <figure className="card-img lg:max-w-1/2">
                <img
                  src={rubrique.image}
                  alt={rubrique.titre} />
              </figure>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

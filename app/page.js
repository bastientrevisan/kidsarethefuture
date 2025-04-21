"use client";
import { useEffect, useState } from "react";

export default function Home() {
  try {
    const [latest, setLatest] = useState([]);

    useEffect(() => {
      const fetchlatestArticle = async () => {
        const response = await fetch("/api/articles/latest");
        const data = await response.json();
        setLatest(data);
      };

      fetchlatestArticle();
    }, []);

    const article = latest[0] || null;

    return (
      <div className="m-8 flex">
        <div className="m-8">
          <h1 className="text-xl font-bold">Dernier article</h1>
          {article ? (
            <div key={article._id} className="card bg-neutral shadow-sm">
              <div className="card-body">
                <h2 className="card-title">{article.titre}</h2>
                <p>{article.contenu}</p>
              </div>
            </div>
          ) : (
            <p>Aucun article trouvé</p>
          )}
        </div>

        <div className="m-8 w-250">
          <h1 className="text-xl font-bold">Actu reseaux</h1>
          <div className="card bg-neutral shadow-sm">
            <div className="card-body">
              <h2 className="card-title"></h2>
              <p>Integration post insta / facebook</p>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching latest article:", error);
    return (
      <div className="m-8">
        <h1 className="text-xl font-bold">Erreur</h1>
        <p>Une erreur est survenue lors du chargement des articles.</p>
      </div>
    );
  }
}
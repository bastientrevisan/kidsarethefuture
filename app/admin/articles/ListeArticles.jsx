"use client";
import { useEffect, useState } from "react";
import EditArticle from "./EditArticle";
import SuppArticle from "./SuppArticle";

export default function ListeArticles() {
  // State pour afficher tous les articles
  const [articles, setArticles] = useState([]);
  // State pour éditer un article
  const [selectedArticle, setselectedArticle] = useState({
    id: null,
    titre: '',
    auteur: '',
    contenu: '',
    lien: '',
    img: ''
  });

  const fetchArticles = async () => {
    const response = await fetch("/api/articles");
    const data = await response.json();
    setArticles(data);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="w-full overflow-x-auto">
      <button
        className="my-5 w-full btn btn-l btn-outline"
        onClick={ () => {
          setselectedArticle({
            id: null,
            titre: '',
            auteur: '',
            contenu: '',
            lien: '',
            img: ''
          });
          document.getElementById('EcrireArticle').showModal();
        }}

      >
        Écrire un article
      </button>

      <dialog id="EcrireArticle" className="modal">
        <EditArticle
          id={selectedArticle.id}
          titre={selectedArticle.titre}
          auteur={selectedArticle.auteur}
          contenu={selectedArticle.contenu}
          lien={selectedArticle.lien}
          img={selectedArticle.img}
          onArticleSaved={fetchArticles}
        />
      </dialog>

      <dialog id="SupprimerArticle" className="modal">
        <SuppArticle
          id={selectedArticle.id}
          titre={selectedArticle.titre}
          onArticleDeleted={fetchArticles}
        />
      </dialog>

      <table className="table table-md bg-neutral mx-5 mb-5">
        {/* head */}
        <thead>
          <tr>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Date</th>
            <th>{/* boutons modifier/supprimer */}</th>
          </tr>
        </thead>

        <tbody>
        { articles.map((article) => (
          <tr key={article._id}>
            <td>{article.titre}</td>
            <td>{article.auteur}</td>
            <td>{article.date}</td>
            <td className="flex">
              <button
                className="btn btn-ghost btn-xs"
                onClick={ () => {
                  setselectedArticle({
                    id: article._id,
                    titre: article.titre,
                    auteur: article.auteur,
                    contenu: article.contenu,
                    lien: article.lien,
                    img: article.img
                  });
                  document.getElementById('EcrireArticle').showModal();
                }}
              >
                Modifier
              </button>
              <button
                className="btn btn-ghost btn-xs"
                onClick={ () => {
                  setselectedArticle({
                    id: article._id,
                    titre: article.titre,
                    auteur: article.auteur,
                    contenu: article.contenu,
                    lien: article.lien,
                    img: article.img
                  });
                  document.getElementById('SupprimerArticle').showModal();
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

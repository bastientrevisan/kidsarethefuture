"use client";
import { useEffect, useState } from "react";
import EditArticle from "./EditArticle";

export default function Admin() { 
  // State pour afficher tous les articles
  const [articles, setArticles] = useState([]);
  // State pour éditer un article
  const [editingArticle, setEditingArticle] = useState({
    id: null,
    titre: '',
    auteur: '',
    contenu: ''
  });
  
  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch("/api/articles");
      const data = await response.json();
      setArticles(data);
    };

    fetchArticles();
  }, []);

  return (
    <div className="overflow-x-auto">
      <h1 className="text-xl font-bold mx-5">Administration</h1>
      <button 
        className="btn btn-ghost btn-l mx-5"
        onClick={ () => {
          setEditingArticle({
            id: null,
            titre: '',
            auteur: '',
            contenu: ''
          });
          document.getElementById('EcrireArticle').showModal(); 
        }}

      >
        Écrire un article
      </button>

      <dialog id="EcrireArticle" className="modal">
        <EditArticle 
          id={editingArticle.id}
          titre={editingArticle.titre}
          auteur={editingArticle.auteur}
          contenu={editingArticle.contenu}
        />
      </dialog>

      <table className="table bg-neutral mx-5 mb-5">
        {/* head */}
        <thead>
          <tr>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
        { articles.map((article) => (
          <tr key={article._id}>
            <td>{article.titre}</td>
            <td>{article.auteur}</td>
            <td>{article.date}</td>
            <th className="flex">
              <button 
                className="btn btn-ghost btn-xs"
                onClick={ () => {
                  setEditingArticle({
                    id: article._id,
                    titre: article.titre,
                    auteur: article.auteur,
                    contenu: article.contenu
                  });
                  document.getElementById('EcrireArticle').showModal(); 
                }}
              >
                Modifier
              </button>
              <button className="btn btn-ghost btn-xs">Supprimer</button>
            </th>
          </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
};
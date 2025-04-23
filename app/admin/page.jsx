"use client";
import { useEffect, useState } from "react";
import EditArticle from "./EditArticle";

export default function Admin() { 
  // States pour afficher tous les articles
  const [articles, setArticles] = useState([]);
  // States pour éditer un article
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleOpenModal = (article = null) => {
    if (article) {
      setEditingArticle({
        id: article._id,
        titre: article.titre,
        auteur: article.auteur,
        contenu: article.contenu
      });
    } else {
      setEditingArticle({
        id: null,
        titre: '',
        auteur: '',
        contenu: ''
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="overflow-x-auto">
      <h1 className="text-xl font-bold mx-5">Administration</h1>
      <button 
        className="btn btn-ghost btn-l mx-5" 
        onClick={() => handleOpenModal()}
      >
        Écrire un article
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg relative">
          <button
            onClick={handleCloseModal}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <EditArticle 
            id={editingArticle.id}
            titre={editingArticle.titre}
            auteur={editingArticle.auteur}
            contenu={editingArticle.contenu}
            onClose={handleCloseModal}
          />
        </div>
      </div>
      )}

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
                onClick={() => handleOpenModal(article)}
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
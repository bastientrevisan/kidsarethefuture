"use client";
import { useEffect, useState } from "react";

export default function Admin() { 
  const [articles, setArticles] = useState([]);
  
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
      <button className="btn btn-ghost btn-l mx-5">Nouvel article</button>
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
        { articles.map((article, key) => (
          <tr key={article._id}>
            <td>{article.titre}</td>
            <td>{article.auteur}</td>
            <td>{article.date}</td>
            <th className="flex">
              <button className="btn btn-ghost btn-xs">Modifier</button>
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
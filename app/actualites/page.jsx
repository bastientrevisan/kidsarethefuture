"use client";
import { useEffect, useState } from "react";

export default function Actualites() { 
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
    <div>
      { articles.map((article) => (
        <div key={article._id} className="card bg-neutral shadow-sm m-8">
          <div className="card-body">
            <h2 className="card-title">{article.titre}</h2>
            <p>{article.contenu}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
"use client";
import { useEffect, useState } from "react";
import CarteArticle from "@/components/CarteArticle";

export default function Actualites() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch("/api/articles");
      const data = await response.json();
      console.log(data)
      setArticles(data);
    };

    fetchArticles();
  }, []);

  return (
    <div className="p-6">
      { articles.map((article) => (
        <div key={article._id} className="mb-5">
          <CarteArticle id={article._id} titre={article.titre} contenu={article.contenu} lien={article.lien} imgs={article.imgs}/>
        </div>
      ))}
    </div>
  );
};

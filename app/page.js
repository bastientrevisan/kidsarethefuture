"use client";
import { useEffect, useState } from "react";
import CarteEvent from "../components/CarteEvent";
import CarteArticle from "../components/CarteArticle";

export default function Home() {
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    const fetchlatestArticle = async () => {
      const response = await fetch("/api/articles/latest");
      const data = await response.json();
      setLatest(data);
    };

    fetchlatestArticle();
  }, []);

  const article1 = latest[0] || null;
  const article2 = latest[1] || null;

  return (
    <div className="w-full lg:flex">
      <div className="max-w-3/5 m-5">
        <h1 className="text-xl font-bold mb-5">Derniers articles</h1>
        {article1 ? (
        <div className="mb-5">
          <CarteArticle titre={article1.titre} contenu={article1.contenu} lien={article1.lien} img={article1.img}/>
        </div>
        ) : (
          <p>Aucun article trouvé</p>
        )}

        {article2 ? (
        <div className="mb-5">
          <CarteArticle titre={article2.titre} contenu={article2.contenu} lien={article2.lien} img={article2.img}/>
        </div>
        ) : (
          <p>Aucun article trouvé</p>
        )}
      </div>

      <div className="m-5">
        <h1 className="text-xl font-bold mb-5">Prochain événement</h1>
        <CarteEvent titre="Montauban en scène" desc="La team élite se produira lors du festival Montauban en scène le 19, 21 et 22 Juin, avant les concerts." img="MtbScene.jpg" date="19, 21, 22 juin 2025"/>
      </div>
    </div>
  );
}

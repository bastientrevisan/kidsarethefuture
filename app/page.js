"use client";
import { useEffect, useState } from "react";
import CarteEvent from "../components/CarteEvent";
import CarteArticle from "../components/CarteArticle";

export default function Home() {
  const [latest, setLatest] = useState([]);
  const [nextEvent, setNextEvent] = useState(null);

  useEffect(() => {
    const fetchlatestArticle = async () => {
      const response = await fetch("/api/articles/latest");
      const data = await response.json();
      setLatest(data);
    };

    const fetchNextEvent = async () => {
      const response = await fetch("/api/evenements/next");
      const data = await response.json();
      setNextEvent(data);
    };

    fetchlatestArticle();
    fetchNextEvent();
  }, []);

  const article1 = latest[0] || null;
  const article2 = latest[1] || null;

  return (
    <div className="w-full lg:flex">
      <div className="max-w-3/5 m-5">
        <h1 className="text-xl font-bold mb-5">Derniers articles</h1>
        {article1 ? (
        <div className="mb-5">
            <CarteArticle id={article1._id} titre={article1.titre} contenu={article1.contenu} lien={article1.lien} imgs={article1.imgs}/>
        </div>
        ) : (
          <p>Aucun article trouvé</p>
        )}

        {article2 ? (
        <div className="mb-5">
          <CarteArticle id={article2._id} titre={article2.titre} contenu={article2.contenu} lien={article2.lien} imgs={article2.imgs}/>
        </div>
        ) : (
          <p>Aucun article trouvé</p>
        )}
      </div>

      <div className="m-5">
        <h1 className="text-xl font-bold mb-5">Prochain événement</h1>
        {nextEvent ? (
          <CarteEvent titre={nextEvent.titre} desc={nextEvent.description} img={nextEvent.image} date={nextEvent.date}/>
        ) : (
          <p>Aucun événement à venir</p>
        )}
      </div>
    </div>
  );
}

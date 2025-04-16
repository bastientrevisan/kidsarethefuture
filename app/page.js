
import articles from "./mockdata/Articles.json";

export default function Home() {
  const latest = articles[articles.length - 1];

  return (
    <div className="m-8 flex">
      <div className="m-8">
        <h1 className="text-xl font-bold">Dernier article</h1>
        <div className="card bg-neutral shadow-sm">
          <div className="card-body">
            <h2 className="card-title">{latest.article_title}</h2>
            <p>{latest.content}</p>
          </div>
        </div>
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
}
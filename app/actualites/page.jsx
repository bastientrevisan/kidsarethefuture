import articles from "../mockdata/Articles.json";

const Actualites = () => (
  <div>
    { articles.map((article, idx) => (
      <div key={idx} className="card bg-neutral shadow-sm m-8">
        <div className="card-body">
          <h2 className="card-title">{article.article_title}</h2>
          <p>{article.content}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Actualites;
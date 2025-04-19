import clientPromise from "@/libs/mongodb";

export default async function Actualites() { 

  const articles = await clientPromise.db("kidsarethefuture").collection("articles").find({}).toArray();

  return (
    <div>
      { articles.map((article, idx) => (
        <div key={idx} className="card bg-neutral shadow-sm m-8">
          <div className="card-body">
            <h2 className="card-title">{article.titre}</h2>
            <p>{article.contenu}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
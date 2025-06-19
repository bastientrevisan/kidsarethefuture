import clientPromise from "@/libs/mongodb";
import { ObjectId } from "mongodb";


// Retrouve la liste de tous les articles de la base de donnees
export async function GET() {
  const articles = await clientPromise.db("kidsarethefuture").collection("articles")
    .find({})
    .sort({ _id: -1 }) // Tri par plus recent
    .toArray();
  return Response.json(articles);
}

// Ajoute un article dans la base de donnees
export async function POST(req) {
  const { titre, auteur, contenu, lien, img } = await req.json();
  const result = await clientPromise.db("kidsarethefuture").collection("articles").insertOne({ titre, auteur, createdAt: new Date(), contenu, lien, img });
  return Response.json({ message: "Article ajouté", id: result.insertedId });
}

// Met a jour un article dans la base de donnees
export async function PUT(req) {
  const { id, titre, auteur, contenu, lien, img } = await req.json();
  await clientPromise.db("kidsarethefuture").collection("articles").updateOne(
    { _id: new ObjectId(id) },
    { $set: { titre, auteur, contenu, lien, img } }
  );
  return Response.json({ message: "Article mis à jour" });
}

// Supprime un article de la base de donnees
export async function DELETE(req) {
  const { id } = await req.json();
  await clientPromise.db("kidsarethefuture").collection("articles").deleteOne({ _id: new ObjectId(id) });
  return Response.json({ message: "Article supprimé" });
}

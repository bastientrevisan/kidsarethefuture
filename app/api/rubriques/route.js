import clientPromise from "@/libs/mongodb";
import { ObjectId } from "mongodb";


// Retrouve la liste de toutes les rubriques de la base de donnees
export async function GET() {
  const rubriques = await clientPromise.db("kidsarethefuture").collection("rubriques")
    .find({})
    .sort({ ordre: 1 }) // Tri par plus recent
    .toArray();

  return Response.json(rubriques);
}

// Ajoute une rubrique dans la base de donnees
export async function POST(req) {
  const { titre, ordre, img, contenu } = await req.json();
  const result = await clientPromise.db("kidsarethefuture").collection("rubriques").insertOne({ titre, ordre, img, contenu });
  return Response.json({ message: "Rubrique ajoutée", id: result.insertedId });
}

// Met a jour une rubrique dans la base de donnees
export async function PUT(req) {
  const { id, titre, ordre, img, contenu } = await req.json();
  await clientPromise.db("kidsarethefuture").collection("rubriques").updateOne(
    { _id: new ObjectId(id) },
    { $set: { titre, ordre, img, contenu } }
  );
  return Response.json({ message: "Rubrique mise à jour" });
}

// Supprime une rubrique de la base de donnees
export async function DELETE(req) {
  const { id } = await req.json();
  await clientPromise.db("kidsarethefuture").collection("rubriques").deleteOne({ _id: new ObjectId(id) });
  return Response.json({ message: "Rubrique supprimée" });
}

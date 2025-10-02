import clientPromise from "@/libs/mongodb";
import { ObjectId } from "mongodb";


// Retrouve la liste de toutes les evenements de la base de donnees
export async function GET() {
  const evenements = await clientPromise.db("kidsarethefuture").collection("evenements")
    .find({})
    .sort({ ordre: 1 }) // Tri par plus recent
    .toArray();

  return Response.json(evenements);
}

// Ajoute un evenement dans la base de donnees
export async function POST(req) {
  const { titre, ordre, description, date, image } = await req.json();
  const result = await clientPromise.db("kidsarethefuture").collection("evenements").insertOne({ titre, ordre, description, date, image });
  return Response.json({ message: "Événement ajouté", id: result.insertedId });
}

// Met a jour un evenement dans la base de donnees
export async function PUT(req) {
  const { id, titre, ordre, description, date, image } = await req.json();
  await clientPromise.db("kidsarethefuture").collection("evenements").updateOne(
    { _id: new ObjectId(id) },
    { $set: { titre, ordre, description, date, image } }
  );
  return Response.json({ message: "Événement mis à jour" });
}

// Supprime un evenement de la base de donnees
export async function DELETE(req) {
  const { id } = await req.json();
  await clientPromise.db("kidsarethefuture").collection("evenements").deleteOne({ _id: new ObjectId(id) });
  return Response.json({ message: "Événement supprimé" });
}

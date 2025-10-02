import clientPromise from "@/libs/mongodb";
// import { ObjectId } from "mongodb";


// Retrouve la liste de tous les disciplines de la base de donnees
export async function GET() {
  const disciplines = await clientPromise.db("kidsarethefuture").collection("disciplines")
    .find({})
    .sort({ _id: 1 }) // Tri par plus recent
    .toArray();
  return Response.json(disciplines);
}

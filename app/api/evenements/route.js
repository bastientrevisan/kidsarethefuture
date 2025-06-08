import clientPromise from "@/libs/mongodb";
// import { ObjectId } from "mongodb";


// Retrouve la liste de toutes les evenements de la base de donnees
export async function GET() {
  const rubriques = await clientPromise.db("kidsarethefuture").collection("evenements")
    .find({})
    .sort({ ordre: 1 }) // Tri par plus recent
    .toArray();

  return Response.json(rubriques);
}

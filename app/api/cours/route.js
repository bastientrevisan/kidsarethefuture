import clientPromise from "@/libs/mongodb";
import { ObjectId } from "mongodb";


// Retrouve la liste de tous les cours de la base de donnees
export async function GET() {
  const allCours = await clientPromise.db("kidsarethefuture").collection("cours")
    .find({})
    .toArray();
  return Response.json(allCours);
}

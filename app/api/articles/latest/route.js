import clientPromise from "@/libs/mongodb";


// Retrouve uniquement l'article le plus récent de la base de donnees
export async function GET() {
    const latest = await clientPromise.db("kidsarethefuture").collection("articles")
      .find({})
      .sort({ _id: -1 }) // Tri par plus recent
      .limit(2)
      .toArray();

    return Response.json(latest);
}

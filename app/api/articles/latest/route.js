import clientPromise from "@/libs/mongodb";


// Retrouve uniquement l'article le plus récent de la base de donnees
export async function GET() {
    const latest = await clientPromise.db("kidsarethefuture").collection("articles")
      .find({})
      .sort({ date: -1 }) // Tri par date plus recente
      .limit(1)
      .toArray();
    
    return Response.json(latest);
}
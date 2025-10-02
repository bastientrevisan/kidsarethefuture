import clientPromise from "@/libs/mongodb";


// Retrouve uniquement les cours filtres par la bonne discipline de la base de donnees
export async function GET(request, { params }) {
    const { discipline } = await params;
    const cours = await clientPromise.db("kidsarethefuture").collection("cours")
      .find({ discipline: discipline })
      .sort({ _id: -1 }) // Tri par plus recent
      .toArray();

    return Response.json(cours);
}

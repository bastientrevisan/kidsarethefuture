import clientPromise from "@/libs/mongodb";
import { ObjectId } from "mongodb";

// Mets a jour l'ordre des evenements dans la base
export async function POST(req) {
  try {
    const { rubriques } = await req.json();
    if (!Array.isArray(rubriques)) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    // Prepare bulk operations
    const bulkOps = rubriques.map(rubrique => ({
      updateOne: {
        filter: { _id: new ObjectId(rubrique._id) },
        update: { $set: { ordre: rubrique.ordre } }
      }
    }));

    const result = await clientPromise.db("kidsarethefuture").collection("rubriques").bulkWrite(bulkOps);
    return Response.json({ message: "Ordre mis à jour" });
  }
  catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

import clientPromise from "@/libs/mongodb";
import { ObjectId } from "mongodb";

// Mets a jour l'ordre des evenements dans la base
export async function POST(req) {
  try {
    const { events } = await req.json();
    if (!Array.isArray(events)) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    // Prepare bulk operations
    const bulkOps = events.map(event => ({
      updateOne: {
        filter: { _id: new ObjectId(event._id) },
        update: { $set: { ordre: event.ordre } }
      }
    }));

    const result = await clientPromise.db("kidsarethefuture").collection("evenements").bulkWrite(bulkOps);
    return Response.json({ message: "Ordre mis à jour" });
  }
  catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

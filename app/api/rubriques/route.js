import clientPromise from "@/libs/mongodb";
// import { ObjectId } from "mongodb";


// Retrouve la liste de toutes les rubriques de la base de donnees
export async function GET() {
  const rubriques = await clientPromise.db("kidsarethefuture").collection("rubriques")
    .find({})
    .sort({ ordre: 1 }) // Tri par plus recent
    .toArray();

  // Convertit les images binaires en URL base64
  const rubriquesWithImages = rubriques.map(rubrique => {
    if (rubrique.image && rubrique.image.buffer) {
      const base64 = Buffer.from(rubrique.image.buffer).toString('base64');
      const mimeType = rubrique.imageType || 'image/jpeg';
      rubrique.image = `data:${mimeType};base64,${base64}`;
    }
    return rubrique;
  });

  return Response.json(rubriquesWithImages);
}

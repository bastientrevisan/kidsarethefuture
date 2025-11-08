import clientPromise from "@/libs/mongodb";

// Retrouve le prochain événement basé sur la date du jour
export async function GET() {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset to start of day for comparison
  
  const nextEvent = await clientPromise.db("kidsarethefuture").collection("evenements")
    .find({ date: { $gte: today.toISOString().split('T')[0] } }) // Find events with date >= today
    .sort({ date: 1 }) // Sort by date ascending (earliest first)
    .limit(1)
    .toArray();

  if (nextEvent.length > 0) {
    return Response.json(nextEvent[0]);
  }
  
  return Response.json(null);
}

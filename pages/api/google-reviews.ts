import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { placeId } = req.query;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!placeId || typeof placeId !== "string" || !apiKey) {
    return res.status(400).json({ error: "Missing placeId or API key" });
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(
      placeId
    )}&fields=reviews&reviews_no_translations=true&key=${apiKey}`;
    const r = await fetch(url);
    const data = await r.json();

    if (!r.ok || data.status !== "OK") {
      console.error("Google Places error:", data.status, data.error_message);
      return res
        .status(500)
        .json({ error: "Google Places error", details: data });
    }

    const reviews = data.result.reviews || [];
    return res.status(200).json({ reviews });
  } catch (e) {
    console.error("Fetch error:", e);
    return res.status(500).json({ error: "Fetch failed" });
  }
}

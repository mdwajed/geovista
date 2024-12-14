import { getLocations } from "@/utils/locations";
import { NextResponse } from "next/server";

export async function GET() {
  const locationData = getLocations();
  return NextResponse.json(locationData);
}

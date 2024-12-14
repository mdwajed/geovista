import { getLocationByName } from "@/utils/locations";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const locationData = getLocationByName(params?.name);
  return NextResponse.json(locationData);
}

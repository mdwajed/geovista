import NoLocationFound from "@/components/NoLocationFound";
import Wind from "@/components/Wind";
import { getResolvedLatLon } from "@/utils/LocationInfo";
import React from "react";

const WindPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolvedLatLon(location, latitude, longitude);
  if (resolved?.lat && resolved?.lon) {
    return <Wind lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationFound location={location} />;
  }
};

export default WindPage;

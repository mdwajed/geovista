import LocationInfo from "@/components/LocationInfo";
import NoLocationFound from "@/components/NoLocationFound";
import { getResolvedLatLon } from "@/utils/LocationInfo";

const LocationPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolvedLatLon(location, latitude, longitude);
  if (resolved?.lat && resolved?.lon) {
    return <LocationInfo lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationFound location={location} />;
  }
};

export default LocationPage;

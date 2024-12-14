import NoLocationFound from "@/components/NoLocationFound";
import Temperature from "@/components/Temperature";
import { getResolvedLatLon } from "@/utils/LocationInfo";

const TemperaturePage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolvedLatLon(location, latitude, longitude);
  if (resolved?.lat && resolved?.lon) {
    return <Temperature lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationFound location={location} />;
  }
};

export default TemperaturePage;

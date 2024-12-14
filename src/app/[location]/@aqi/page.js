import AqiComponent from "@/components/AqiComponent";
import NoLocationFound from "@/components/NoLocationFound";
import { getResolvedLatLon } from "@/utils/LocationInfo";

const AqiPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolvedLatLon(location, latitude, longitude);
  if (resolved?.lat && resolved?.lon) {
    return <AqiComponent lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationFound location={location} />;
  }
};

export default AqiPage;

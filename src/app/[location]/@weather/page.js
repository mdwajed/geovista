import NoLocationFound from "@/components/NoLocationFound";
import Weather from "@/components/Weather";
import { getResolvedLatLon } from "@/utils/LocationInfo";

const WeatherPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolvedLatLon(location, latitude, longitude);
  if (resolved?.lat && resolved?.lon) {
    return <Weather lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationFound location={location} />;
  }
};

export default WeatherPage;

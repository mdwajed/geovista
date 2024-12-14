export const getLocationData = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api-bdc.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};
export const getLocationList = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/location`);
    const data = await response.json();
    console.log("locationdata", data);
    return data;
  } catch (e) {
    console.error(e.message);
  }
};
export const getLocationLatLon = async (locationName) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/location/${locationName}`
    );
    const data = await response.json();
    console.log("data", data);
    return data;
  } catch (e) {
    console.error(e.message);
  }
};

export const getResolvedLatLon = async (location, lat, lon) => {
  if (lat & lon) {
    return { lat, lon };
  }
  console.log("locationlat:", lat, lon);
  const locationLatLon = await getLocationLatLon(location);
  console.log("location:", locationLatLon);
  if (locationLatLon.latitude && locationLatLon.longitude) {
    const lat = locationLatLon.latitude;
    const lon = locationLatLon.longitude;
    return { lat, lon };
  }
};

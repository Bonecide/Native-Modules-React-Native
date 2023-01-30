const API = "AIzaSyBch6pFINYhG9LQ0wGcDiX8ArW1bZVAR6Y";

export const getMapPreview = ( lat, lng ) => {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=12&size=400x200&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${API}`;
  return imagePreviewUrl
};

export const getAddress = async (lat,lng) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch address!');
  }
  const data = await response.json();
  const address = data.results[0].formatted_address;
  return address;
}
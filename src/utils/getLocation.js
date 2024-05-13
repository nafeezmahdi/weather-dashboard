const getAddressFromLatLng = async (latitude, longitude) => {
  var address;
  // Constructing the Google Maps Geocoding API URL
  var geocodingAPIUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${
    import.meta.env.VITE_WEATHER_API_KEY
  }`;

  // Making a GET request to the Google Maps Geocoding API
  await fetch(geocodingAPIUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "OK") {
        // Parsing the address from the response
        address = data.results[0].formatted_address;
        console.log("Address:", address);
      } else {
        console.error(
          "Geocode was not successful for the following reason:",
          data.status
        );
      }
    })
    .catch((error) => {
      console.error("Error fetching geocoding data:", error);
    });

  return address;
};
export { getAddressFromLatLng };
// Example usage
// var latitude = 40.7128; // Example latitude
// var longitude = -74.0060; // Example longitude
// getAddressFromLatLng(latitude, longitude);

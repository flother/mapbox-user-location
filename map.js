// A simple test of the support for user-tracking in Mapbox GL JS v1.13.1. View
// the demo at https://flother.github.io/mapbox-user-location/.
//
// https://docs.mapbox.com/mapbox-gl-js/api/
// https://docs.mapbox.com/mapbox-gl-js/api/markers/#geolocatecontrol

// This access token is limited to flother.github.io. Change it to use your own.
//
// https://account.mapbox.com/access-tokens/
mapboxgl.accessToken = "pk.eyJ1IjoiZmxvdGhlciIsImEiOiJja25hcm85a3owcWlkMnBsYzJjd202cDE1In0.HuXg98Rjdh2KmSsReyqR8w";

// Add a map to the web page. Its rendered in the <div> element with the id "map".
//
// https://docs.mapbox.com/mapbox-gl-js/api/map/
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/navigation-guidance-day-v4",
  center: [-21.940928, 64.144789],
  zoom: 12,
});

// Geolocate the user and track their current location on the map using the
// GeolocateControl. The map will pitch to 60° when geolocation is activated.
//
// https://docs.mapbox.com/mapbox-gl-js/example/locate-user/
// https://docs.mapbox.com/mapbox-gl-js/api/markers/#geolocatecontrol
// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation
let geolocate = new mapboxgl.GeolocateControl({
  positionOptions: {
    enableHighAccuracy: true,
  },
  fitBoundsOptions: {
    maxZoom: 16,
    pitch: 60,
  },
  trackUserLocation: true,
});
map.addControl(geolocate);
geolocate.on("geolocate", (e) => {
  if (!!e.coords.heading) {
    geolocate.options.fitBoundsOptions.bearing = e.coords.heading;
  }
});

// Add a compass control to the map.
//
// https://docs.mapbox.com/mapbox-gl-js/api/markers/#navigationcontrol
map.addControl(
  new mapboxgl.NavigationControl({
    showZoom: false,
    visualizePitch: true,
  }),
  "top-right"
);
// Add a scale bar to show the ratio of a distance on the map to the
// corresponding distance on the ground.
//
// https://docs.mapbox.com/mapbox-gl-js/api/markers/#scalecontrol
map.addControl(new mapboxgl.ScaleControl());

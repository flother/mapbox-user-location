mapboxgl.accessToken = "pk.eyJ1IjoiZmxvdGhlciIsImEiOiJja25hcm85a3owcWlkMnBsYzJjd202cDE1In0.HuXg98Rjdh2KmSsReyqR8w";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/navigation-guidance-night-v4",
  center: [-21.940928, 64.144789],
  zoom: 12,
});
map.addControl(
  new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true,
    },
    trackUserLocation: true,
  })
);

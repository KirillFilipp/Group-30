function getCoordinates(placemarks) {
  const currentPageName = window.location.href.match(/\/(\w+.html$)/)[1];
  const coordinates = placemarks[currentPageName];
  return coordinates;
}

export default function addMap(placemarks) {
  const coordinates = getCoordinates(placemarks);
  function initMap() {
    const placemark = new window.ymaps.Placemark(coordinates);
    const map = new window.ymaps.Map('map', {
      center: coordinates,
      zoom: 7,
    });
    map.geoObjects.add(placemark);
  }

  if (document.querySelector('.map')) {
    window.ymaps.ready(initMap);
  }
}

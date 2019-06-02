(function($) {
   $(window).on('load', function () {
      var map;
      var mapContainer = $('#map')[0];
      var CITIES_DATA = {
         poltava: {lat: 49.599563, lng: 34.542128},
         kiev: {lat: 50.447983, lng: 30.547640},
         odessa: {lat: 46.466881, lng: 30.724168},
         vinnytsia: {lat: 49.234008, lng: 28.486457}
      }
      var mapCenter = CITIES_DATA.poltava;

      map = new google.maps.Map(mapContainer, {
         center: mapCenter,
         zoom: 8,
         disableDefaultUI: true
      });

      var icon = {
         url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png",
         scaledSize: new google.maps.Size(40, 40)
      }

      var marker = new google.maps.Marker({
         position: mapCenter,
         map: map,
         icon: icon
      });

      $('#cities').change(function () {
         var selectedCity = this.value;
         var currentMapCenter = CITIES_DATA[selectedCity];
         var currentLocation = new google.maps.LatLng(currentMapCenter.lat, currentMapCenter.lng);
         map.setZoom(9);
         map.setCenter(new google.maps.LatLng(currentMapCenter.lat, currentMapCenter.lng)); 
         marker.setPosition(currentLocation);
      })   
   });
})(jQuery);
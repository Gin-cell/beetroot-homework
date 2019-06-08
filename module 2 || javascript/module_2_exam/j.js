//---------google_maps---------
(function($) {
    $(window).on('load', function () {
       var map;
       var mapContainer = $('#google_maps')[0];
       var mapCenter = {lat: 40.692669, lng: -73.883010};
 
       map = new google.maps.Map(mapContainer, {
          center: mapCenter,
          zoom: 15,
          disableDefaultUI: true
       });
 
       var icon = {
          url: "img/gmaps/gmaps_pin.png",
          scaledSize: new google.maps.Size(70, 70)
       }
 
       var marker = new google.maps.Marker({
          position: new google.maps.LatLng(40.697465, -73.887355),
          map: map,
          icon: icon
       });
    });
 })(jQuery);

 //---------slick_slider---------
 $('.news_gallery').slick({
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    adaptiveHeight: true,
   //  autoplay: true,
   //  autoplaySpeed: 2000
  });

//---------footer_form---------
$(document).ready(function () {
    $('.form_right input').click(function () {
        $('.form_right input').removeClass('focus');
        $(this).addClass('focus');
    })
})
$(document).ready(function () {
   $('.head_item').click(function () {
      var selected = $(this).attr('id');
      $('.head_item').removeClass('active');
      $(this).addClass('active');
      if(selected == 'one') {
         $('.content_1').fadeIn(200);
         $('.content_2').fadeOut(200);
         $('.content_3').fadeOut(200)
      } else if(selected == 'two') {
         $('.content_1').fadeOut(200);
         $('.content_2').fadeIn(200);
         $('.content_3').fadeOut(200)
      } else if(selected == 'three') {
         $('.content_1').fadeOut(200);
         $('.content_2').fadeOut(200);
         $('.content_3').fadeIn(200)
      }
      console.log(selected);
   });
});
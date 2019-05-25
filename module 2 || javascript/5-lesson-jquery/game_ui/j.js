$(document).ready(function () {
   $('.head_item').click(function () {
      var selected = $(this).attr('id');
      $('.head_item').removeClass('active');
      $(this).addClass('active');
      if(selected == 'one') {
         $('.content_1').show(500);
         $('.content_2').hide(500);
         $('.content_3').hide(500)
      } else if(selected == 'two') {
         $('.content_1').hide(500);
         $('.content_2').show(500);
         $('.content_3').hide(500)
      } else if(selected == 'three') {
         $('.content_1').hide(500);
         $('.content_2').hide(500);
         $('.content_3').show(500)
      }
      console.log(selected);
   });
});
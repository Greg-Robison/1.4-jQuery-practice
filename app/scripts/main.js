(function($) {
  "use strict"
  $(function(){



    $('.section ul').hide();

    $('.btn').click(function() {
console.log('testing');
      $('.section ul').slideUp();
      $(this).next().slideDown();
    });

//     $( ".btn" ).hover(function() {
// console.log('idiot');
//       $( ".btn" ).animate({
//         color: "green",
//         background: linear-gradient(#b2c364, #6f812c),
//       });


  });
})(jQuery);

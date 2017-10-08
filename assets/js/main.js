jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
   
   initCarousel();

   function initCarousel(){

    var options = {
      cellAlign: 'center',
      wrapAround: 'true',
      imagesLoaded: true,
      prevNextButtons: false
    };

    // enable prev/next buttons at 768px
    if ( matchMedia('screen and (min-width: 1024px)').matches ) {
      options.prevNextButtons = true;
    }

    var carousel = $('.carousel').flickity(options);

    carousel.on('staticClick.flickity', function(event, pointer, cellElement, cellIndex){
      if (!cellElement)
        return
      console.log(cellIndex);
    })
   }
    

});
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
    var carousel = $('.carousel').flickity({
      cellAlign: 'center',
      wrapAround: 'true',
      imagesLoaded: true
    })
    carousel.on('staticClick.flickity', function(event, pointer, cellElement, cellIndex){
      if (!cellElement)
        return

      console.log(cellIndex);
    })
   }
    

});
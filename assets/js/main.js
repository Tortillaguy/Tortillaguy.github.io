$(function() {

    initBackground();

    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
   
   initCards();
   initCarousel();

   function initCards(){
      var tappable = $('.card-header, #profile-img');

      //if mobile
      if (matchMedia('screen and (max-width: 767px)').matches){
          var config = {duration: 500, delay: 200};
          Waves.init(config);
          Waves.attach('.card-header', 'waves-light');
          Waves.attach('#profile-img', 'waves-dark');
      }
      

      if ( matchMedia('screen and (min-width: 767px)').matches ) {
        $('.collapse').collapse('show');

        $(tappable).on('click', function(e){
          e.stopPropagation();
        })

    }

      return;
   }

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
      options.pageDots = false;
    }

    var carousel = $('.carousel').flickity(options);

    carousel.on('staticClick.flickity', function(event, pointer, cellElement, cellIndex){
      if (!cellElement)
        return
      console.log(cellIndex);
    })
  }

   function initBackground(){
    $('body').css("background", "linear-gradient(135deg, yellow, red, blue)");
   }
  
  $(window).resize(function(){
    initBackground();
  });

});
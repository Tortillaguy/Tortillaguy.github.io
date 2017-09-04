paper.install(window);
$(function() {
	// Get a reference to the canvas object
	var canvas = document.getElementById('myCanvas')
	dataUrl = canvas.toDataURL();
	$('document').css('background', 'url('+dataUrl+')');

	$('#canvas-wrap').css({"width": $(document).width(), "height": $(document).height()});
	$('#myCanvas').css({'width': '100%', 'height': '100%'});
	// Create an empty project and a view for the canvas:
	paper.setup(canvas);

	var view = paper.view;
	// Create a Paper.js Path to draw a line into it:
	var path = new paper.Path();
	// Give the stroke a color
	path.strokeColor = 'black';
	

	

	var topLeft = [0,0]
	var bottomRight = [view.size.width, view.size.height];
	var path = new Path.Rectangle({
	    topLeft: topLeft,
	    bottomRight: bottomRight,
	    // Fill the path with a gradient of three color stops
	    // that runs between the two points we defined earlier:
	    fillColor: {
	        gradient: {
	            stops: ['yellow', 'red', 'blue']
	        },
	        origin: topLeft,
	        destination: bottomRight
	    }
		});
	
	$(window).resize(function(){
		$('#canvas-wrap').css({"width": $(window).width(), "height": $(document).height()});
		$('#myCanvas').css({'width': '100%', 'height': '100%'});
	})

	view.onResize = function(event) {

	    bottomRight = [view.size.width, view.size.height];
	    var path = new Path.Rectangle({
	    topLeft: topLeft,
	    bottomRight: bottomRight,
	    // Fill the path with a gradient of three color stops
	    // that runs between the two points we defined earlier:
	    fillColor: {
	        gradient: {
	            stops: ['yellow', 'red', 'blue']
	        },
	        origin: topLeft,
	        destination: bottomRight
	    	}
		});
	}
});
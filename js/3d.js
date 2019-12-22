$(function(){
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000 );
	camera.position.z = 4;

	var canvas = $("#canvas");

	var c = canvas[0];
	canvas[0]["precision"] = "mediump";
	console.log(canvas);
	var renderer = new THREE.WebGLRenderer({canvas: canvas[0]});
	console.log(renderer);
	//    renderer.setSize( c.style.width, c.style.height );

	console.log(canvas.width());
	console.log(canvas.height());

	window.addEventListener('resize', resizeCanvas, false);

	function resizeCanvas(){
		canvas.width(window.innerWidth);
		canvas.height(canvas.innerHeight);
		renderer.setSize(canvas.width(), canvas.height());
		camera.aspect = c.clientWidth / c.clientHeight;
  		camera.updateProjectionMatrix();
	}

	resizeCanvas();

	renderer.setClearColor("#28EE6A");
	

	// Create a Cube Mesh with basic material
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: "#433F81" } );
var cube = new THREE.Mesh( geometry, material );

// Add cube to Scene
scene.add( cube );


// Render Loop
var render = function () {
  requestAnimationFrame( render );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

 
//	resizeCanvas();
  // Render the scene
  renderer.render(scene, camera);

};

render();


});
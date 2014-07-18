// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1155;
canvas.height = 832;
document.body.appendChild(canvas);

//setup & draw the background
var carImage = new Image();
carImage.src = 'img/mycar.jpg';
function drawCar(){
	ctx.drawImage(carImage, 0, 0, 1155, 832);
}
carImage.onload = function() {
  drawCar();
}

//hit detection goes here

// thanks to http://stackoverflow.com/a/17490457 for this function
function insidePoly(pointx, pointy) {
  var inside = false;
  polygons.forEach(function(polygon){
    var i,j;
    for (i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      if( ((polygon[i][1] > pointy) != (polygon[j][1] > pointy)) && (pointx < (polygon[j][0]-polygon[i][0]) * (pointy-polygon[i][1]) / (polygon[j][1]-polygon[i][1]) + polygon[i][0]) ) inside = !inside;
    }
  })
  return inside;
}
// but then I had to add in this function, as you can't exit a foreach.
// It's a complicated way as I couldn't get this one to stop detecting hits
// when the click was to the right (and outside) of a given polygon, so it's
// only called after insidePoly returns true.
function insideWhichPoly(pointx, pointy) {
  for (var k=0; k<polygons.length; k++){  
    var i,j;
    for (i = 0, j = polygons[k].length - 1; i < polygons[k].length; j = i++) {
      if ( 
          ((polygons[k][i][1] > pointy) != (polygons[k][j][1] > pointy)) && 
          (pointx < (polygons[k][j][0]-polygons[k][i][0]) * (pointy-polygons[k][i][1]) / (polygons[k][j][1]-polygons[k][i][1]) + polygons[k][i][0]) 
          ) {
        return k;
      }
    } 
  }
}

function doHitDetection(e){
	var n, goodToGo = true;
	var xpos = e.clientX-canvas.offsetLeft;
	var ypos = e.clientY-canvas.offsetTop;
	if (insidePoly(xpos,ypos)) {
		n = insideWhichPoly(xpos,ypos);
		// check if anything is running
		//might want to do this globally 
		//i.e. if anything is unning it sets 'running' to true
		carPartArray.forEach(function(part){
			if (part.animating || part.complete) {
				goodToGo = false;
			}
		})
		//run the right anim
		if (goodToGo) {

		}
  }
};

canvas.addEventListener("touchend", function(e){doHitDetection(e)}, false);
canvas.addEventListener("click", function(e){doHitDetection(e)}, false);


//set up the names of things in an array so it's DRY
var names = [
	"fuelcap",
	"wheel",
	"side",
	"window",
	"roof",
	"windscreen",
	"bonnet"
];
var blurbs = [
	"Old school fuel source",
	"Definitely not RWD",
	"Not exactly stylish (but does the job)",
	"Lots of room for a child inside",
	"Just wish it were a convertible",
	"You can tell a lot about the owner",
	"Easy to peek under the hood, see what's going on"
];
var carPartArray = [];

//set up the main object constructor
function carPart(index){
	this.index = index;
	this.name = names[index];
	this.poly = polygons[index];
	this.image = new Image();
	this.image.src = 'img/spritesheet-' + this.name + '.png';
	this.imageReady = false;
	this.image.onload = function(){
		this.imageReady = true;
	};
	this.anim = animArray[index];
	this.sprite = spriteArray[index];
	this.animating = false;
	this.complete = false;
	this.blurb = blurbs[index];
 	carPartArray.push(this);
}

var Fuelcap = new carPart(0);
var Wheel = new carPart(1);
var Side = new carPart(2);
var Windo = new carPart(3);
var Roof = new carPart(4);
var Windscreen = new carPart(5);
var Bonnet = new carPart(6);

// console.log(carPartArray[0].name);

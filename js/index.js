// The Paul Irish polyfill for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Create the canvas
var canvas = document.createElement("canvas"); 
var ctx = canvas.getContext("2d");
canvas.width = 1155;
canvas.height = 832;
document.body.appendChild(canvas);

//setup & draw the background
var carImage = new Image();
var carImageReady = false;
carImage.src = 'img/mycar.jpg';
function drawCar(){
	ctx.drawImage(carImage, 0, 0, 1155, 832);
}
carImage.onload = function() {
	initialise();
}

function drawTitle(){
	ctx.font='72px "Cabin Sketch"';
	ctx.textAlign="center";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.textBaseline="top"; 
	ctx.fillText("Why this website is like my car...",canvas.width/2,80);
}
window.setTimeout(initialise,1000);

function initialise(){
	canvas.width = canvas.width;
	drawCar();
	drawTitle();
}

//set up various variables
var timer = new FrameTimer();
var needHelp = false;
var userInput = false;
var lastUserInput;

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
// only called after insidePoly returns true. Not exactly DRY, but hey...
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
	userInput = true;
	lastUserInput = Date.now();
	var n;
	var xpos = e.clientX-canvas.offsetLeft;
	var ypos = e.clientY-canvas.offsetTop;
	if (insidePoly(xpos,ypos)) {
		n = insideWhichPoly(xpos,ypos);
		//run the right anim
		if (goodToGo(n)) {
			//run animation for n
			console.log(carPartArray[n].name);
			carPartArray[n].zing();
		}
	}
};

canvas.addEventListener("touchend", function(e){doHitDetection(e)}, false);
canvas.addEventListener("click", function(e){doHitDetection(e)}, false);

//check if anything is already running or if a specific animation is complete
function goodToGo(index){
	var good = true;
	if (carPartArray[index].anim._completed){
		good = false;		
	} else {
		carPartArray.forEach(function(part){
			if (part.anim._active) {
				good = false;
			}
		})
	}
	return good;
}


//set up the names etc. of things in an array so it's DRY
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
	{text:"Old school fuel source",x:20,y:350},
	{text:"No need for RWD",x:50,y:450},
	{text:"Not your usual flavour of cool",x:90,y:530},
	{text:"Lots of room for a child inside",x:0,y:230},
	{text:"Helluvalotta fun!",x:550,y:190},
	{text:"You can see me in it :)",x:700,y:250},
	{text:"Peek inside, see how it works",x:800,y:300}
];
var carPartArray = [];
//animation array from animations.js
var animArray = [
    fuelcap_anim,
    wheel_anim,
    side_anim,
    window_anim,
    roof_anim,
    windscreen_anim,
    bonnet_anim
];
//array of hint animations (1 frame) from animations.js
var hints = [
    fuelcapTest,
    wheelTest,
    sideTest,
    windowTest,
    roofTest,
    windscreenTest,
    bonnetTest
];
//spritesheet array from spritesheet.js
var spriteArray = [
    fuelcap_sprites,
    wheel_sprites,
    side_sprites,
    window_sprites,
    roof_sprites,
    windscreen_sprites,
    bonnet_sprites
]

//set up the main object constructor
function carPart(index, w, h, offsetx, offsety){
	this.index = index;
	this.w = w;
	this.h = h;
	this.offsetx = offsetx;
	this.offsety = offsety;
	this.name = names[index];
	this.poly = polygons[index];
	this.image = new Image();
	this.image.src = 'img/spritesheet-' + this.name + '.png';
	this.imageReady = false;
	this.image.onload = function(){
		this.imageReady = true; //haven't actually used this anywhere - cargo cult!
	};
	this.anim = animArray[index];
	this.sprite = spriteArray[index];
	this.blurb = blurbs[index];
	this.hint = hints[index];
 	carPartArray.push(this);
}

carPart.prototype.zing = function(){
	var me = this;

    requestAnimationFrame(function(){
		me.anim.animate(timer.getSeconds());
		var frame = me.anim.getSprite();
		//might need to reset the canvas here?
		drawCar();
		ctx.drawImage(me.image, frame.x, frame.y, me.w, me.h, me.offsetx, me.offsety, me.w, me.h);
		//TODO: tween the blurb. Could be a separate function?
		var transparency = (1/me.anim._frames.length)*me.anim._frameIndex;
		me.blurbShow(transparency);
		drawCurrentState();
		drawTitle();
		timer.tick();
		me.anim._active = true;
		if(me.anim._frameIndex === me.anim._frames.length-1) {
			me.anim._frameIndex = 0;
			me.anim._active = false;
			me.anim._completed = true;
			return;
		}
		if(me.anim._active){
			me.zing();
		}
	});
};

carPart.prototype.blurbShow = function(alpha){
	ctx.font='24px "Gloria Hallelujah"';
	ctx.textAlign="left";
	ctx.fillStyle="rgba(0,0,0," + alpha + ")";
	ctx.textBaseline="top"; 
	ctx.fillText(this.blurb.text,this.blurb.x,this.blurb.y);
	
}

function drawCurrentState(){
	carPartArray.forEach(function(part){
		if (part.anim._completed) {
			part.anim._frameIndex = part.anim._frames.length - 1; 
			var myframe = part.anim.getSprite();
			ctx.drawImage(part.image, myframe.x, myframe.y, part.w, part.h, part.offsetx, part.offsety, part.w, part.h);
			part.blurbShow(1);
		};
	});
};

var hintIterator = 0;

function showHint(){
	var part = carPartArray[hintIterator];
	console.log("Hint: " + part.name + " " + part.anim._completed);
	if (part.anim._active || part.anim._completed) {
		hintIterator++;
		if (hintIterator < carPartArray.length) {
			showHint();
		} else if (!part.anim._active){
			ctx.font='36px "Gloria Hallelujah"';
			ctx.textAlign="left";
			ctx.textBaseline="top"; 
			ctx.fillText("That's the lot!",885,350);
			ctx.font='20px "Gloria Hallelujah"';
			ctx.fillText("Thanks for visiting :)",910,400);
		}
	} else {
		ctx.drawImage(part.image, 0, 0, part.w, part.h, part.offsetx, part.offsety, part.w, part.h);
		delayThat = window.setTimeout(function(){
			hintIterator++;
			initialise();
			drawCurrentState();
			if (hintIterator < carPartArray.length) {
				showHint();
			} else {
				hintIterator = 0;
				window.clearTimeout(delayThat);
				initialise();
				drawCurrentState();
			}
		}, 100);
	};
};

var Fuelcap = new carPart(0, 70, 102, 276, 314);
var Wheel = new carPart(1, 139, 103, 242, 416);
var Side = new carPart(2, 286, 140, 343, 370);
var Windo = new carPart(3, 292, 134, 329, 272);
var Roof = new carPart(4, 256, 57, 393, 229);
var Windscreen = new carPart(5, 278, 122, 537, 263);
var Bonnet = new carPart(6, 233, 109, 644, 359);

console.log(carPartArray.length);

//reload the page if the window gets resized
// window.onresize = function(){
// 	window.location.reload(false);
// }
// window.ondeviceorientation = function(){
// 	window.location.reload(false);	
// }

// The loop that checks if you need a hint - thank you LOST DECADE GAMES!
function checkingUpOnYou() {
	var now = Date.now();
	if (!userInput && (now - pageLoad > 7000)) {
		pageLoad = now;
		showHint();
	} else if (now - lastUserInput > 7000) {
		lastUserInput = now;
		showHint();
	};
	requestAnimationFrame(checkingUpOnYou);
};

var pageLoad = Date.now();
checkingUpOnYou();


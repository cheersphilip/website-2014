// work out how big the screen is
var w=window.innerWidth;
var h=window.innerHeight;

// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 330;
canvas.height = 650;
document.body.appendChild(canvas);


//various variables///////////////////////


  var oddArray = []; 
  var evenArray = [];
  var cols = 3;
  var rows = 3;
  var coordArray = [];
  var indexNum = 0;
  var tileWidth = "";
  var tileHeight = "";
  var lastTileIndex = "";
  var complete = false;

///////////////////////////////////////////

//////////////// split and shuffle functions

function split(thisArray) {
    for (i=0; i<thisArray.length; i++){
      if (i===0) {
        evenArray.push(thisArray[i]);
      } else if (i%2===1) {
        oddArray.push(thisArray[i]);
      } else if (i%2===0){
        evenArray.push(thisArray[i]);
      }
    }
    thisArray.splice(0,thisArray.length);
  }  
    
function shuffle(thisArray) {
    var newValue = "";
    var r = Math.random();
    if ((r>0.5 && oddArray.length>0) || (r<=0.5 && evenArray.length===0 && oddArray.length>0)) {
      newValue = Math.floor(r * oddArray.length); 
      thisArray.push(oddArray[newValue]);
      oddArray.splice(newValue,1);
      shuffle(thisArray);
    } else if ((r<=0.5 && evenArray.length>0) || (r>0.5 && oddArray.length===0 && evenArray.length>0)) {
      newValue = Math.floor(r * evenArray.length);
      thisArray.push(evenArray[newValue]);
      evenArray.splice(newValue,1);
      shuffle(thisArray);
    } else if (evenArray.length===0 && oddArray.length===0) {
      return thisArray;
    }
  }

//////////////// image functions

var imageReady = false;
var bg1Image = new Image();
bg1Image.src = "http://lorempixel.com/300/300/cats";



function createTiledImage(){
  tileWidth = bg1Image.width / cols;
  tileHeight = bg1Image.height / rows;
  for (i=0; i<rows; i++){
    for (j=0; j<cols; j++) {
      tile={X:j*tileWidth,Y:i*tileHeight,ID:indexNum,X2:"",Y2:""};
      indexNum++;
      coordArray.push(tile);
    }
  }
  indexNum=0;
}
  
   
function drawTiledImage(){
  indexNum=0;
  for (k=0; k<rows; k++){
    for(l=0; l<cols; l++){
      //console.log("indexNum = " +  indexNum);
      coordArray[indexNum].X2 = l*tileWidth;
      coordArray[indexNum].Y2 = k*tileHeight+305;
      ctx.drawImage(
        bg1Image,
        coordArray[indexNum].X,
        coordArray[indexNum].Y,
        tileWidth, 
        tileHeight, 
        coordArray[indexNum].X2, 
        coordArray[indexNum].Y2, 
        tileWidth, 
        tileHeight
      ); 
      if (coordArray[indexNum].ID === coordArray.length-1 && !complete){
        ctx.fillStyle="rgba(0,0,0,0.8)";
        ctx.strokeStyle="rgb(50,150,50)";
        ctx.lineWidth=3;
        ctx.fillRect(l*tileWidth, k*tileHeight+305, tileWidth, tileHeight);
        ctx.strokeRect(l*tileWidth, k*tileHeight+305, tileWidth, tileHeight);
      }
      indexNum++;
    }
  }
}

///////////////////////////////////////////



//////////////////click detection

canvas.addEventListener("click", clicked, false);

function clickPos(clickX, clickY){
	this.clickX = clickX;
	this.clickY = clickY;
}

//code for returning coordinates in any browser
function getCursorPosition(e) {
    var x;
    var y;
    if (e.pageX !== undefined && e.pageY !== undefined) {
		x = e.pageX;
		y = e.pageY;
    }
    else {
		x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	}
	var thisPos = new clickPos(x, y);
	return thisPos;
}

//work out what to do with a click
function clicked(e) {
  indexNum=0;
  var thisPos = getCursorPosition(e);
  var cX = thisPos.clickX;
  var cY = thisPos.clickY;
  for (k=0; k<rows; k++){
    for(l=0; l<cols; l++){
      if (l*tileWidth < cX && l*tileWidth + tileWidth > cX && k*tileHeight+305 < cY && k*tileHeight+305 + tileHeight > cY){
        var xPos = l*tileWidth;
        var yPos = k*tileHeight+305;
        checkTilePosition(xPos,yPos,indexNum);
      }
      indexNum++;
    }
  }
}

function checkTilePosition (exs,why,tileIndex) {
  var north = false;
  var south = false;
  var east = false;
  var west = false;

  if (why + tileHeight === coordArray[lastTileIndex].Y2 && exs === coordArray[lastTileIndex].X2 ) {
    south = true;
  } else
  if (why - tileHeight === coordArray[lastTileIndex].Y2 && exs === coordArray[lastTileIndex].X2) {
    north = true;
  } else
  if (exs + tileWidth === coordArray[lastTileIndex].X2 && why === coordArray[lastTileIndex].Y2) {
    east = true;
  } else
  if (exs - tileWidth === coordArray[lastTileIndex].X2 && why === coordArray[lastTileIndex].Y2) {
    west = true;
  } else {
  }

  if (!complete) {
    if (north || south || east || west) {
      spliceAndDice(tileIndex,lastTileIndex);
    }
  }
}

function spliceAndDice (clickedTile,lastTile) {
  holdingCell = [];
  holdingCell.push(coordArray[clickedTile]);
  holdingCell.push(coordArray[lastTile]);
  //console.log(holdingCell);
  coordArray.splice(clickedTile,1);
  coordArray.splice(clickedTile,0,holdingCell[1]);
  coordArray.splice(lastTile,1);
  coordArray.splice(lastTile,0,holdingCell[0]);

  canvas.width=canvas.width;
  ctx.drawImage(bg1Image, 0, 0 );
  checkComplete();
  if(complete){
    drawTiledImage();
    alert("Yay! Done! Refresh to start again :)");
  } else {
    setLastTileIndex();
    drawTiledImage();
  }
}

function setLastTileIndex(){
  for (i=0; i<coordArray.length; i++){
    //console.log(coordArray[i].ID);
    if (coordArray[i].ID === coordArray.length-1){
      lastTileIndex = i;
      //console.log("lastTileIndex = " + lastTileIndex);
    }
    if (i===coordArray.length-1){
      //console.log("end");
    }
  }
}


function checkComplete(){
  var completeness = 0;
  for (var i = 0; i < coordArray.length; i++) {
    if (i===coordArray[i].ID){
      completeness++;
    }
    if (completeness===coordArray.length-1){
      complete = true;
    }
  }
}
//////////////////////////

///////////////// run everything

function initiate(){
  ctx.drawImage(bg1Image, 0, 0 );
  createTiledImage(bg1Image,coordArray);
  split(coordArray);
  shuffle(coordArray);
  drawTiledImage();
  setLastTileIndex();
}

bg1Image.onload = function () {
  initiate();  
};
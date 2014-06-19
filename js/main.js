// work out how big the screen is
var w=window.innerWidth;
var h=window.innerHeight;

// console.log("here");

var walking = false;
var bonneting = false;
var fuelcapping = false;
var roofing = false;
var sideing = false;
var wheeling = false;
var windowing = false;
var windscreening = false;
var everything = false;


var kunioImageReady = false;
var kunioImage = new Image();
kunioImage.src = 'http://dev.philipwatson.co.uk/images/37794.png';  
kunioImage.onload = function() {
    kunioImageReady = true;
};

var carImageReady = false;
var carImage = new Image();
carImage.src = 'img/mycar.jpg';
carImage.onload = function() {
  carImageReady = true;
}

var bonnetImageReady = false;
var bonnetImage = new Image();
bonnetImage.src = 'img/spritesheet-bonnet.png';  
bonnetImage.onload = function() {
    bonnetImageReady = true;
};

var fuelcapImageReady = false;
var fuelcapImage = new Image();
fuelcapImage.src = 'img/spritesheet-fuelcap.png';  
fuelcapImage.onload = function() {
    fuelcapImageReady = true;
};

var roofImageReady = false;
var roofImage = new Image();
roofImage.src = 'img/spritesheet-roof.png';  
roofImage.onload = function() {
    roofImageReady = true;
};

var sideImageReady = false;
var sideImage = new Image();
sideImage.src = 'img/spritesheet-side.png';  
sideImage.onload = function() {
    sideImageReady = true;
};

var wheelImageReady = false;
var wheelImage = new Image();
wheelImage.src = 'img/spritesheet-wheel.png';  
wheelImage.onload = function() {
    wheelImageReady = true;
};

var windowImageReady = false;
var windowImage = new Image();
windowImage.src = 'img/spritesheet-window.png';  
windowImage.onload = function() {
    windowImageReady = true;
};
var windscreenImageReady = false;
var windscreenImage = new Image();
windscreenImage.src = 'img/spritesheet-windscreen.png';  
windscreenImage.onload = function() {
    windscreenImageReady = true;
};

var EverythingReady = false;





window.onload = function() {

//---------- code for scrolling through banner images so I can choose which to use --------------//

  var images = document.images;
  var numImages = images.length;
  var lastIndex = numImages-1;
  console.log(numImages);
  for (i=1;i<numImages;i++){
    images[i].style.visibility="hidden";
  }
  images[0].style.visibility="visible";
  for (i=0;i<numImages;i++){
    console.log(images[i].style.visibility);
  }
  
  var prev = document.getElementById("banner_prev");
  var next = document.getElementById("banner_next");
  
  next.onclick=function(){
    console.log("+++++++++++++");
    for ( i = 0; i < numImages; i++ ){
    console.log(images[i].style.visibility);
      if (images[i].style.visibility === "visible"){
        images[i].style.visibility="hidden";
        if (i === lastIndex) {
          images[0].style.visibility="visible";
          return;
        } else {
          images[i+1].style.visibility="visible";
          return;
        }
      }
    }
  };
  
  prev.onclick=function(){
    console.log("--------------");
    for ( i = 0; i < numImages; i++ ){
      console.log(images[i].style.visibility);
      if (images[i].style.visibility === "visible"){
        images[i].style.visibility="hidden";
        if (i === 0) {
          images[lastIndex].style.visibility="visible";
          return;
        } else {
          images[i-1].style.visibility="visible";
          return;
        }
      }
    }   
  };

//------------ end banner scrolling --------------------------------------------------------------//




  // Create the canvas
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = 1155;
  canvas.height = 832;
  document.body.appendChild(canvas);


  var timer = new FrameTimer();
  timer.tick();

  var drawTitle = function(){
  //-----trying some font stuff ----//
  ctx.font='72px "Cabin Sketch"';
  ctx.textAlign="center";
  ctx.textBaseline="top"; 
  ctx.fillText("Why this website is like my car...",canvas.width/2,50);
  }

  var drawCar = function(){
      ctx.clearRect(0, 0, 1155, 832);
      ctx.drawImage(carImage, 0, 0, 1155, 832);
      drawTitle();
  }

  if(carImageReady) {
    drawCar();
  };

  if (windscreenImageReady && windowImageReady && wheelImageReady && sideImageReady && roofImageReady && fuelcapImageReady && bonnetImageReady && carImageReady) {
  EverythingReady = true;
};

var xIn = document.getElementById("input-x");
var yIn = document.getElementById("input-y");
console.log(xIn.value);


//////////////// alignment functions //////////////////////
///////////windscreen
  // var dowindscreenTest = function(){
  //   window.requestAnimationFrame(function(){
  //     windscreenTest.animate(timer.getSeconds());
  //     var frame = windscreenTest.getSprite();
  //     drawCar();
  //     ctx.drawImage(windscreenImage, frame.x, frame.y, 278, 122, xIn.value, yIn.value, 278, 122);
  //     timer.tick();

  //     if(windscreenTest._frameIndex === windscreenTest._frames.length-1) {
  //       windscreenTest._frameIndex = 0;
  //     }
  //     dowindscreenTest();
  //   });
  // };
  // // run once when it loads
  // if(windscreenImageReady) {
  //   dowindscreenTest();
  // };

/////////// window
  // var dowindowTest = function(){
  //   window.requestAnimationFrame(function(){
  //     windowTest.animate(timer.getSeconds());
  //     var frame = windowTest.getSprite();
  //     drawCar();
  //     ctx.drawImage(windowImage, frame.x, frame.y, 292, 134, xIn.value, yIn.value, 292, 134);
  //     timer.tick();

  //     if(windowTest._frameIndex === windowTest._frames.length-1) {
  //       windowTest._frameIndex = 0;
  //     }
  //     dowindowTest();
  //   });
  // };
  // // run once when it loads
  // if(windowImageReady) {
  //   dowindowTest();
  // };



//////////// wheel
  // var dowheelTest = function(){
  //   window.requestAnimationFrame(function(){
  //     wheelTest.animate(timer.getSeconds());
  //     var frame = wheelTest.getSprite();
  //     drawCar();
  //     ctx.drawImage(wheelImage, frame.x, frame.y, 139, 103, xIn.value, yIn.value, 139, 103);
  //     timer.tick();

  //     if(wheelTest._frameIndex === wheelTest._frames.length-1) {
  //       wheelTest._frameIndex = 0;
  //     }
  //     dowheelTest();
  //   });
  // };
  // // run once when it loads
  // if(wheelImageReady) {
  //   dowheelTest();
  // };

//////////// side
  // var dosideTest = function(){
  //   window.requestAnimationFrame(function(){
  //     sideTest.animate(timer.getSeconds());
  //     var frame = sideTest.getSprite();
  //     drawCar();
  //     ctx.drawImage(sideImage, frame.x, frame.y, 286, 140, xIn.value, yIn.value, 286, 140);
  //     timer.tick();

  //     if(sideTest._frameIndex === sideTest._frames.length-1) {
  //       sideTest._frameIndex = 0;
  //     }
  //     dosideTest();
  //   });
  // };
  // // run once when it loads
  // if(sideImageReady) {
  //   dosideTest();
  // };

//////////// roof
  // var doroofTest = function(){
  //   window.requestAnimationFrame(function(){
  //     roofTest.animate(timer.getSeconds());
  //     var frame = roofTest.getSprite();
  //     drawCar();
  //     ctx.drawImage(roofImage, frame.x, frame.y, 256, 57, xIn.value, yIn.value, 256, 57);
  //     timer.tick();

  //     if(roofTest._frameIndex === roofTest._frames.length-1) {
  //       roofTest._frameIndex = 0;
  //     }
  //     doroofTest();
  //   });
  // };
  // // run once when it loads
  // if(roofImageReady) {
  //   doroofTest();
  // };

//////////// fuelcap
  // var dofuelcapTest = function(){
  //   window.requestAnimationFrame(function(){
  //     fuelcapTest.animate(timer.getSeconds());
  //     var frame = fuelcapTest.getSprite();
  //     drawCar();
  //     ctx.drawImage(fuelcapImage, frame.x, frame.y, 70, 102, xIn.value, yIn.value, 70, 102);
  //     timer.tick();

  //     if(fuelcapTest._frameIndex === fuelcapTest._frames.length-1) {
  //       fuelcapTest._frameIndex = 0;
  //     }
  //     dofuelcapTest();
  //   });
  // };
  // // run once when it loads
  // if(fuelcapImageReady) {
  //   dofuelcapTest();
  // };

///////////bonnet
  // var dobonnetTest = function(){
  //   window.requestAnimationFrame(function(){
  //     bonnetTest.animate(timer.getSeconds());
  //     var frame = bonnetTest.getSprite();
  //     drawCar();
  //     ctx.drawImage(bonnetImage, frame.x, frame.y, 233, 109, xIn.value, yIn.value, 233, 109);
  //     timer.tick();

  //     if(bonnetTest._frameIndex === bonnetTest._frames.length-1) {
  //       bonnetTest._frameIndex = 0;
  //     }
  //     dobonnetTest();
  //   });
  // };
  // // run once when it loads
  // if(bonnetImageReady) {
  //   dobonnetTest();
  // };







  document.getElementById("Windscreen_button").onclick=function(){
    if(!windscreening){dowindscreen();}
  };

  document.getElementById("Window_button").onclick=function(){
    if(!windowing){dowindow();}
  };

  document.getElementById("Wheel_button").onclick=function(){
    if(!wheeling){dowheel();}
  };

  document.getElementById("Side_button").onclick=function(){
    if(!sideing){doside();}
  };

  document.getElementById("Roof_button").onclick=function(){
    if(!roofing){doroof();}
  };

  document.getElementById("Fuelcap_button").onclick=function(){
    if(!fuelcapping){doFuelcap();}
  };

  document.getElementById("Bonnet_button").onclick=function(){
    if(!bonneting){doBonnet();}
  };



/////////////16/5/2014///// Thoughts at this stage:

// It's clear that there are conflicts in the animation code. If you start on going before
// another has finished, it will jump into the first, execute, then dissapear when the 
// second concludes it's run. 

// Solve this by just having one anim function, and a 'bags of data'
// approach to the animations, where they are given extended properties of 'completed' (so that the final frame is drawn 
// to the canvas when others are running), 'active' (perhaps to prevent others from being triggered, although
// it is more than possible for more than one to be running at one time; it would just be nice to make people wait!),
// and most challengingly, polygonal boundaries for hit detection. Compile them all into an
// array and iterate through it each loop to check what needs drawing .

// Probably need a separate file to practice hit detection using SAT or whatever.

// Also of use would be a'reminder' funcation that sees if any time has elapsed since a click, then flashes the uncompleted 
// animation 'inverses' as a hint. Maybe.



//////////////// show all the things! //////////////////
//////////////or even better, don't bother! too difficult and pointless!!///


  var doEverything = function(){
    window.requestAnimationFrame(function(){
      windscreen.animate(timer.getSeconds());
      var frame = windscreen.getSprite();
      drawCar();
      ctx.drawImage(windscreenImage, frame.x, frame.y, 278, 122, 537, 263, 278, 122);
      timer.tick();

      windscreening = true;
      if(windscreen._frameIndex === windscreen._frames.length-1) {
        windscreen._frameIndex = 0;
        windscreening = false;
        return;
      }
      if(windscreening){
        dowindscreen();
      }
    });
  };

  // run once when it loads
  // if(windscreenImageReady) {
  //   // dowindscreen();
  // };
  // //then run every time you click 
  // document.onmouseup=function(){
  //   if(!windscreening){dowindscreen();}
  // };




//////////////////////// windscreen //////////////////////

  var dowindscreen = function(){
    window.requestAnimationFrame(function(){
      windscreen.animate(timer.getSeconds());
      var frame = windscreen.getSprite();
      drawCar();
      ctx.drawImage(windscreenImage, frame.x, frame.y, 278, 122, 537, 263, 278, 122);
      timer.tick();

      windscreening = true;
      if(windscreen._frameIndex === windscreen._frames.length-1) {
        windscreen._frameIndex = 0;
        windscreening = false;
        return;
      }
      if(windscreening){
        dowindscreen();
      }
    });
  };
  // run once when it loads
  if(windscreenImageReady) {
    // dowindscreen();
  };
  //then run every time you click 
  // document.onmouseup=function(){
  //   if(!windscreening){dowindscreen();}
  // };


//////////////////////// window //////////////////////

  var dowindow = function(){
    window.requestAnimationFrame(function(){
      windo.animate(timer.getSeconds());
      var frame = windo.getSprite();
        drawCar();
      ctx.drawImage(windowImage, frame.x, frame.y, 292, 134, 329, 272, 292, 134);
      timer.tick();

      windowing = true;
      if(windo._frameIndex === windo._frames.length-1) {
        windo._frameIndex = 0;
        windowing = false;
        return;
      }
      if(windowing){
        dowindow();
      }
    });
  };
  // run once when it loads
  if(windowImageReady) {
    // dowindow();
  };
  //then run every time you click 
  // document.onmouseup=function(){
  //   if(!windowing){dowindow();}
  // };

//////////////////////// Wheel //////////////////////

  var dowheel = function(){
    window.requestAnimationFrame(function(){
      wheel.animate(timer.getSeconds());
      var frame = wheel.getSprite();
        drawCar();
      ctx.drawImage(wheelImage, frame.x, frame.y, 139, 103, 242, 416, 139, 103);
      timer.tick();

      wheeling = true;
      if(wheel._frameIndex === wheel._frames.length-1) {
        wheel._frameIndex = 0;
        wheeling = false;
        return;
      }
      if(wheeling){
        dowheel();
      }
    });
  };
  // run once when it loads
  if(wheelImageReady) {
    // dowheel();
  };
  //then run every time you click 
  // document.onmouseup=function(){
  //   if(!wheeling){dowheel();}
  // };

//////////////////////// side //////////////////////

  var doside = function(){
    window.requestAnimationFrame(function(){
      side.animate(timer.getSeconds());
      var frame = side.getSprite();
        drawCar();
      ctx.drawImage(sideImage, frame.x, frame.y, 286, 140, 343, 370, 286, 140);
      timer.tick();

      sideing = true;
      if(side._frameIndex === side._frames.length-1) {
        side._frameIndex = 0;
        sideing = false;
        return;
      }
      if(sideing){
        doside();
      }
    });
  };
  // run once when it loads
  if(sideImageReady) {
    // doside();
  };
  //then run every time you click 
  // document.onmouseup=function(){
  //   if(!sideing){doside();}
  // };


//////////////////////// roof //////////////////////

  var doroof = function(){
    window.requestAnimationFrame(function(){
      roof.animate(timer.getSeconds());
      var frame = roof.getSprite();
        drawCar();
      ctx.drawImage(roofImage, frame.x, frame.y, 256, 57, 393, 229, 256, 57);
      timer.tick();

      roofing = true;
      if(roof._frameIndex === roof._frames.length-1) {
        roof._frameIndex = 0;
        roofing = false;
        return;
      }
      if(roofing){
        doroof();
      }
    });
  };
  // run once when it loads
  if(roofImageReady) {
    // doroof();
  };
  //then run every time you click 
  // document.onmouseup=function(){
  //   if(!roofing){doroof();}
  // };


//////////////////////// fuel cap //////////////////////

  var doFuelcap = function(){
    window.requestAnimationFrame(function(){
      fuelcap.animate(timer.getSeconds());
      var frame = fuelcap.getSprite();
        drawCar();
      ctx.drawImage(fuelcapImage, frame.x, frame.y, 70, 102, 276, 314, 70, 102);
      timer.tick();

      fuelcapping = true;
      if(fuelcap._frameIndex === fuelcap._frames.length-1) {
        fuelcap._frameIndex = 0;
        fuelcapping = false;
        return;
      }
      if(fuelcapping){
        doFuelcap();
      }
    });
  };
  // run once when it loads
  if(fuelcapImageReady) {
    // doFuelcap();
  };
  //then run every time you click 
  // document.onmouseup=function(){
  //   if(!fuelcapping){doFuelcap();}
  // };


///////////////// bonnet //////////////////////////

  var doBonnet = function(){
    window.requestAnimationFrame(function(){
      bonnet.animate(timer.getSeconds());
      var frame = bonnet.getSprite();
        drawCar();
      ctx.drawImage(bonnetImage, frame.x, frame.y, 233, 109, 644, 359, 233, 109);
      timer.tick();

      bonneting = true;
      if(bonnet._frameIndex === bonnet._frames.length-1) {
        bonnet._frameIndex = 0;
        bonneting = false;
        return;
      }
      if(bonneting){
        doBonnet();
      }
    });
  };
  // run once when it loads
  if(bonnetImageReady) {
    // doBonnet();
  };
  //then run every time you click 
  // document.onmouseup=function(){
  //   if(!bonneting){doBonnet();}
  // };
  

/////////////////// default /////////////////////////////

  // var doWalk = function(){
  //   window.requestAnimationFrame(function(){
  //     walk.animate(timer.getSeconds());
  //     var frame = walk.getSprite();
        // drawCar();
  //     ctx.drawImage(kunioImage, frame.x, frame.y, 30, 60, 0, 0, 30, 60);
  //     timer.tick();

  //     walking = true;
  //     if(walk._frameIndex === walk._frames.length-1) {
  //       walk._frameIndex = 0;
  //       walking = false;
  //       return;
  //     }
  //     if(walking){
  //       doWalk();
  //     }
  //   });
  // };
  // // run once when it loads
  // if(kunioImageReady) {
  //   doWalk();
  // };
  // //then run every time you click 
  // document.onmouseup=function(){
  //   if(!walking){doWalk();}
  // };


};

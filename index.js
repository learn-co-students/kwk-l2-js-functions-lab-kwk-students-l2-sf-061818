// Code your solution in this file!
function distanceFromHqInBlocks(x){
  var blocks = 42-x
  if (blocks< 0){
    blocks = blocks*(-1)
  }
  return blocks
}

function distanceFromHqInFeet(x){
    var blocks = 42-x
  if (blocks< 0){
    blocks = blocks*(-1)
  }
  return blocks*264
}

function distanceTravelledInFeet(x, y){
    var blocks = y-x
  if (blocks< 0){
    blocks = blocks*(-1)
  }
  return blocks*264
}

function calculatesFarePrice(start, destination){
  var d= destination-start
  d = d *264
  if (d< 0){
    d = d*(-1)
  }
  if(d<400){
    return 0 
  }
  else if(d<=2000){
    return 0.02*(d-400)
    
  }
  else if (d<2500){
    return 25
  }
  else{
    return "cannot travel that far"
  }
}



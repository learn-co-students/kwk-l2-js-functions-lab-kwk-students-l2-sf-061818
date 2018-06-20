// Code your solution in this file!
function distanceFromHqInBlocks(location){
  distance = 42 - location
  if (distance < 0){
    distance *= -1
  }
  else{
    
  }
  return distance
}
function distanceFromHqInFeet(location){
  feet = (42 - location) * 264
  if (feet < 0){
    feet *= -1
  }
  else{
    
  }
  return feet
}
function distanceTravelledInFeet(spot,spot2){
  var feetAway = (spot2 - spot) * 264
if (feetAway < 0){
    feetAway *= -1
  }
  else{
    
  }
  return feetAway
}
function calculatesFarePrice(start, destination){
  distance = (start - destination)*264
  if (distance < 0){
    distance *= -1
  }
  else{
    
  }
  if (distance <= 400){
    price = 0
    return price
  }
  else if (distance <= 2000){
    price = (distance-400) * 0.02
    return price
  }
  else if (distance <= 2500){
    price =  25
    return price
  }
  else if (distance > 2500){
    speech = "cannot travel that far"
    return speech
  }
  
}
let distance = 0
let fare = 0

function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(42 - pickupLocation);
}

function distanceFromHqInFeet (pickupLocation) {
  return ((distanceFromHqInBlocks(pickupLocation))*264);
}

function distanceTravelledInFeet (a, b) {
  return (Math.abs(b-a)*264);
}

function calculatesFarePrice (start, destination) {
  distance = Math.abs(destination-start)*264;
  if (distance <= 400) {
    fare = 0;
  }
  else if (distance > 400 && distance <= 2000) {
    fare = 0.02*(distance - 400);
  }
  else if (distance > 2000 && distance <= 2500) {
    fare = 25;
  }
  else if (distance>2500) {
    fare = 'cannot travel that far';
  }
  return fare;
}
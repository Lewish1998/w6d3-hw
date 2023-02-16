const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = this.journeys.map((journey) => 
  journey.startLocation);
  return startLocations;
};  

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = this.journeys.map((journey) => 
  journey.endLocation);

  return endLocations;
};

Traveller.prototype.getJourneysByTransport = function(methodOfTransport) {
  return this.journeys.filter((journey) => {
    return journey.transport === methodOfTransport;
  });
}


Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((runningTotal, journey) => {
    return runningTotal + journey.distance;
  }, 0)
};

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   const transportMethod = [];
//   for (const journey of this.journeys){
//     if(transportMethod[journey.transport]){
//       console.log('Hello, World!')
//     } else {
//     transportMethod.push(journey.transport);
//     }
//   };
//   return(transportMethod)
// }


Traveller.prototype.getUniqueModesOfTransport = function () {
  const transportList = [];
  for (const journey of this.journeys){
    if (journey.transport in transportList){
      console.log('HELLO THERE')
    } else {
      transportList.push(journey.transport);
    }
  } return transportList;
}




module.exports = Traveller;

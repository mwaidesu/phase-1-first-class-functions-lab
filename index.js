const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers){

    return drivers.slice(0,2); 
}

const returnLastTwoDrivers = function(drivers){

  return drivers.slice(2,4); 
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function(num){
 return function(fare){
   return  fare * num
  }
}

const fareDoubler = function(fare){
  return fare * 2;
}

const fareTripler = function(fare){
  return fare * 3;
}

const selectDifferentDrivers = function(drivers, selectingDrivers){
  return  selectingDrivers(drivers)
}
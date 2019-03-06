
var _ = require('underscore');

var ironman = {
    name: "Tony Stark",
    alias: "Iron Man"
};
var avengers_array = [
    {name: "Tony Stark", alias: "Iron Man", ability: "flight"},
    {name: "Bruce Banner", alias: "The Incredible Hulk", ability: "superhuman strength"},
    {name: "Steve Rogers", alias: "Captain America", ability: "superhuman strength"},
    {name: "Clint Barton", alias: "Hawkeye", ability: "superior hand-eye coordination"},
    {name: "Thor Odinson", alias: "Thor", ability: "teleportation"},
    {name: "Natasha Romanova", alias: "Black Widow", ability: "espionage"}
];

_.each(ironman, function(value, key){ console.log(key+': '+value); });
//A simple function that can iterate over objects or arrays and even do some manipulation


var avengersAssemble = _.map(avengers_array, function(avenger){ return avenger; });
console.log(avengersAssemble);
//Pushes each avenger object into a new array after funneling it through an optional transformation function


var avengerNames = _.pluck(avengers_array, 'name');
console.log(avengerNames);
//Often used with .map(). Returns or “plucks” only the values for the key specified as the second argument and places them in an array


var superhumanStrengthAvengersArray = _.where(avengers_array, {ability: "superhuman strength"});
console.log(superhumanStrengthAvengersArray);
//Returns an ARRAY of all values that contain a match to the key-value properties object


var superhumanStrengthAvenger = _.findWhere(avengers_array, {ability: "superhuman strength"});
console.log(superhumanStrengthAvenger);
//Returns the FIRST value when it finds a match to the key-value properties object; if none are found then undefined is returned


var superhumanStrengthAvengers = _.filter(avengers_array, function(avenger){ return avenger.ability == "superhuman strength"; });
console.log(superhumanStrengthAvengers);
//Returns an array of values that satisfy a predicate (function seen here)


var sortedAvengerNames = _.sortBy(avengers_array, 'name');
console.log(sortedAvengerNames);
//Returns an ascending  sorted array based on the values tied to the key we specify

//.last() or .first()... does exactly what you think
var firstAvenger = _.first(avengers_array); // returns the first value in an array
var lastTwoAvengers = _.last(avengers_array, 2); // The optional second parameter allows for additional values to be returned, but when specified, comes back as an array

var newArray = _.range(0,10); // returns an array with the values from argument1 (inclusive) to argument2 (exclusive)

var almostAvenger = {
    name: "John Q. Public",
    alias: "John Q"
};
_.defaults(almostAvenger, {
name: "Need a Real Name",
alias: "Need a Superhero Name",
abilities: "Need Superhero Abilities"
});


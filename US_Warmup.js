var _ = require('underscore');

var myState = {
 name: "Washington",
 capital: "Olympia",
 population: 7062000,
 nickname: "The Evergreen State"
};

var businesses = [
 {
  name: "Coding Dojo",
  city:  "Bellevue"
 },
 {
  name: "Facebook",
  city: "Mountain View"
 },
 {
  name: "Microsoft",
  city: "Redmond"
 },
 {
  name: "Expedia",
  city: "Bellevue"
 }
];

//1.Strip the myState object into two arrays, one filled with its keys, the other with its values.
var keys=_.pluck(myState, function(value, key){
   return key});
console.log(keys);
var values = _.pluck(myState, function(value, key){return value});
console.log(values);
//2.Using these two new arrays, put them back together as an object to resemble the original myState object.

var myNewState = _.map(keys, values, function(keys, values){
    var State={keys:values}
    console.log(State);
    return State;
});

//3.Alert each of the key - value pairs of the myState object.
_.each(myState, function(value, key){
    console.log('Alert:'+key+': '+value);
});
//4.Return just the names of the businesses from the businesses array.
var businessNames = _.pluck(businesses, 'name'); console.log(businessNames);

//5.Return the object containing “Microsoft”.
var codeCentral = _.where(businesses, {name: 'Microsoft'});
console.log(codeCentral);
//6.Return all the businesses that are located in Bellevue in a new array.
var bellVue = _.where(businesses, {city: 'Bellevue'});
console.log(bellVue);
//7.Sort the businesses based on the city in ascending order and return the array.
var sortedNames = _.sortBy(businesses, 'name');
console.log(sortedNames);
//8.Have all the business names be “Coding Dojo” without altering the original array. [hint: use _.map()]
var theDoj = _.map(businesses, function(business){
    business.name = 'Coding Dojo';
    return business});
console.log(theDoj);
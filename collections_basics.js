
var _ = require('underscore');
var Backbone = require('backbone');
var $ = require('./node_modules/jquery/dist/jquery.min')

var TravelTimeModel = Backbone.Model.extend({
    defaults:{

    }
});

var TravelTimeCollection = Backbone.Collection.extend({
    model: TravelTimeModel,
    url: "http://wsdot.com/Traffic/api/TravelTimes/TravelTimesREST.svc/GetTravelTimesAsJson?AccessCode=e901f9a2-936d-49fb-90a7-304f89fb5431"
    
});


var travelTimes = new TravelTimeCollection();
var tT = travelTimes.fetch();

console.log(tT);
console.log(tT.length());
console.log(tT.at(30));
var first = tT.then(function(){
    _.first(tT)});
console.log(first);
var ten = tT.then(function(){
    _.where('CurrentTime', '10');
})
console.log(ten);
var bV = tT.then(function(){
    _.first('Name', 'Bellevue-Seattle via 520 (WB PM)');
})
console.log(bV);


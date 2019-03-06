var StackModel = Backbone.model.extend({
    defaults: {
        Title: null,
        Instructor: null,
        Language: null
    }
});

var stack1 = new StackModel({Title: 'Ruby on Rails', Instructor: 'Michael Choi', Language: 'Ruby'});
var stack2 = new StackModel({Title: 'MEAN', Instructor: 'Michael Choi', Language: 'Javascript'});
var stack3 = new StackModel({Title: 'Django', Instructor: 'Patrick Swayze', Language: 'Python'});
var stack4 = new StackModel({Title: 'Swyft', Instructor: 'Swyftee McGee', Language: 'iOS'});
var stack5 = new StackModel({Title: 'ReactJS', Instructor: 'Angulord', language: 'Javascript'});

console.log(stack1.get(Title));
stack4.set('Instructor', 'Mongod');
console.log(stack4.get())
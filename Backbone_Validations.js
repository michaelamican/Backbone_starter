var BookModel = Backbone.Model.extend({
  defaults: {
    title: null,
    author: null
  },
  validate: function(attrs, options){
    if (!attrs.author){
      return "Book must have an author";
    }
  }
});
var escapedTitle = malware.escape('title');
var escapedAuthor = malware.escape('author');
var myBook = new BookModel({title: "Charlotte's Web"});
myBook.on('invalid', function(model, error){
  alert(model.get('title')+" found to be invalid. Reason: "+error);
});
myBook.save();
});
var malware = new BookModel({title: "<script>alert('gotcha!')</script>"});
console.log(malware);
console.log(myBook);
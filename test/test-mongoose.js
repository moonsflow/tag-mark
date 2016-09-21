var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bookmark');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('connected!!');

  var websiteSchema = mongoose.Schema({
    title: String,
    url: String,
    hasStar: Boolean,
    dateAdded: Date,
    tags: [String]
  });

  var Website = mongoose.model('Website', websiteSchema);


  var gcf = new Website({ title: 'gcf', url: 'http://www.greenclimate.fund', hasStar: false, dateAdded: new Date(), tags: ['gcf']});
  gcf.save(function (err, website) {
    if (err) return console.error(err);
    console.dir(website);
  });

  console.dir(gcf);
});

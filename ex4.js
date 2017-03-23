var request = require('request-promise');
var fs = require('fs-promise');
var filename = 'toomany.html';


var urls = [
  'https://en.wikipedia.org/wiki/Futures_and_promises',
  'https://en.wikipedia.org/wiki/Continuation-passing_style',
  'https://en.wikipedia.org/wiki/JavaScript',
  'https://en.wikipedia.org/wiki/Node.js',
  'https://en.wikipedia.org/wiki/Google_Chrome'
];

var urlPromises = [];


//Get promises for each url
urlPromises = urls.map(function(item) {
  return request.get(item);
});



Promise.all(urlPromises)
  .then(function(buffers) { //buffers is the array

    buffers.forEach(function(i, idx) {  //as many things are there are in buffers, do it that many times
      return fs.writeFile(idx  + '.html', i);  //i think this i changes from buffers[0], buffers[1]
    });
  })
  .catch(function(err) {
    console.log("Something went wrong");
    console.log('Because', err.message);
  });

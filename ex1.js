// var fs = require('fs');
var fs = require('fs-promise');

var filename = 'file1.txt';

fs.readFile(filename)
  .then(function(buffer) {
    var contentString = buffer.toString();
    console.log(contentString.toUpperCase());
  })
  .catch(function(err) {
    console.log('Something went wrong.');
    console.log(err.message);
  });




// Original Version
// var fs = require('fs');
//
// var filename = 'file1.txt';
//
// fs.readFile(filename, function(err, buffer) {
//   if (err) {
//     console.log('Something went wrong.');
//     console.log('Because: ', err.message);
//     return;
//   }
//   var content = buffer.toString();
//   console.log(content.toUpperCase());
// });

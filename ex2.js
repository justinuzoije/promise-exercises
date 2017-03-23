// var fs = require('fs');
var fs = require('fs-promise');

var filename = 'file1.txt';
var outputFilename = 'input.txt';


// Documentation style
fs.readFile(filename)
  .then(function(buffer) {
    var fileContents = buffer.toString();
    // console.log('Original string is: ', fileContents);
    //return fileContents;
    return fs.writeFile(outputFilename, fileContents);
  })
  
  .catch(function(err) {
    console.log('Something went wrong.');
    console.log('Because: ', err.message);
  });


// fs.readFile(filename)
//   .then(function(buffer) {
//   var fileContents = buffer.toString();
//   console.log('Original string is: ', fileContents);
//   })
//
//   .writeFile(outputFilename, fileContents)
//     .then(function(buffer) {
//       console.log('It worked!');
//     })
//
//   .catch(function(err) {
//     console.log('Something went wrong.');
//     console.log('Because: ', err.message);
//   });




// var fs = require('fs');
//
// var filename = 'file1.txt';
// var outputFilename = 'input.txt';
//
// fs.readFile(filename, function(err, buffer) {
//   if (err) {
//     console.log('Something went wrong.');
//     console.log('Because: ', err.message);
//     return;
//   }
//   var content = buffer.toString();
//   fs.writeFile(outputFilename, content.toUpperCase(), function(err) {
//     if (err) {
//       console.log('Something went wrong.');
//       console.log('Because: ', err.message);
//       return;
//     }
//   });
// });

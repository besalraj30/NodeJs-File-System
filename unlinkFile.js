

//delete a file in a asynchronous way

var fs = require('fs');

var filename = 'delete1.txt';

fs.unlink(filename, (err) => {
if (err) 
throw err;

console.log('File deleted successfully');
});




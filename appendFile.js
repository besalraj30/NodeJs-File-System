
//appending to the file Asynchronously

var fs = require('fs');

var data = "This data will be appended at the end of the file.";

fs.appendFile('sample.txt', data , (err) => {

if(err) 
throw err;

console.log('The data was appended successfully');

});
let sum = 0;
for(let i=1; i<=5; i++){
    sum = sum + i;
}
  
// Prints the sum

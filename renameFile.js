//renaming a file asynchronously

var fs = require('fs');

fs.rename('sample1.txt', '1_sample.txt', (err) => {
if (err)
throw err;
console.log('File renamed successfully');
});
console.log("This method is Asynchronous");

let sum = 0;
for(let i=1; i<=5; i++){
    sum = sum + i;
}
  
// Prints the sum
console.log('Sum: ', sum);
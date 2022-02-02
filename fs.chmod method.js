

//providing permissions to a file


// fs.chmod() method
  
// Import the filesystem module
const fs = require('fs');
  
// Grant only read permission to user
console.log("Granting only read access to user");
  
fs.chmod("Example13.txt", 0o400, () => {
  // console.log("\nReading the file contents");
  // console.log(fs.readFileSync("Example13.txt", 'utf8'));
  
  // console.log("\nTrying to write to file");
  // try {
  //   fs.writeFileSync('Example13.txt', "This file has now been edited.");
  // }
  // catch (e) {
  //   console.log("Error Code:", e.code);
  // }
  
  // Grant both read and write permission to user
  console.log("\nGranting read and write access to user");
  fs.chmod("Example13.txt", 0o600, () => {
    console.log("Trying to write to file");
    fs.writeFileSync('Example13.txt', "This file has now been edited.");
  
    console.log("\nReading the file contents");
    console.log(fs.readFileSync("Example13.txt", 'utf8'));
  });
});
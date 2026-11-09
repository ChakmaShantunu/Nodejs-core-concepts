
const fs = require("fs");

fs.writeFileSync("./Output/temp.txt", "this is a temp file");
console.log('temp file created');

if(fs.existsSync("./Output/temp.txt")) {
    console.log("File is in store");
    fs.unlinkSync("./Output/temp.txt");
    console.log("File deleted");
} else {
    console.log('File is not in store');
}
// fs.unlinkSync()
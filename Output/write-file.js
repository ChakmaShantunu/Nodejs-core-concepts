const fs = require("fs");
const content1 = "This is the day of 3rd november \n it is awesome";
try {
    fs.writeFileSync("./Output/test-sync.txt", content1);
    console.log("File Written");
} catch (error) {
    console.error(error.message);
}
console.log("Finished");
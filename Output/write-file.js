const fs = require("fs");
const content1 = "This is the day of 3rd november \n it is awesome";
try {
    fs.writeFileSync("./Output/test-sync.txt", content1);
    console.log("File Written");
} catch (error) {
    console.error(error.message);
}
console.log("Finished");

const content2 = "This is to \n asynchornus file";
fs.writeFile("./Output/test-async.txt", content2, (error) => {
    if(error) {
        console.error(error.message);
    } else {
        console.log("File written asynchornusly");
    }
});

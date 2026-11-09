
const { error } = require("console");
const fs = require("fs");

fs.writeFileSync("./Output/temp.txt", "this is a temp file");
console.log('temp file created');

if (fs.existsSync("./Output/temp.txt")) {
    console.log("File is in store");
    fs.unlinkSync("./Output/temp.txt");
    console.log("File deleted");
} else {
    console.log('File is not in store');
}

try {
    fs.unlinkSync("./Output/temp.txt");
} catch (error) {
    console.error("Error: file error");
}
// fs.unlinkSync()

fs.writeFile("./Output/temp2.txt", "another temp file", (err) => {
    if(err) return console.log("Error");

    console.log("Another temp file created");

    fs.unlink("./Output/temp2.txt", (err) => {
        if(err) {
            console.error(Error);
        } else {
            console.log("Temp2 file deleted");
        }
    })
});
const fs = require("fs");

console.log("Start reading...");

try {
    const data = fs.readFileSync("./data/entries/diary.txt", "utf-8");
    console.log("File Content:");
    console.log(data);
} catch (error) {
    console.error(error.message);
}
console.log("Finished");



const { error } = require("console");
const fs = require("fs");
console.log("Start reading...");

fs.readFile("./data/entries/diary.txt", "utf-8", (error, data) => {
    if(error) {
        console.error("Error happened: ", error.message);
    }
    console.log("File Content:");
    console.log(data);
});

console.log("This runs immediately - no blocking");
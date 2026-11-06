const fs = require("fs");

fs.writeFileSync("./Output/app.log", "Application Started\n");
console.log("File Created");

const logEntry1=  `${new Date().toISOString()} user logged in\n`;
fs.appendFileSync("./Output/app.log", logEntry1);

const logEntry2=  `${new Date().toISOString()} data fetched\n`;
fs.appendFileSync("./Output/app.log", logEntry2);

const logEntry3=  `${new Date().toISOString()} user found\n`;
fs.appendFileSync("./Output/app.log", logEntry3);

console.log("Append done");
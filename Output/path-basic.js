const path = require("path");

console.log("Current file info: \n");
console.log("Filename: ", __filename);
console.log("Directory: ", __dirname);

console.log("\n" + "-".repeat(50) + "\n");

const filePath = "/shantunu/documents/nextlavel.pdf";
console.log("Analysing path: ", filePath, "\n");

console.log("Dirname:", path.dirname(filePath));
console.log("Extension:", path.extname(filePath));
console.log(
  "Joined Path:",
  path.join("documents", "books", "science.pdf")
);
console.log(
  "Resolved Path:",
  path.resolve("documents", "books", "science.pdf")
);
console.log("Parsed Path:", path.parse(filePath));
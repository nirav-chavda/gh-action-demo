const fs = require('fs');

console.log("\nFile Contents of file before append:",
    fs.readFileSync("sample.txt", "utf8"));

fs.appendFile("sample.txt", "\nWorld", (err) => {
    if (err) {
        console.log(err);
    } else {
        // Get the file contents after the append operation 
        console.log("\nFile Contents of file after append:",
            fs.readFileSync("sample.txt", "utf8"));
    }
});
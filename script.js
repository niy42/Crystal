// const name = process.argv[2];
// console.log(`Hello ${name}`);

// const fs = require("fs");

// console.log("Reading file...");

// const content = fs.readFileSync("./script.js", "utf-8");

// console.log("File content:");
// console.log(content);

// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// // const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,6}$/;
// const email = process.argv[2];
// if (!email) {
//   console.log("Please provide an email address");
// } else if (!emailRegex.test(email)) {
//   console.log("Invalid email address");
// } else {
//   console.log(`${email} is valid`);


//   /^[A-Za-z0-9]+@[A-Za-z]+.[A-Za-z]+$/
// }

const res = "@gmail";

// const regexWord = /^[^\s@]+@[^\s@]+\.[^\s@]+$/gi.test();

console.log(regexWord.test(res));

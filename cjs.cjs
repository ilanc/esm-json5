// see: https://github.com/json5/json5/issues/240
const json5 = require("json5");

let json = `{
  // comment
   a: 1,
   b: 1,
   c: 1
}`;
debugger; // single step into json5.parse() below to see which code node includes
console.log("json5.parse:", JSON.stringify(json5.parse(json)));

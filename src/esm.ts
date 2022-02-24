import json5 from "json5/dist/index.mjs";
let json = `{
  // comment
   a: 1,
   b: 1,
   c: 1
}`;
console.log("json5.parse:", JSON.stringify(json5.parse(json)));

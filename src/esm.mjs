// see: https://github.com/json5/json5/issues/240
import json5 from "json5";
// import { parse } from "json5";

let json = `{
  // comment
   a: 1,
   b: 1,
   c: 1
}`;
debugger; // single step into json5.parse() below to see which code node includes
console.log("json5.parse:", JSON.stringify(json5.parse(json)));
// console.log("parse:", JSON.stringify(parse(json))); // 'json5' is a CommonJS module??

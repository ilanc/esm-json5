"use strict";
exports.__esModule = true;
var index_mjs_1 = require("json5/dist/index.mjs");
var json = "{\n  // comment\n   a: 1,\n   b: 1,\n   c: 1\n}";
console.log("json5.parse:", JSON.stringify(index_mjs_1["default"].parse(json)));

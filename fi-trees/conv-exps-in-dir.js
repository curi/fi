const path = require("path");
const fs = require("fs");

const cwd = process.cwd()

const l = (...args) => { console.log(...args) }

l(`Converting all .s files in ${cwd} to SVGs and PNGs (as mermaid graphs)`)

fs.
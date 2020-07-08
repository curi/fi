#!/usr/bin/env -S node --harmony --unhandled-rejections=strict

import { convertMmdInDir, convertSInDir } from "./conv-files.mjs";

const main = async () => {
    convertSInDir(process.cwd())
    convertMmdInDir(process.cwd())
}

main();

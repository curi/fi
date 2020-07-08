// const path = require("path");
// const fs = require("fs");
import * as path from 'path';
import * as fs from 'fs';

import {parseWhitespaceTree, treeToMmd} from "./fi-parse-trees.mjs";
import { spawn } from 'child_process';
import { stderr } from 'process';
import { isFunction } from 'util';


const S_EXP_EXT = "sfi"


import winston from 'winston';
winston.configure({transports: [new winston.transports.Console()]})

const l = winston.info;

const filesInDir = (dirPath, predicate) => {
    return fs.readdirSync(dirPath, "utf8").filter(fpath => typeof predicate === "function" ? predicate(fpath) : true)
}

const mapOverFilesInDir = (dirPath, f, predicate) => {
    const files = filesInDir(dirPath, predicate)
    l(`Got file list: ${JSON.stringify(files)}`)
    const results = files.map(f)
    return results;
}


const mermaidFileTypes = ["svg", "png", "pdf"];


export const convertMmdInDir = async (dirPath) => {
    l(`Converting all .mmd files in ${dirPath} to formats ${mermaidFileTypes.join(",")} (via mermaid-cli)`)
    return await Promise.all(mapOverFilesInDir(dirPath, fpath => {
        const outputNameNoExt = fpath.replace(new RegExp(`\\.mmd$`), '')
        return Promise.all(mermaidFileTypes.map(outputType => new Promise((res, rej) => {
            const outFile = `${outputNameNoExt}.${outputType}`
            const p = spawn("npx", ["mmdc", "-i", fpath, "-o", outFile, "-t", "fi", "-s", "2"], {shell: true})
            p.stdout.on('data', d => winston.info(d.toString('utf8')))
            p.stderr.on('data', d => winston.error(d.toString('utf8')))

            p.on("exit", (c, s) => {
                if (c !== 0) {
                    return rej(new Error(`${p.spawnfile} ${JSON.stringify(p.spawnargs)} exited ${c}; status ${s}`))
                }
                l(`* converted: ${fpath} to ${outFile}`)
                return res(p.stdout)
            })
        })))
    }, fpath => (new RegExp(`\\.mmd$`).exec(fpath) || []).length > 0))
}

export const convertSInDir = (dirPath) => {
    l(`Converting all .${S_EXP_EXT} files in ${dirPath} to .mmd (mermaid graphs)`)
    return mapOverFilesInDir(dirPath, fpath => {
        const mmdFPath = fpath.replace(new RegExp(`\\.${S_EXP_EXT}$`), '.mmd')
        fs.writeFileSync(mmdFPath, treeToMmd(parseWhitespaceTree(fs.readFileSync(fpath, "utf8"))))
        l(`* processed ${fpath} -> ${mmdFPath}`);
    }, fpath => (new RegExp(`\\.${S_EXP_EXT}$`).exec(fpath) || []).length > 0)
}

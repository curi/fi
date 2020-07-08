#!/usr/bin/env -S node --harmony --unhandled-rejections=strict

import { convertMmdInDir } from "./conv-files.mjs";

convertMmdInDir(process.cwd())

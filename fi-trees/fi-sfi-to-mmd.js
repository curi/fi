#!/usr/bin/env -S node --harmony --unhandled-rejections=strict

import { convertSInDir } from "./conv-files.mjs";

convertSInDir(process.cwd())

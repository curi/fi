#!/usr/bin/env bash

TEX_FILES=$(git ls-files | grep '^docs/' | grep '\.tex$')

if [ "$TEX_FILES" != "" ]; then
    echo "$TEX_FILES" | xargs -n 1 ./runTexMake.sh
else
    echo "No .tex files have changed since the last git commit."
fi

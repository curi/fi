#!/usr/bin/env bash

find . -print | grep '\.md$' | xargs grep -iL "^layout:"

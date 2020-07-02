---
layout: page
title: youtube-dl
parent: Utilities
---

## Max's youtube-dl script

this requires `aria2` to be installed

```bash
#!/usr/bin/env bash

youtube-dl -f 'bestvideo[width>=1920]+bestaudio' --external-downloader aria2c $1
```

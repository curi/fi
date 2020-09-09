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

## Modified script from JM to mirror a youtube channel (curi's in this case)

**note: I modified this somewhat to be more modular, I haven't fully tested it much. caveat emptor.**

```bash
#!/usr/bin/env bash

AUDIO_ONLY="false"
# e.g. ARCHIVE_LOCATION="$HOME/Downloads/curi-yt-archive"
ARCHIVE_LOCATION="/path/to/save/location"
mkdir -p "$ARCHIVE_LOCATION"  # create dir w/ graceful fail

FORMAT="bestvideo[width>=1920]+bestaudio"
FFMPEG="true"  # this will do nothing but we need to give some program to --exec to run

if [[ "$AUDIO_ONLY" == "true" ]]; then
    FORMAT="bestaudio"
    FFMPEG="ffmpeg -i {}  -codec:a libmp3lame -qscale:a 0 {}.mp3 && rm {} "
    DL_AUDIO_SUFX="-audio"
fi

ARIA2C_EXPANSION=""
if which aria2c >/dev/null 2>&1 ; then
    ARIA2C_EXPANSION="--external-downloader aria2c"
fi

cd $ARCHIVE_LOCATION
# can try `--no-check-certificate` if you have issues
youtube-dl --download-archive "$ARCHIVE_LOCATION/downloaded$DL_AUDIO_SUFX.txt" \
    --no-post-overwrites -i -x -f "$FORMAT"  \
    https://youtube.com/channel/UCOyCX1UYR7mJQmm8TXrGlhA \
    -o "%(title)s_%(id)s.%(ext)s" --exec "$FFMPEG" \
    $ARIA2C_EXPANSION
```

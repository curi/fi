---
title: Structural changes to how this site works
date: 2020-08-13
layout: post
---

I've made some structural changes under the hood - particularly using jekyll collections to group stuff. I've tried to keep all the permalinks the same and things.

Previously the `just-the-docs` theme accessed everything via `site.html_pages` which was slower to compile and more of a pain to do category based things.

Also, by default documents in `_posts` didn't show up anywhere, which I wanted to fix.

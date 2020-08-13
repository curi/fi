---
title: Posts
cat_root: posts
has_children: true
layout: page
permalink: /posts/
---

{% assign pages = site.posts | reverse %}

{% include list_pages.html pages=pages %}
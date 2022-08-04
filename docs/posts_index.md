---
title: Posts
cat_root: posts
has_children: true
layout: page
permalink: /posts/
nav_order: 1
---

{% assign pages = site.posts | reverse %}

{% include list_pages.html pages=pages sort_by_date=true %}
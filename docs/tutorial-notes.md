---
title: Tutorial Notes
layout: page
has_children: true
cat_root: tutorials
permalink: /notes/
---

I am currently being tutored by [Elliot Temple](https://elliottemple.com).

Currently every session has been streamed via YouTube. [playlist](https://www.youtube.com/playlist?list=PLKx6lO5RmaetREa9-jt2T-qX9XO2SD0l2).

The current schedule is 3x 2hr sessions per week.

## Notes, exercises, etc

{% assign pages = site.tutorials | reverse %}
{% assign tut_notes = pages | where_exp: "p", "p.lesson > 0" %}
{% assign misc_notes = pages | where_exp: "p", "p.lesson == nil" %}

### Tutorial Notes

{% include list_pages.html pages=tut_notes %}

### Misc Notes

{% include list_pages.html pages=misc_notes %}

## Some things I made a note of to talk about at some stage (mostly discussed at some point)

- [flux constitution amendment PR](https://github.com/voteflux/flux/pull/41)
  - explicitly stating goals means crits should be:
    - why it doesn't meet goal
    - why goal needs to be changed
  - time mgmt: delegate, ref library of criticism, faq answers
    - can explicitly ask why it important / good use of time
    - why should this be prioritised - give opportunity to let ppl give a reason
  - ppl
- [3 min into podcast - dawkins and memes](https://curi.us/podcast/meme-misconceptions)
- [motivation / feeling bad]()
- family

---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: Home & Index
nav_order: 1
---

## Recent Posts

{% assign all_posts = site.documents | where_exp: "d", "d.date != nil" %}
{% include list_pages.html pages=all_posts sort_by_date=true limit=14 %}

## FI Links (external)

* <https://fallibleideas.com/> - Main FI site, maintained by Elliot Temple
* <https://curi.us/> - Elliot Temple's blog / forum hybrid
* <http://fallibleliving.com/> - Maintained by Justin Mallone
* <https://conjecturesandrefutations.com/> - Alan Forrester's blog
* <http://justinmallone.com/> - Justin Mallone's blog

### TCS (external)

* <https://curi.us/2289-the-history-of-taking-children-seriously> - Elliot Temple's post on the history of TCS

## Collections

{% assign cs = site.collections %}
{% for c_name in site.collections_order %}
  {% assign c2 = site.collections | where_exp: "col", "col.label == c_name" | first %}
  <h3> {{ c2.title }} </h3>
  {% include list_pages.html pages=c2.docs sort_by_date=true %}
{% endfor %}

## Other Posts (no category)

{% assign dated_pages = "" | split: ',' %}
{% assign undated_pages = "" | split: ',' %}
{% for page in site.pages %}
  {% if page.title %}
    {% if page.date %}
      {% assign dated_pages = dated_pages | push: page %}
    {% else %}
      {% assign undated_pages = undated_pages | push: page %}
    {% endif %}
  {% endif %}
{% endfor %}

{% assign dated_pages = dated_pages | sort: "date" | reverse %}
{% assign undated_pages = undated_pages | sort: "title" %}

### Dated

{% include list_pages.html pages=dated_pages %}

### Undated

{% include list_pages.html pages=undated_pages %}

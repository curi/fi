---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

## All Posts (sorted by date)

<ul>
{% assign all_pages = site.pages | sort: 'date' | reverse %}
{% for page in all_pages %}
  <li><a href="{{ page.url }}">{{ page.title }}</a></li>
{% endfor %}
</ul>

## FI Links

* <https://fallibleideas.com/> - Main FI site, maintained by Elliot Temple
* <https://curi.us/> - Elliot Temple's blog/forum hybrid
* <http://fallibleliving.com/> - Maintained by Justin Mallone
* <https://conjecturesandrefutations.com/> - Alan Forrester's blog

### TCS

* <https://curi.us/2289-the-history-of-taking-children-seriously> - Elliot Temple's post on the history of TCS

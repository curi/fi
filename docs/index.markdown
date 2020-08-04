---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

## FI Links

* <https://fallibleideas.com/> - Main FI site, maintained by Elliot Temple
* <https://curi.us/> - Elliot Temple's blog/forum hybrid
* <http://fallibleliving.com/> - Maintained by Justin Mallone
* <https://conjecturesandrefutations.com/> - Alan Forrester's blog

### TCS

* <https://curi.us/2289-the-history-of-taking-children-seriously> - Elliot Temple's post on the history of TCS

## All Posts

{% assign all_pages = "" | split: ',' %}
{% for page in site.pages %}
  {% if page.title %}
    {% comment %}
    {% unless page.date %}
        {% assign page.date = "2020-06-01" | string_to_date %}
    {% endunless %}
    {% endcomment %}
    {% assign all_pages = all_pages | push: page %}
  {% endif %}
{% endfor %}

{% assign all_pages = all_pages | sort: "date" | reverse %}

<ul>
{% for page in all_pages %}
  <li><a href="{{ page.url }}">{% if page.date %}{{ page.date }} - {% endif %}{{ page.title }}</a></li>
{% endfor %}
</ul>

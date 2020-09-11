

## discussion forum thoughts

Discussion forums are important. Practically, most public discussion happens via discussion forums. The vast majority of *enduring* conversations take place on these forums, and last beyond the life of the website (e.g. via archive.org).

Despite the significance of d.forums, they have not significantly improved beyond newsgroups. The basic model is still: a starting post begins a thread, and discussion takes place via a list of replies. This is still the simplest and safest model used.

Some other models are used from time to time but they have big downsides. Facebook allows replying directly to other replies to a maximum depth of 1. Reddit has a full tree structure but has poor support for navigating that structure. Reddit also locks old posts by default, positively biases comments early in the thread history, and negatively biases deep comments.

There are lots of problems with how comments and posts are ranked, too. In general there's no good way to algorithmically find the *best* posts, though you can find the posts people like to click on, or like to reply to, or want to promote (by upvoting). These aren't useful things if you're interested in the best *discussion*.

What are the things that can offer an improvement over current forums?

### High value features

* Replies to replies
* optional metadata on related posts (sort of like replying to multiple comments)
* Excellent support for quoting, emphasis, links, footnotes
* Copying a message copies emphasis and other markup
* Quotation inline by default (not a top/bottom post system -- that should be an optional way to *render* posts)
* Modest support for rich content
* Anonymous posting / easy to use aliases
* View mode: as tree (ideally with multiple sorting methods)
* View mode: as list (like curi.us)
* Edit history fully public
* Server side rendering
* Rendering method supports arbitrarily deep discussions (even if there's something like pagination going on)
* Ctrl+F **always** works (no collapsing)
* Archives easy and accessible

### Features with some positive value

* A reply should be able to kick off a new thread
* Ideally copying from the page automatically adds a later of quotation
* Reputation and history for all posters (including disposable anons)
* Verified authorship when desired
* Automation compatible design (e.g. traversal/analysis)
* Context provided by default when permalinking
* Collapsible tree nav (never by default)
* Easy to traverse history of a reply
* Cryptographic ID support (e.g PGP/simple ECDSA)
* optional "undo" feature for like 1min after hitting "post", like gmail sending email
* good preview of post
* draft posts for prelim discussion *(low confidence -- why bother?)*

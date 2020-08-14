---
title: Developing a Conversation/Writing Metadata
fi_link: https://groups.google.com/g/fallible-ideas/c/vuPXExzy71o
date: 2020-08-14
parent: Posts
layout: post
---

I want to use some standardised symbology to flag important metadata in stuff I say. I think this would be helpful for
me while writing and learning, and it will be helpful for anyone reading what I write because it provides useful
information. Adding this sort of information in English: is cumbersome, makes standards harder to design, and is
susceptible to misinterpretation and drift. Using symbols is much simpler. Symbols are: easier to design, less
intrusive, makes it clearer that rules and patterns both exist and are being used, and allow us to work with higher
level concepts easily. They also let us easily use programming to generate info/stats about one's posts (here or on a
blog).


I am very interested in feedback on this -- it isn't very meaningful if I'm the only one using it.


Why would something like this be good or help discussion / writing quality? If we do this well the patterns will have
reach and thus many benefits. Authors benefit from considering what they're writing as they're writing it. This would
give them more opportunities to notice errors and fix them early, and makes reflecting on one's writing a background
task which improves explicit reflection done later on. Readers benefit from additional data about which parts are
important, precise, or essential (and which parts aren't). Readers providing criticism benefit because they can more
effectively target problem areas and judge the utility of criticism. Standard patterns also provide general information
about the effort the author made or their intent; they add info about how important the topic is to the author and
other reflections of the authors goals. It also helps people prevent suppressing errors dishonestly by giving them a way
to say the thing without worrying too much.


I have a preliminary list of things it should flag.

* Overreaching - straightforward I think; I tried this at least once on the list using [OR]. One should probably
  consider *why* they're bothering to do the thing if it's marked with [OR], but flagging is a first step, at least. (I
  personally found overreaching 'hard to come to terms with' and I expect that to be prototypical.)

* Social Dynamics - marks things we say where we don't know why; when there's a reason we don't understand for why we
  said it; etc. It's a particular type of hedging with extra info. I think it could work well at the *end* of
  sentences; like the last thing you type before you press <enter>.
  
  * Could this make people care less b/c they don't have to worry as much? Solution: it's not an excuse for what you
    say, it's an indication you doubt that it's genuine/good/honest/etc.

* Confidence in quality of claims - It provides context for feedback and criticism. Criticising someones 2/10 over their
  8/10 doesn't make much sense if you think there are problems with both. It indicates where the higher marginal
  utility feedback is (provided the author didn't miss something).

* Explicit grouping - Trying to express a complex or new idea can be hard, sometimes. This is just an explicit
  additional tool to help remove grammar overhead, it might also point out issues w/ grouping or sentence structure
  during the writing process.

* Approximation - `~` works well for words, but is confusing with phrases. Adding "or something like that" feels
  tiresome when I want to speak casually about something.

* Hedging - similar to approximation (always the same?); indicates the author wouldn't be surprised if something was
  wrong, that they have a low barrier to doubt the statement, or that it plays a nonessential role, etc. Depending on
  context it could indicate that relevant criticism is very valuable (quick/easy error correction), or not very
  valuable (because it's nonessential).


How should we integrate it in what we write? I think adding it directly to the text is best, and standardising it means
we can develop patterns to avoid metadata getting in the way. It's even less intrusive if we keep the symbols short.


Should we change anything about how we write to make patterns/symbols more useful or easier to read? I think there are
some things we could do (easily!) that would provide a lot of benefit or make it easier to standardise a symbology.

* One sentence, one line. I do this regularly when I write posts in markdown and it makes some things much easier
  (there isn't much downside). You can move lines up/down easily. It makes lines that are too long very obvious. You
  can split a sentence over two+ lines to make it easier to write and parse. Sentences always start on a new line.
  Example: https://raw.githubusercontent.com/XertroV/fi/master/docs/_tutorials/2020-08-13-hw.md
  
   * We can add symbols to the beginning of lines like this for medium-grain resolution.
   * It is easier to quote ppl sometimes, too, esp. if replying in the middle of a paragraph.

* We could standardise lists, layout, sections, etc (like markdown but more specific). I'm not sure what sort of
  variation FI posts have on this already, though.

* Are there other changes we should make?


I am developing some ideas on what sort of symbols to use and where. I'll share those soon. I think `[4/10]` at the
beginning of a line would be a decent place to start with flagging confidence (though square brackets can be
overloaded).


If we had good standards, should they be required or enforced? I don't think so. One reason is that some people write
well enough that this information isn't helpful, this is a small case, though. More broadly: we have some standards
that are enforced, e.g. quotations and subject lines (adding `was:`). These both have to do with meaning, content,
topic, etc. Crucial things. The symbol types I'm suggesting provide ancillary data, so they should be voluntary and not
be enforced.


Would you use something like this?

Is it worth developing more?

Would you find it useful if other ppl used it?

Is it obvious I've tried some particular patterns with this email? Can you guess what they are?


I have two things on my todo list about this idea:

* Write a paragraph or some stuff about "Who should use this, when is it useful?"
* Develop some draft ideas about particular symbols to use.

----

Things I forgot to put in the FI post (will add to follow up):

- categories for things, like [AL] for analyzing lies (no reason not to take it beyond the material ET provided in the OP)

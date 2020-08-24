---
title: Draft | Song Analysis - Santa Claus is Coming to Town
layout: post
date: 2020-08-23 10:00
parent: Posts
---

(Note: this is a partially complete draft, but I'm not sure I'm going to finish it. Written on 2020-08-17)

1. TOC
{:toc}

This is a popular Christmas song. I wanted to analyse it because I suspect the message it sends to children will be pretty awful.

Lyrics will be quoted once verse at a time then analysed, except the chorus which will be analysed at the start.

----

## Chorus

The song starts with this verse which appears 3 times in total.

> You better watch out<br />
> You better not cry<br />
> You better not pout<br />
> I’m telling you why<br />
> Santa Claus is coming to town

This verse is speaking directly to the listener and consists primarily of 3 threats. The singer then tells the reason they should do the specified action.

Grammatically, the threats have the form "You better (verb phrase)".

### implied words

The use of "better" is roughly a more urgent form of "should", however the normal form of this is "had better", as in "you'd better act like you believe in santa or you might embarrass your parents and then they'll punish you."

Each threat can be seen to have an implied "or else" (or similar phrases) at the end. This isn't strictly necessary, though, and it'll be omitted here.

### definitions

* had: "To cause or procure to be; to effect; to exact; to desire; to require."
* watch: "To be attentive or vigilant; to give heed; to be on the lookout; to keep guard; to act as sentinel."
* better:
  * **TODO: is this an appropriate defn?**
  * "In a superior or more excellent manner; with more skill and wisdom, courage, virtue, advantage, or success;"
  * "More correctly or thoroughly."
* out: "In its original and strict sense, out means from the interior of something; beyond the limits or boundary of somethings; in a position or relation which is exterior to something; -- opposed to in or into. The something may be expressed after of, from, etc. (see Out of, below); or, if not expressed, it is implied; ..."

### parse trees and commentary

For the first threat, "you [had] better watch out":

```
had :: verb
  you :: pronoun
  better :: adverb
  watch :: verb
    out :: adverb
```

This threat is coercing the listener to pay care and attention to their behaviour, lest the (as yet unspoken) consequences affect them.

The second two threats:

```
had :: verb
  you :: pronoun
  better :: adverb
  {cry,pout} :: verb
    not :: adverb
```

These threats are coercing the listener to prevent themselves from crying or pouting.

"Better" in all these threats is indicating that the quality of the listener's performance must be exceptional.
"Better" also modifies "had", not the other verb in the clause, which can be seen via clauses like "You had better sing better."

The threats together advise the listener to be vigilant of their behaviour and to avoid two examples of actions considered unacceptable or undesirable by parents.
They imply the listener should be vigilant of other behaviours too, which is foreshadowed here and developed later.

## Chorus 2

This verse precedes the chorus on it's second and third appearance.

> He sees you when you’re sleeping<br />
> He knows when you’re awake<br />
> He knows if you’ve been bad or good<br />
> So be good for goodness sake

### parse trees and commentary

```
sees :: verb
  he :: pronoun
  you :: pronoun
  when :: preposition
    are :: verb
      you :: pronoun
      sleeping :: noun
```

```
knows :: verb
  he :: pronoun
  when :: preposition
    are :: verb
      you :: pronoun
      awake :: adjective
```

```
if :: subordinating conjunction
  knows :: verb
    he :: pronoun
  or :: conjunction
    have :: verb
      you :: pronoun
      been :: verb
        bad :: adjective
    [have] :: verb
      [you] :: verb
      [been] :: verb
        good :: adjective
```

These first three lines use Santa as their subject and cast him as an omniscient being.
They primarily tell the listener that they're powerless; that there's no possibility of fooling Santa or otherwise avoiding judgement because he knows and sees all.

```
be :: verb
  so :: adverb
  good :: adjective
  for :: preposition
    [goodness's] :: noun
      sake :: noun
```

In this case the prepositional phrase "for [goodness's] sake" modifies the verb "be" because it provides a reason for the 'being'.
The reason relates to the complement of 'be' but does not modify it.
This line impels the listener to "be good for [goodness's] sake".


## The Rest of the Song

(CHORUS)

> He’s making a list,<br />
> Checking it twice,<br />
> Gonna find out who’s naughty or nice.<br />
> Santa Claus is coming to town

(CHORUS 2)

(CHORUS)

> With little tin horns, little toy drums<br />
> Rooty toot toots and rummy tum tums<br />
> Santa Claus is coming to town<br />
> And curly head dolls that toddle and coo<br />
> Elephants, boats, and kiddie cars too<br />
> Santa Claus is comin’ to town

> Then kids in Girls and Boy land will have a jubilee<br />
> They’re gonna build a Toyland town<br />
> all around the Christmas tree<br />
> So! You better watch out, you better not cry<br />
> Better not pout, I’m telling you why<br />
> Santa Claus is comin’ to town

(CHORUS 2)

(CHORUS)

----

Although not explicitly stated, there is a strong implication that Santa is crudely righteous throughout.
He is omniscient, judgemental of those children who do bad things (repeated three times via the chorus), carrying wonderful toys, and *coming*.

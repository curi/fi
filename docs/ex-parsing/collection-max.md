---
layout: page
title: Parsing Exercises | Max's Collection
parent: Parsing Exercises
date: 2020-06-29
---

1. TOC
{:toc}

## He was waiting for the rain to stop.

```
(was :: verb
    he :: pronoun
    (waiting :: gerund
        (for :: preposition
            ((to stop) :: infinitive 
                (rain :: noun
                    the :: det
                ) :: subject
            )
        )
    )
)
```

* 'to stop' - could be (preposition,noun) but a noun would mean something like 'a stop' could be put in there, doesn't feel right => infinitive makes more sense

## Nobody's ever been bothered by being dead.

implied => Nobody [has] ever been bothered by being dead

```
(bothered :: verb, linking
    (has :: aux verb
        been :: aux verb
        ever :: adverb
    ) :: adverbial
    nobody :: pronoun
    (by :: preposition
        (being :: gerund
            dead :: adjective / object of 'being'
        )
    ) :: adverbial
)
```

* 'ever' adverb on 'has' 
  * -> usage: can remove 'ever', 'has ever', but not just 'has'
  * -> 'ever been to the moon?' -> implied 'have you'

bothered as root
nobody under bothered

* bothered becomes a linking verb bc

relative pronoun -> clause function as modifier 

## The main difference between object and complement in English grammar is that the object is what is affected to the action of the subject while the complement is a part of a clause that usually follows the verb and adds more information about the subject or object.

I found this on a grammar website.

{<[difference] between [x and y]>} is that {[x is [what is [affected to [action of [subject]]]]]} while {[y is [a part of [a clause that [usually follows the verb]]] that [follows the verb] and [adds info about [subject]]]}.

### prelim structure

```
is that
    The main difference between object and complement
        in English grammar
    while
        the object is
            what is affected to
                the action
                    of the subject
        the complement is
            a part of a clause
                that
                    and
                        usually follows the verb
                        adds more information
                            about 
                                the subject or object
```

Note: who the hell was paid to write that?

```
main grammar tree goes here if I ever do this
```

## I know about it (Objectivism) in name only (and only since learning about FI, and because of FI)

Note: I can definitely write this better (it's from [early learning: objectivism]({{ "../../pub-drafts/early-learning-objectivism.md" | relative_url }})). Left it like this for purposes of analysis, partly because I said 'and because'

## I can explain.

(added after doing the one below)

TODO: check aux verb tree structure

```
explain :: verb
  can :: aux verb
    i :: pronoun
```

## I can explain the acronyms if need be.

```
explain :: verb
    can :: aux verb
        i :: pronoun
    acronyms :: noun
        the :: det
        if :: prep
            need :: verb
                be :: aux verb
```

## It is a poor argument of my superior reason, that I am unable to make justice be apprehended and felt in the most necessary cases, without the intervention of blows.

'It' refers to 'that'. 'that' is a fwd reference for 'I am unable to make justice be apprehended and felt in the most necessary cases, without the intervention of blows'.

Could be reordered to: 'That I am unable to make justice be apprehended and felt in the most necessary cases, without the intervention of blows, is a poor argument of my superior reason.'  (note: unsure of commas, making 'without the intervention of blows' parenthetical feels right; alternatively no comma before 'without' might work too)

[It (X)] is a [bad argument] of [my ability to make good arguments]. X: [I can't do justice when necessary without violence]

The sentence is interesting because it's about a hypothetical but doesn't explicitly mention it.

'that' doesn't relate an adverb clause b/c ...

```
that :: subordinating conjunction
    is :: verb
        it :: pronoun, referring to the subordinate clause
        argument :: noun
            a :: det
            poor :: adj
            of :: prep
                reason :: noun
                    my :: det
                    superior :: adj
    am :: verb
        I :: pronoun
        unable :: adj
            to make :: adverb infinitive
                be :: verb
                    justice :: noun
                    apprehended :: adj
                    without :: prep
                        intervention :: noun
                            the :: det
                            of :: prep
                                blows :: noun
```

from <https://www.websters1913.com/words/That>

> 4. As a conjunction, that retains much of its force as a demonstrative pronoun. It is used, specifically: --
>
> (a) To introduce a clause employed as the object of the preceding verb, or as the subject or predicate nominative of a verb.

for (a): it is introducing a clause which is the subject of a preceding verb via 'it'

idea for omission: "... superior reason, [the fact] that I ..."

'that' could be modifying 'argument'

the form of the sentence is `{dependent coordinating clause}, that {subordinate clause}`

the purpose of the sentence is to focus on the _quality of the argument_, not on what it is.

I *think* `I am unable ... of blows` is the predicate nominative of `It` via `is`

----

#### similar sort of sentences:

> you'd be a bad king, Michael

`You` is a pronoun and forward reference to the noun `Michael`

> it is a smooth bird, the A380.

> it is a bad omen for his career, that he hasn't had a job since highschool.

`it` refers to the subordinate clause `he hasn't had a job since highschool`

> it is a thought I had, that school is boring

this has basically the same meaning (or, at least, a very similar meaning) as the past tense of "i think that school is boring".

some curious slightly different sentences:

* `it is a thought I'd had, that school was boring`
* `it is a thought I'd have, that school was boring`
* `it is a thought I had had, that school was boring`
* `I'd had the thought that school is boring`
* `I'd have had the thought that school is boring` (q: is this grammatically complete?)
* `school is boring; I'd've had that thought`

version that's a better demonstration?

> it is a thought shared by many, that school is boring

----

At the end of all that, I think I'm happy with the tree above.

## So Alice, I just wanted to add, this sentence would have a parenthetical if the point wasn't to be an example of a sentence with a parenthetical.

Note: I 

## you are done whether you fight or run.

(is this a correlative conjunction?)

```
are
    you
    done

```

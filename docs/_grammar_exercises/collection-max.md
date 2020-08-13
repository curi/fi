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

## (TODO) I know about it (Objectivism) in name only (and only since learning about FI, and because of FI)

Note: I can definitely write this better (it's from [early learning: objectivism]({{ "../../pub-drafts/early-learning-objectivism.md" | relative_url }})). Left it like this for purposes of analysis, partly because I said 'and because'

## Exercises done on 2020-07-27

## I can explain.

(added after doing the one below)

TODO: check aux verb tree structure

```
explain :: verb
  can :: aux verb
    i :: pronoun
```

or is it

```
explain :: verb
  i :: pronoun
  can :: aux verb
```

option 2 is better; `can` changes `explain`, but `I` is the subject of explain

## I can explain the acronyms if need be.

```
if :: conjunction
    can :: verb
        i :: pronoun
        explain :: infinitive
            acronyms :: noun (object)
                the :: det
    be :: verb
        need :: noun
```

## It is a poor argument of my superior reason, that I am unable to make justice be apprehended and felt in the most necessary cases, without the intervention of blows.

'It' refers to 'that'. 'that' is a fwd reference for 'I am unable to make justice be apprehended and felt in the most necessary cases, without the intervention of blows'.

Could be reordered to: 'That I am unable to make justice be apprehended and felt in the most necessary cases, without the intervention of blows, is a poor argument of my superior reason.'  (note: unsure of commas, making 'without the intervention of blows' parenthetical feels right; alternatively no comma before 'without' might work too)

[It (X)] is a [bad argument] of [my ability to make good arguments]. X: [I can't do justice when necessary without violence]

The sentence is interesting because it's about a hypothetical but doesn't explicitly mention it.

### alt structure 1

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
                justice :: noun
                be :: aux verb
                    and :: conj
                        apprehended :: verb
                        felt :: verb
                without :: prep
                    intervention :: noun
                        the :: det
                        of :: prep
                            blows :: noun
```

note: ~it's optional to put a `[be]` in front of `felt`, but apprehended needs one.~ not true, justice could be felt and apprehended. well, could you say `make justice felt and apprehended`? `make justice felt` feels fine.

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

### similar sort of sentences

> you'd be a bad king, Michael

`You` is a pronoun and forward reference to the noun `Michael`

----

> it is a smooth bird, the A380.

----

> it is a bad omen for his career, that he hasn't had a job since highschool.

`it` refers to the subordinate clause `he hasn't had a job since highschool`

----

> it is a thought I had, that school is boring

this has basically the same meaning (or, at least, a very similar meaning) as the past tense of "i think that school is boring". (edit: `i thought that school is boring` is obviously closer to that past tense)

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

> it is a versatile word, that which clarifies the dependency of a pronoun on the other side of the sentence.

### back to the main sentence

~At the end of all that, I think I'm happy with the tree above.~ wait, nope, not yet

is the structure basically the same as `it's good, that you came`?

TODO: come back to this later and think about other ways of doing the tree

hmm, the quote is from Godwin's *Political Justice* I think (can't remember where I picked it). that was published in 1793, but websters 1828 doesn't have a definition of `that` as a conjunction!

### alternate structure 2

idea: `that` is two-way link with `it`

```
is
    it :: pronoun relative pronoun (linked to 'that')
        that :: relative pronoun / pro-sentence (linked to 'it')
            am :: verb
                I :: pronoun
                unable :: adj
                    to make :: adverb infinitive
                        justice :: noun
                        be :: aux verb
                            and :: conj
                                apprehended :: adj
                                felt :: verb
                        without :: prep
                            intervention :: noun
                                the :: det
                                of :: prep
                                    blows :: noun
    argument :: noun
        a :: det
        poor :: adj
        of :: prep
            reason :: noun
                my :: det
                superior :: adj
```

### alt structure 3

```
[;] or [and] :: conj
    is :: verb
        it :: pronoun, referring to the clause marked by 'that'
        argument :: noun
            a :: det
            poor :: adj
            of :: prep
                reason :: noun
                    my :: det
                    superior :: adj
    that :: pronoun labelling the clause
        am :: verb
            I :: pronoun
            unable :: adj
                to make :: adverb infinitive
                    justice :: noun
                    be :: aux verb
                        and :: conj
                            apprehended :: adj
                            felt :: verb
                    without :: prep
                        intervention :: noun
                            the :: det
                            of :: prep
                                blows :: noun
```

### issues identified in tutoring 20

`apprehended` and `felt` are verbals

```
to make :: infinitive
    be :: linking verb
        justice :: n
        and
            apprehended :: participle, adj
            felt :: participle, adj
```

note: `to` is a particle

`be` is linking verb, objects are apprehended and felt so can't be finite verbs, they're participles (adjectives)

linking verbs: big diff *must* have a complement, and complement can be an adjective (as well as a noun).

## So Alice, I just wanted to add, this sentence would have a parenthetical if the point wasn't to be an example of a sentence with a parenthetical

Note: I actually wrote this sentence recently

```
[root]
    Alice :: pronoun
    [] :: parenthetical, relative to entire sentence
        wanted :: verb
            I :: pronoun
            just :: adverb
            to add :: noun infinitive
    so :: conjunction, primary clause omitted, introduces concluding statement
        have :: verb
            would :: modal verb (helper)
            sentence :: noun
                this :: determiner
            parenthetical :: noun
                a :: det
                if :: prep
                    was :: verb
                        point :: noun
                            the :: det
                        not :: adverb
                        example :: noun
                            to be :: adjective infinitive
                            an :: determiner
                            of :: prep
                                sentence :: noun
                                    a :: det
                                    with :: prep
                                        parenthetical :: noun
                                            a :: det
```

alt:

```
so :: conj
    [primary clause omitted]
    [node/sub-root]
        Alice :: pronoun
        I just wanted to add :: parenthetical
        this sentence [...] :: clause
```

### tut 20

parenthetical can put under the verb -> modifies the sentence

have is infinitive -- the 'having' isn't happening; it's the 'woulding'

pretty much alwasy the first verb is finite verb, second verb is infinitive (often without the 'to')

subject finite-verb non-finite-verb (as object of finite verb; particle, gerund, or infinitive)

> So Alice, I just wanted to add, this sentence would have a parenthetical if the point wasn't to be an example of a sentence with a parenthetical

```
if :: conj
    would :: modal verb (helper)
        sentence :: noun
            this :: determiner
        have :: verb
            parenthetical :: noun
                a :: det
        [] :: parenthetical, adverbial
            so :: ??
                Alice :: pronoun
        [] :: parenthetical, adverbial
            wanted :: verb
                I :: pronoun
                just :: adverb
                to add :: noun infinitive
    was :: verb
        point :: noun
            the :: det
        not :: adverb
        to be :: adjective infinitive
            example :: noun, object of 'to be'
                an :: determiner
                of :: prep
                    sentence :: noun
                        a :: det
                        with :: prep
                            parenthetical :: noun
                                a :: det
```

## you are done whether you fight or run

(is this a correlative conjunction?)

```
whether :: conj
    are :: linking verb
        you :: pronoun
        done :: adjective
    you :: pronoun
        or :: conj
            fight :: verb
            run :: verb
```

> TUT20: mistake: fight/run as verb - must be verbals -- participles

> TUT20: comment after the fact: can put `you` under `or`; `or` is making a group and playing a verb role (verb pharse), so noun under the group is okay. If we could group `(or fight run)` and have a child that might work but can't do that with these trees; putting under root node

alt:

```
whether :: conj
    are :: linking verb
        you :: pronoun
        done :: adjective
    or :: conj
        fight :: verb
            you :: pronoun
        run :: verb
            [you] :: pronoun
```

alt treating correlative conjunction as one unit:

```
... whether ... or ... :: correlative conj
    are :: linking verb
        you :: pronoun
        done :: adjective
    fight :: verb
        you :: pronoun
    run :: verb
        [you] :: pronoun
```

## both rugby and football are popular

```
are :: linking verb
    and :: conj
        both :: determiner
        rugby
        football
    popular :: adjective
```

```
are :: linking verb
    both :: determiner
        and :: conj
            rugby
            football
    popular :: adjective
```

```
are
    both ... and ...
        rugby
        football
    popular
```

```
are
    both :: pronoun
        and
            rugby
            football
    popular
```

## to be or not to be, that is the question

```
[;] or [and] :: conjunction
    or :: conj
        to be :: noun infinitive
        to be :: noun infinitive
            not :: adverb
    is :: verb
        that :: pronoun / pro-sentence
        question :: noun
            the :: determiner
```

## i'm going to steal that kid's lollipop whether you like it or not

```
am :: verb
    I :: pronoun
    going :: aux/helper verb (modal?)
    to steal :: noun infinitive
        lollipop :: noun
            kid's :: adjective
                that :: determiner
    whether :: conj
        or :: conj
            like :: verb
                you :: pronoun
                it :: pronoun, indirect ref to stealing
            not :: adverb
                [you don't like it] :: implied replacement for 'not'
```

* am - finite verb
* going is complement of am
* to steal modifying going
* (that kid) is the noun being made possessive, but diagram is unclear

## you will find uninvited family in the drawing room; not only your 'long lost' brother, but also his new (and insufferable) wife

outline: `{you will find family}; {not only [your bother], but also [that same brother's wife]}

```
[;] :: conjunction
    find :: verb
        you :: pronoun
        will :: modal verb
        family :: noun
    but :: conj
        brother :: noun
            your :: determiner
            only :: adjective
                not :: adverb
            'long lost' :: adjective, quotes imply hidden implications
                lost :: adjective
                    long :: adverb
        also :: adverb
        wife :: noun
            his :: determiner
            [and] :: conjunction, parenthetical, produces adjective phrase
                new :: adjective
                insufferable :: adjective
```

alt:

```
[;] :: conjunction
    find :: verb
        you :: pronoun
        will :: modal verb
        family :: noun
    not only ... but also ... :: correlative conj
        brother :: noun
            your :: determiner
            'long lost' :: adjective, quotes imply hidden implications
                lost :: adjective
                    long :: adverb
        wife :: noun
            his :: determiner
            [and] :: conjunction, parenthetical, produces adjective phrase
                new :: adjective
                insufferable :: adjective
```

## so you see, Mr. Bond, neither the British Secret Service nor God can save you now

## we should be persuaded by neither eloquence nor vitriol, but instead by those arguments for which, despite detractors' best efforts, there are no unanswered criticisms

## no sooner had he written the eighth example than he began to reconsider adding more

## learning is not a one-off exercise, but an unbounded journey

## we could either stop at ten exercises or write more

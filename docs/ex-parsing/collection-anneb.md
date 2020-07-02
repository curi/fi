---
layout: page
title: Parsing Exercises | AnneB's Collection
parent: Parsing Exercises
date: 2020-06-29
---

1. TOC
{:toc}

# From Anne B's *dependency grammar trees* post to FI

## Let's talk about a different way

```
(let :: verb
    us :: pronoun
    (talk :: verb
        (about :: preposition
            (way :: noun
                a :: det
                different :: adj
            ))))

(let :: v
    ([you])
    (talk us (about (way a different)))
)
```

## You can find more stuff which is similar or related and work on that.

```
(and :: conj
    (find :: verb
        you :: pronoun
        can :: verb  -- helper verb, need to revisit 
        (stuff :: noun
            more :: adj)
        (is :: verb
            which :: pronoun
            or :: conj
                similar :: adj
                related :: adj))
    (work :: verb
        (on :: prep
            that :: n))
```

-- note from Anne B's trees: denote implied words
-- 'realtive pronoun' -- conjunction role

## Assuming you're an adult, there are some things you're already good at judging.

```
(assuming :: subordinating conjunction
    (are :: verb
        there :: adverb
        (things :: noun
            some :: determiner
            (are :: verb
                you :: pronoun
                already :: adverb
                (good :: noun
                    (at :: preposition
                        judging :: gerund)
                )
            ) :: adjective clause
        )
    )
    (are :: verb
        you :: pronoun
        (adult :: noun
            an :: determiner)
    )
)
```

* 'good::adj at::prep judging::gerund' - can 'good at' be a preposition?
  * 'she speaks good English' -> good is an adj on English
  * wait, good modifies 'at judging' which acts as NP. Correction: preposition phrases act as adj or adv. 
  * in 'dark red apple': 'dark' is an adverb on 'red', so any adj can be an adv when modifying another adj.
  * 'She is good with horses': 'good with' is a prepositional phrase on 'is'; similar meaning to 'she handles horses well', 'well' is adverb modifying 'handles'
  * idea: good is a noun (you are already good), and 'at judging' is an adj prep phrase governing 'good'
  * you::pronoun are::v already::adv good::n at::prep judging::gerund
    * this *clause* is then used as an adjective (googled 'clause as an adjective' and apparently adjective clauses are a thing)
    * problem: 'you are already skilled at judging' -- skilled is an adj.
    * can adjective prepositional phrases modify other adjectives? if so they act as an adverb, but no mention of that in /grammar, is it important?
  * could treat 'good at' as a preposition
* how do you tie in 'assuming you're an adult'? prepositional phrase? modifies the rest of the sentence.
* 'there are some things' - no noun before verb
* // opened up thread on FIGG
* // ET mentions assuming being root
* 'assuming' could be replaced with 'if' => conjunction
* should have googled assuming - it's a conj
* check against Anne's tree: looks good!!!

## There are some areas where you're confident, competent, skilled, etc.

### attempt 1

```
(are :: verb, linking
    there :: adverb
    (areas :: noun
        some :: adjective)
    ([are] :: aux verb, linking
        [you] :: pronoun
        confident :: adj
        competent :: adj
        skilled :: adj
        etc :: adverb
        which :: adverb
    )
)
```

### Differences with Anne's tree

* Anne has 'where' under 'areas', but 'where' is an adverb? (not an adjective; is "where you're ..." an adverb phrase?)
* "where you're ..." refers to the areas, so should be under that
* verbs are not children of nouns
* areas is linked to the properties "confident, ..." via where
* 'where' feels more like a proposition
* we could replace 'where' with 'wherein' and meaning is preserved (wherein is an adverb, but means 'in which'; a preposition and pronoun/determiner)
* 

### 'in which' variant: there are some areas in which you're confident, ...

```
(are :: verb, linking
    there :: adverb
    (areas :: noun
        some :: adjective
        (in :: preposition
            which :: determiner ['areas']
            ([are] :: verb, linking
                [you] :: pronoun
                confident :: adj
                competent :: adj
                skilled :: adj
                etc :: adverb
            ) :: adjective clause
        )
    )
)
```

This matches Anne's structure, i.e.:

```
(are :: verb, linking
    there :: adverb
    (areas :: noun
        some :: adjective
        (where :: adverb???
            ([are] :: verb, linking
                [you] :: pronoun
                confident :: adj
                competent :: adj
                skilled :: adj
                etc :: adverb
            ) :: adjective clause
        )
    )
)
```

### Attempt 2

```
(are :: verb, linking
    there :: adverb
    (areas :: noun
        some :: adjective
        ([are] :: verb, linking
            [you] :: pronoun
            where :: adverb
            confident :: adj
            competent :: adj
            skilled :: adj
            etc :: adverb
        ) :: adjective clause
    )
)
```

* can an adverb take an object/compliment?
* Why are the called the same thing as adverbs that don't take one?
* idea: where is on second 'are', which transforms 'you are confident, ...' into an adjective clause
  * what was it before that? noun clause? can you have a clause/phrase without a type (a type being noun, verb, adjective, adverb, etc)

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
                ) :: object
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

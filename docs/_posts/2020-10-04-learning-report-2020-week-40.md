---
title: "Learning Report: 2020, week 40"
layout: post
date: 2020-10-04
parent: Learning Reports
category: Learning Reports
---

## tutorials

This week Elliot and I had a practice discussion (over both tutorials) about whether genes can play a significant role in one's thoughts. I felt like it was valuable for a few reasons:

- I haven't had many discussions like that. I felt like we got to the important bits much quicker than 'normal' conversations (if 'normal' conversations ever get to the point).
- By keeping a tree of the conversation it became clearer the role each person played to the 'breadth' of the discussion (how many forks were in the tree). It was also clear how I was contributing to that a lot more than Elliot was.
- The 'challenges' Elliot put to me (in response to the ideas I was putting forward) were relevant and they either teased out required information or asked me questions that, when I attempted to answer, pointed out issues with the idea.

## a ~break

- I took a few days last weekend and early last week and focused on less intense things, like speedrunning.
- I think I need to get better attuned to my capacities and manage how I spread that out a bit better.

## speedrunning SSOL

- the WR is down to 1:49.5 (not mine), I haven't improved beyond my 1:51.8.
- It seems like I usually take an hour or so to get into things enough to consistently get below 2 minutes on completed runs, so there's some overhead to making attempts.
- I think I might have found a new route
  - It could save ~3 seconds.
  - I've practiced it a bit and gotten sub-2 minutes so I think there's a chance it's better than the current run.
  - It's about 3.5% shorter and doesn't seem to be too zig-zaggy (which is important because of the way momentum works in the game)
  - I want to practice more before making it public b/c I could get a sub-1:49 with it (which would mean WR)
- I'm still not close to ~perfection yet (and neither is AC). My best run has 3 fumbles I think, and AC's 1:49 is actually behind my 1:51 in parts.
  - AC's 1:49 being behind mine is significant b/c the nature of the game is that ~any time saves he has earlier can be carried through, and he was +1.5s ahead at most before falling behind, and finished 1.5s ahead, too.
    - that means the theoretical lowest time with that route is at most ~1:48.0, maybe 1:47.x

## writing

- I didn't do much writing last week, which I'm unhappy about

## reading

- despite starting FoR and picking up *The Choice* again, I haven't continued reading
- I started one of Heinlein's books (*Have Space Suit--Will Travel*) some weeks ago, too, that I haven't continued
- My brother and I talked about reading some trashy literature together and talking about it. That might help provide some impetus (even if *Stargazer Alien Barbarian Brides #1* is useful for nothing else)
  - It's more relevant for him than me (he makes content about literary analysis and stuff). Example: *[Annihilation (2018) and Stalker (1979): Similarities, Symbolism, and Themes](https://www.youtube.com/watch?v=7eTG4Mw1dNU)*

## code

I have done some work on two bodies of code I'm unfamiliar with, one in *dart* which I haven't used before besides super simple stuff. I was fairly productive considering.

I've been experimenting for a while with how to do datastructures in languages like Python (or dart). Both can be fairly loose with their type system but have recent extra features that help. One thing I'm noticing is that my code has a comparably low nesting-factor. Excluding code that looks like nesting due to formatting, I often have no nesting outside of e.g. a try/catch block for the entire function body.

I think this is directly due to using immutable data structures, pure functions, and first class functions. Doing things like avoiding `null`/`None` as valid types helps too -- this way you can e.g. return a list of results (of say type `Maybe int`) instead of handling error cases in a more cumbersome confusing way. It makes code easier to analyse, extend, predict, sequence, etc.

## goals

I think it's a problem I don't review goals daily (sometimes I think about 'what do I need to do today', but that's about it).

I started using lifetick as goal tracking software. I'm not sure if it's good or will help, yet.

## monthly learning report

I need to do a monthly LR for september. I meant to do it this weekend but didn't (I'm writing this one on Monday).

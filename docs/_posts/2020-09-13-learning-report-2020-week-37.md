---
title: "Learning Report: 2020, week 37"
layout: post
date: 2020-09-13
parent: Learning Reports
category: Learning Reports
published: true
---

(NOTE: not yet complete)

## Tutorials

* 37
  * **todo**
* 38 (paths forward)
  * **todo**
* 39
  * **todo**

## Other things

* Bit more haskell practice / study. Haven't made any significant progress in HFFP
* Started reading FoR, and am taking notes. (_notes/fabric-notes.md on github)
* I meant to go back to *the choice* but haven't this week
* **todo**

### A Slower Speed of Light - WR speedrun

* I got [WR (0:2:30) in *A Slower Speed of Light* (SSOL)](https://www.youtube.com/watch?v=rGs7hFcq2jI) [speedrun.com](https://www.speedrun.com/ssol)
  * First attempt at like a "fast casual" run was 4:04 (better than first recorded time on speedrun.com)
  * best I found on twitter was like 2:5x
    * There are ~4 or so unique ways SSOL starts the suggested tweet. I googled them in quotes with various prefixes like "It took me 00:02"
      * this example finds a quote on Twitter (from @CharlesEnos) from 28 May 2014
        > It took me 00:02:47 to break the #threeminuteworldtime http://gamelab.mit.edu/slower  #slowlight #openrelativity
    * (there were some social-integration features b/c SSOL it was released in 2012)
  * Watched previous runs to figure out routes
  * Tried some more experimental routes that didn't seem to work well
  * Before doing much practice I wanted to get an image of the map for routing purposes
    * I used uTinyRipper to extract assets from the game file (Unity)
    * Loaded these assets in Unity 2017 and found the map and figured out (guessing/intuition)
      * how to load the right map
      * enough to show the orbs + fences in one image (search for one, ctrl+a; search for the other -> bg items are grey, searched items are visible, selected items are highlighted) [image](https://imgur.com/a/VWpZN5h)
      * I loaded these into photoshop (initially) to draw the previous routes over them (with timing info for WR)
      * Photoshop can't tell you the length of a path easily, so I moved to illustrator. The lengths for routes taken were roughly:
        * 3rd - 2:47 - 6711
        * 2nd - 2:40 - 6543
        * ~1st - 2:35 - 6385 (note: this isn't my WR run, I measured an earlier run that was 2:35)
        * Although the game penalises sharp changes in velocity (the character has lots of inertia), seems like shorter routes still matter
    * I practiced the route in 2:47 first to get a feel for it. Then I practiced the old WR route in 2:40.
    * practicing these and having the map let me make a few novel improvements:
      * I don't get the orb that's immediately in front of you when you start the game (-1s)
      * After the side-run of 13 orbs (bottom middle of my map) I get an extra orb -- the one between the mushrooms and the wall. You have a lot of velocity which you need to shed anyway, so it's quicker (-1s?)
      * In my WR 2020-09-13 run I think I had better-than-previous technical movement, but there are still obviously sloppy things (like going into the final run of 14 orbs -- I miss one and have to go back)
      * Doing the final 14 *well* saves >3s on it's own, if not more. Missing any one of them is quite costly
  * taking it further
    * I used [*Engauge Digitizer*](https://github.com/markummitchell/engauge-digitizer/) to get a [CSV of points of the orbs](https://imgur.com/a/MoIDmWK) - I wanted to use some route-finding software later to try and improve the route
    * Idea: use travelling salesman + genetic to find a faster route?
      * Have done a bit on this in python and haskell (separately)
        * Fun but not a great use of time, no results from 12hrs+ work

It was maybe ~6hrs till I beat/equalled the WR and ~8 to get a time of 2:30. Most of that time was spent doing the Unity/Route stuff.

## post ideas

* what would it mean for meta discussion to be bad? is it compatible with fallibilism?
* philosophical oracles aren't useful (related to FoR)
* postmortem on my short argument against moral relativism
  * comparison to logical positivism argument in fabric ch1p6
* approval of outcomes is no way to run a democracy
* does all progress involve finding new universalities?
  * maybe just increasing reach of humanity's body of knowledge?
  * fabric ch1,22:30
* fabric ch1,27:00-27:59,p12
  * seems wrong: bit with planets and the claim to only see facts that aren't explained by GR
    * postmortem: audible reading hard to follow grammatically - easier in print, multiple commas make it difficult. misinterpreted audiobook, clarified after checking print copy.
* is 'replication strategy' a good label for the rational/static descriptors on rational/static memes?
* finish santa claus is coming to town analysis
* how do you represent not-X in CF and CR?
  * CR perspective: not-X the idea that X is false, which is to say that X is criticised
  * CF / yesno pespective: not-X ... how is it different, how does it relate to goals?
* finish dialog on fi-light
* heart stuff
* healthypi
* how is meta used socially? (like: introducing meta topics)
  * equal or higher status?
    * rejection of meta => (optimistically) rejection of social stuff? (maybe like a bit good?)
    * objections to meta => defensive b/c of social stuff?
    (not good)
      * what about some equivalence of action to goodness? does anything like that come in to it?
* Justin/Max metaphors of violence thing
* Chat log excerpts
* Why you should contribute via subscribestar
* Why (and under what conditions) should you take someone seriously?
* retrospective on 3 months
  * learning report for this week + this month
* What does it mean for a philosopher to be consistent? (both WRT their behaviour and their values)
* "picking fights" - can they be good?
* haskell over scheme - importance of data types

From FoR notes:

* offtopic - FoR ch2,25:00 maybe -- beginning to talk about "tangible" photons and what it means to be in the same universe -> thinking about the "what to do with way out there ideas" post
  a. maybe this section answers the q "what do you think a universe is?"
  b. **todo**: retrospective on how my thinking has changed;
    - gone from
      - questions like "how do i talk about this"
      - and behaviours like 'writing a post, not knowing how to deal with it, writing a wrapper post so I can do something at least'
      - feeling overwhelmed by some stuff and not knowing how to proceed
    - to (starting to, not mastered)
      - being capable of knowing what i want to say and whether I can say it,
      - what I need to do re: organisation of ideas and research,
      - how to break down ideas to evaluate them earlier in my process,
      - how to ask questions to get better answers,
      - better methods of discussion,
      - better methods of thinking,
      - appreciation for own static memes and a small arsenal of methods to combat them^1
      - knowing what to focus on to communicate ideas better/properly
      - how to understand what people are trying to say/communicate
      - how to evaluate texts/samples quicker for qualities and errors
      - how to manage my own time better and more productively
      - how to think and feel about myself and my actions/inactions
      - how to think about my own problems and life problems generally
      - how to make more reliable progress towards goals
      - how to choose better goals (and why to choose them)
      - how to reason about other people and social dynamics / motivations
      - how to read text in multiple critical frames, including social dynamics
      - how to choose topics, subjects, and appropriate attention for them

1: i use metaphors of violence, but particularly wrt my own static memes. how does this compare to metaphors of violence wrt criticism?

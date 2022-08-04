---
title: "Hooking - Learning Technique"
layout: post
date: 2020-11-15 20:00
parent: Posts
categories: "learning"
---

[OP on curi.us](http://curi.us/2380#18666)

Hooking is a useful technique for learning.

The name is taken from programming; a "hook" is the relationship and entry point for new functionality. That functionality is added after the original software is written (usually by a different programmer).

Hooks are common in programming. In user interface frameworks like React or Vue, hooks to lifecycle events can be made. Those hooks let the programmer add code that runs before or after meaningful things happen, like before the page is loaded, or after all the assets (like images) have been displayed on the screen. When using Git, hooks like "prepare-commit-msg" and "post-update" allow programmers to run scripts before and after some of the steps in Git's procedures.

In programming, the hooks that are chosen are at important breakpoints. Roughly, they are the last and first moments around a significant event. There are guarantees about things that have happened and things that will (or might) happen -- something possible only because significant breakpoints were chosen.

When learning, we can do something similar, where we can introduce ideas based on noticing some event. Adding hooks to certain actions, thoughts, etc allow us to introduce ideas at that specific point, without the overhead of trying to keep the idea in mind.

One example is forgetting to use the word 'that'. Maybe you notice [that] you sometimes omit 'that' and you think that your writing is less clear because of it. If you choose a breakpoint like 'when proofreading I needed to reread a sentence', you can hook the idea 'check for missing implied words'. You're not constantly looking for implied words, but you are ready to add that behaviour when you hit that breakpoint.

The words 'breakpoint' has a meaning in both programming and CR, and I want to clarify that I'm using it in the CR sense. It aligns fairly intuitively with the programming sense, but with programming you act on a breakpoint differently (e.g. debugging via stepping through code and looking at memory). That idea is not specific enough.

In CR, a breakpoint is a boundary on a spectrum (or pseudo-spectrum) which allows you to make yes/no judgements about IGCs and to effectively deal with continuous/unbounded data.

With hooking, the spectrum[1] that these breakpoints segment* is your thoughts and actions, the idea is the relevant methods of feedback and error correction, and the goal is to avoid the relevant error and to continue avoiding it.

It's usually easy for programmers to make good guesses about which hooks are useful (and thus good guesses for which breakpoints are useful). The important thing is that the programmer has good explanations for why hooking here in this context is worthwhile. Sometimes there are explanations with reach, like why hooks between initialization and runtime logic are useful.

It's harder to tell where hooks should go (where to put breakpoints) when it comes to learning. To make good judgements about where hooks go requires that you have a good explanation. That, in turn, requires you understand how to detect, correct, and ultimately avoid those errors. This means hooking is hard to use well when you're just starting to learn a topic. to judge that you need enough knowledge about both learning generally and the topic that you're studying. This means it's good for stage 2 learning (consistency).

Making a bad judgement about where hooks should go can have high cost. One reason to use hooks is that you want to conditionally introduce behaviour with a high overhead. That behaviour doesn't need to be high overhead on its own; maybe it's only high overhead when you have 3 other ideas in mind that you're focusing on. If you're triggering a badly placed hook (at a bad breakpoint) then you will often have the overhead of considering error correction that doesn't actually help. If you don't realise that the hook is badly placed quickly then the cumulative cost can hold your learning back.

1: 'Spectrum' and 'segment' are (I think) specific to 1d shapes. You'd probably need more than one dimension to represent all possible thoughts and actions. However, that distinction isn't really relevant here; the principle is the same.

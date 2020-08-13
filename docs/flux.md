---
title: Flux
has_children: true
date: 2020-07-18
layout: page
cat_root: flux
permalink: /flux/
---

## notes re IBDD / pricing

1. policy always must be suggested by someone, so I don't think any ballot/issue would be _completely_ orphaned; there's opportunity cost to propose it.
2. Consider some situations WRT quality of policy and voting populations:
   1. If policy is good and non-contentious then we want as little resources spent on it as possible so we can spend time/energy/focus/resources on more important issues (note non-contentious is part of the assumption so far)
   2. if policy is bad but nobody takes it seriously ("give max $1b per year") then it'll get caught in waiting period for implementation, so there's a chance to react to it and prevent it being enacted
   3. if it's bad policy that only 1 person wants then there's low demand for it, so highly delegated individuals don't get very much reward for giving it up. if those ppl don't give up their votes then there won't be enough votes to pick up at auction to push it through.
   4. the auction is split up into 5+ segments (say N=5), with 1/N * total-votes-for-auction in each pool/segment, so 20% in this case. If these segments were 1 day in length the first day we'd see Bad-Person-1 bidding and getting 100% of that pool (that's 100% of 20%). When those bids are made the bidder needs to also declare yes or no for the bill (that bidder can't retract bids after that or change their yes->no in that period, only replace and increase the bid). The goal of this is good pricing signals, so people have 80% of the auction total left over 4 pools (minus any votes that have already been cast so aren't in the auction-total). You can see how this makes preventing bad legislation MUCH harder to pass b/c Bad-Person-1 has to show their hand early which makes it much much easier to prevent them. There is a tragedy-of-the-commons style issue here, but it's not that big an issue if it's cheap to prevent ppl like Bad-Person-1.

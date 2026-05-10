---
layout: ../../layouts/BlogPost.astro
title: "Does divestment move risk? A null result from Norway's $1.7T fund"
description: "Theory says institutional divestment should raise firm-level volatility. 181 exclusions by the world's largest sovereign wealth fund say otherwise — and the bounds on the true effect are very tight."
date: 2026-02-01
status: draft
paper: divestment-volatility
readingTime: "10 min"
tags:
  - divestment
  - ESG
  - volatility
  - GARCH
  - sovereign wealth
thumbs:
  - src: /posts/divestment-volatility/rolling-variance-ratio.png
    alt: Rolling variance ratio around NBIM exclusion announcements (paper Figure)
---

The case for ESG divestment usually rests on two theoretical channels. The first is well-known: pulling capital out of a firm raises its cost of capital and depresses its share price. The second is less discussed but mechanically just as old: removing a large investor narrows the marginal-investor pool, which standard equilibrium-pricing arguments say should *raise* the firm's idiosyncratic volatility.

The first channel — cost of capital — was tested decisively against the largest natural experiment available, and Berk and van Binsbergen (2025) found nothing. This paper runs the same kind of test for the *second* channel — volatility — using the same natural experiment, and finds the same thing: nothing.

That is the headline. The interesting parts are *which* tests detect nothing, *how tightly* the null is bounded, and *what's left of the underlying theory* once both channels come up empty.

## The natural experiment

Norway's Government Pension Fund Global (GPFG) manages roughly $1.7T in assets and follows a well-publicized exclusion process. The Council on Ethics investigates a candidate firm, recommends exclusion to the Norges Bank Executive Board, and the Board makes a final decision that is publicly announced. Over the sample period this paper exploits, GPFG had excluded 181 individual firms.

Two features make this useful:

1. **The fund is genuinely large.** GPFG holds, on average, around 1.5% of global listed equity. When it exits a position, that is a non-trivial supply shock for the underlying firm.
2. **Exclusions split cleanly into two types.** *Product-based* exclusions (tobacco, certain weapons categories, thermal coal) trigger automatically on a firm's business activity, with no underlying scandal or governance event attached. *Conduct-based* exclusions are tied to specific ESG controversies — environmental damage, corruption, human-rights violations — that a researcher trying to isolate the divestment channel would have to disentangle from the news event itself.

The product-based subset is what makes this test possible. There is no confounding event; the *only* thing happening at announcement is the divestment itself. If volatility responds to divestment as a clean mechanism, you should see it here.

## What the GARCH test does

The cleanest first-pass test compares conditional volatility before and after the announcement. Fit a standard GARCH(1,1) to each firm's return series and compute the variance ratio across the announcement window:

$$
R_i \;=\; \frac{\frac{1}{T_{\text{post}}}\sum_{t \in \text{post}} \hat{\sigma}_{i,t}^2}{\frac{1}{T_{\text{pre}}}\sum_{t \in \text{pre}} \hat{\sigma}_{i,t}^2}.
$$

Under the null of no divestment effect, $R_i$ is centered at one. Under the theoretical prediction, $R_i$ should be reliably above one — particularly for the product-based subset, where there is no countervailing news.

It isn't. Across the full sample, across the product-based sub-sample, across the investigation period (when the Council on Ethics is reviewing the firm but no announcement has been made), the variance ratio is statistically indistinguishable from one. Sign-test versions and rank-test versions give the same answer.

![Rolling variance ratio around NBIM exclusion announcements (Figure from the paper). Left: all exclusions. Centre: product-based exclusions (the clean-divestment subset, with no underlying scandal). Right: conduct-based exclusions. Across all three panels the ratio sits below one in the post-announcement window, with the dashed line marking the no-effect benchmark.](/posts/divestment-volatility/rolling-variance-ratio.png)

A natural rebuttal: "GARCH(1,1) is too rigid; the real volatility process has a structural break that the GARCH model smooths over." So the paper runs a panel difference-in-differences specification with an event-window indicator and firm × month fixed effects, on raw realized volatility. The DiD coefficient is small and insignificant. Switching realized volatility for range-based volatility, or tightening the event window, does not change the conclusion.

## Why "fail to reject" is not enough

A standard difference-in-differences null result is hard to interpret. You did not reject — but is that because the effect is genuinely zero, or because your test is underpowered against an effect that is real but small?

The right tool here is an *equivalence test*, which inverts the standard hypothesis structure: rather than testing whether the effect equals zero, you specify a smallest effect size you would care about and test whether the true effect is *bounded inside* that interval.

Two-one-sided-tests (TOST) at conventional levels deliver tight bounds. With an equivalence margin set at one-tenth of the in-sample volatility standard deviation — a magnitude that would still be uneconomic from a practitioner's standpoint — the data tightly reject any effect outside that band. The true effect is not just statistically zero; it is *meaningfully* zero.

That is the difference between "we couldn't find it" and "it isn't there."

## Combined with the cost-of-capital null

If divestment did *neither* of the two things the theory predicts — neither raise the cost of capital (Berk and van Binsbergen 2025) nor raise idiosyncratic volatility (this paper) — then the question becomes: what *does* divestment do?

A few candidates remain on the table:

- **Reputational pressure on management.** This is a behavioral channel, not a pricing channel, and the announcement-effects literature does see modest evidence for it.
- **Coordination effects on other investors.** GPFG's exclusion lists are widely watched and explicitly used by other institutional asset owners as a screen. The pricing impact of *that* aggregated exit, rather than GPFG's individual exit, would show up in the long run rather than in announcement windows. The current data cannot rule this in or out.
- **Nothing measurable in financial markets.** This is the read I find hardest to argue against. The two cleanest pricing-theory predictions both fail. Whatever divestment is doing, it is not showing up in the prices.

The paper is careful not to over-claim. The null result is about the *Norwegian fund's exclusion mechanism*, in the *announcement window* and the *short-to-medium post-announcement window*, on *publicly traded equity markets*. It does not say divestment is ineffective for changing corporate behavior, nor that it is uninformative for end investors who care about non-pecuniary returns.

What it does say is that the textbook financial-economics case for divestment-as-a-pricing-tool is, on the best available evidence, empirically inactive.

## What I'd read next

- **Berk, Jonathan B., and Jules H. van Binsbergen (2025), "The Impact of Impact Investing."** The companion null. Same natural experiment, cost-of-capital channel, same answer.
- **Pástor, Ľuboš, Robert F. Stambaugh, and Lucian A. Taylor (2021), "Sustainable Investing in Equilibrium."** The cleanest theoretical statement of *both* the cost-of-capital and the volatility channels. Read alongside the two empirical nulls and decide for yourself.
- **Hartzmark, Samuel M., and Kelly Shue (2023), "Counterproductive Sustainable Investing."** A different cut at the same problem — argues that capital-allocation pressure on already-clean firms can have counterproductive effects.
- **Norges Bank Investment Management exclusion list.** Public. Reading through the case-by-case justifications is the best way to develop intuition about what GPFG is actually doing — and why it does not, mechanically, look like the kind of shock the theory imagines.

---

*The full paper is at [/papers/divestment-volatility.pdf](/papers/divestment-volatility.pdf). Working paper, 2026. Comments welcome — [simen.guttormsen@nmbu.no](mailto:simen.guttormsen@nmbu.no).*

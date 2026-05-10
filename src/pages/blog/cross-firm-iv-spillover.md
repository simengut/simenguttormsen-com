---
layout: ../../layouts/BlogPost.astro
title: "When one firm reports, the whole industry's options move"
description: "Option markets price an industry-wide uncertainty signal at every earnings announcement — and that signal carries information about the next firm scheduled to report."
date: 2026-03-15
status: draft
paper: cross-firm-iv-spillover
readingTime: "9 min"
tags:
  - options
  - implied volatility
  - earnings
  - spillovers
---

When a firm announces earnings, its own implied volatility moves — that's well-known and structurally obvious. The interesting object is what happens to *its peers*. If JPMorgan reports and Bank of America's at-the-money IV jumps half a vol, is that information transfer? Hedging flow? Index-level noise leaking through? Or just an artifact of all bank stocks tracking each other?

The answer in this paper is: it's information, it's industry-level rather than firm-level, and it lasts longer than you'd expect.

## The puzzle

A naïve regression of peer IV changes on announcer IV changes will pick up a strong correlation, but you cannot interpret it. The same earnings day might coincide with a Fed announcement, a macro print, a sector-rotating ETF flow — anything that moves all firms in the cross-section gets attributed to the spillover unless you net it out.

The cleanest way to net it out is to date-fix the regression. If the spillover *survives* date fixed effects, you are no longer picking up market-wide common shocks; you have something that varies *within a date*, across announcer–peer pairs.

The data set: U.S. single-name equity options, 2010–2024, paired with GICS-based industry classifications to define peer groups. For every announcing firm on every earnings date, every other firm in the same GICS sub-industry is a peer; the regression asks whether peer IV around the announcement window covaries with the announcer's IV move, holding the date constant.

The coefficient is positive and significant.

## Industry-level, not firm-specific

The next question is whether the spillover transmits a firm-specific signal — *"BoA reports, the news is bad, JPM gets re-priced"* — or an industry-wide one — *"BoA reports, the market updates its view of the whole bank-sector announcement season ahead"*. The two stories are observationally similar in pairwise data, but they diverge sharply once you control for an industry-date mean.

Add a fixed effect for `(industry × date)`. Now the regression is asking: among firms in the *same* industry on the *same* day, do peers closer to the announcer move more than peers further away?

The coefficient on the announcer-specific signal collapses. The signal is not running pair-by-pair; it is running industry-by-day. Whatever the option market is pricing, it is pricing it for the *whole industry at once*, not as a series of bilateral updates.

This is exactly the pattern you'd expect if the announcement updates beliefs about industry-wide announcement-season uncertainty rather than firm-specific fundamentals.

## The signal predicts forward

If the spillover is just a contemporaneous co-movement that decays away by the next session, it's not particularly interesting. The harder test is whether the size of an early-season spillover *forecasts* the IV behavior of peer firms when *they* report.

Two findings on that:

1. **Spillover persists into the peer's own announcement.** Peers that received a larger spillover when an early-reporter announced have larger IV moves at their own announcement, conditional on industry-date controls. The effect is concentrated in peers reporting shortly after — exactly where forward-looking information should matter most.

2. **The signal does not dissipate across the earnings season.** A typical "shock that gets absorbed" story would predict spillover effects fade as the season progresses and uncertainty resolves. The opposite happens: spillover-induced IV remains elevated through the late-reporting peers, consistent with the option market continuing to price unresolved industry-wide uncertainty until the season actually closes.

Together, these are not the dynamics of a bilateral information leak. They are the dynamics of an aggregate *industry-uncertainty premium* that the option market starts pricing as soon as the first relevant announcement lands.

## How to think about the mechanism

A clean way to summarize the result is in terms of the variance decomposition the option market is pricing. Write a peer firm's option-implied variance as

$$
\sigma^2_{\text{peer}} \;=\; \underbrace{\sigma^2_{\text{firm}}}_{\text{idiosyncratic}} \;+\; \underbrace{\sigma^2_{\text{industry}}}_{\text{industry-wide}} \;+\; \underbrace{\sigma^2_{\text{market}}}_{\text{macro}}.
$$

Date fixed effects net out $\sigma^2_{\text{market}}$. Industry-date fixed effects net out $\sigma^2_{\text{industry}}$. The spillover that survives date FE but vanishes under industry-date FE is, by construction, the *industry-wide announcement uncertainty premium* — and the data say that's where the action is.

The structural interpretation: investors learn something about industry-level earnings season uncertainty from the first firm to report, that information stays in the cross-section, and the option market repeatedly re-prices the remaining peers in light of it.

## What this means in practice

A few useful takeaways:

**For volatility surface modeling.** If you fit a peer firm's IV term structure during earnings season, you cannot treat individual peer announcements as independent draws. The market embeds an industry-level prior that updates with each early-season report. Models that ignore this will systematically misprice peers reporting later in the season.

**For event studies.** Standard market-model event-study residuals overstate firm-specific announcement responses for any peer firm that reports later in a clustered season. The "abnormal" IV move includes an industry-uncertainty component that has nothing to do with the firm itself.

**For traders.** This is not — to be clear — a directional vol-trading edge. The spillover is in the *level* of pricing, not in the cross-section of mis-pricing. Peers whose IV rises after an early-season announcement are not systematically mispriced; the market is updating correctly. The result is structural, not actionable.

## Caveats

Three things this paper deliberately does *not* claim.

**The signal is industry-specific, not market-wide.** The spillover does not generalize to cross-sector pairings. Bank announcements move bank options; they do not (in this framework) move tech options. Anyone treating earnings-season IV as a single market-level factor is throwing away the structure that matters.

**GICS is the right grouping for these tests, not necessarily the right one for prediction.** The paper uses GICS sub-industry as a peer definition because it is exogenous and reproducible. Trading-style models that use textually-derived or co-movement-derived peer groups will pick up different spillover magnitudes; the structural finding does not change, but the size of the effect will.

**The 2010–2024 sample covers a lot of regimes.** I do not split the analysis by macro regime in this paper — that's a deliberate choice to keep the headline result clean. Conditional patterns (e.g., spillover behavior during the 2020 COVID earnings season vs. the 2023 banking-stress quarter) are interesting but separate.

## What I'd read next

- **Patell, James M., and Mark A. Wolfson (1979 / 1981).** The original studies of option-price behavior around earnings; the empirical baseline that everything in this literature still echoes.
- **Dubinsky, Kaeck, and Seeger (2018), "Option Pricing of Earnings Announcement Risks."** Strong baseline on how single-name options price earnings risk in the cross-section.
- **Diebold, Francis X., and Kamil Yilmaz (2014), "On the Network Topology of Variance Decompositions."** The connectedness machinery that frames how to think about spillovers in volatility space, even outside the announcement context.
- **Hong, Harrison, Walter Torous, and Rossen Valkanov (2007), "Do Industries Lead Stock Markets?"** Older but still useful — industry-level information aggregation in equity returns, the analog of what option markets seem to be doing in IV space.

---

*The full paper is at [/papers/cross-firm-iv-spillover.pdf](/papers/cross-firm-iv-spillover.pdf). Currently under review at* Journal of Financial Markets. *SSRN draft: [linked here](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6629843). Comments welcome — [simen.guttormsen@nmbu.no](mailto:simen.guttormsen@nmbu.no).*

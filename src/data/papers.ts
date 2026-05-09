export interface Paper {
  /** Title rendered as h3 */
  title: string;
  /** "Sole author", "With co-author", etc. */
  authorship: string;
  /** Status string with HTML allowed (e.g., italic journal name) */
  status: string;
  /** Abstract paragraph; HTML allowed for entities, em, etc. */
  abstract: string;
  /** Path to the PDF in /public, e.g. /papers/wshape-iv.pdf */
  pdf?: string;
  /** Full SSRN URL once available */
  ssrn?: string;
}

export const papers: Paper[] = [
  {
    title: 'W-shaped implied volatility and investor learning about event risk',
    authorship: 'Sole author',
    status: 'Under review at <em>Quantitative Finance</em>, 2026',
    abstract:
      'Implied-volatility curves can occasionally exhibit a W-shape &mdash; a local maximum near at-the-money rather than the standard U-shaped smile. This paper provides a structural explanation grounded in Bayesian learning about hidden regimes. The main theorem gives a necessary condition on beliefs for W-shapes to emerge, and intensity peaks at maximum uncertainty. Empirical tests on U.S.&nbsp;equity options for 247 S&amp;P&nbsp;500 firms (2017&ndash;2025) confirm the predictions: W-shapes appear roughly six times more often when options span an earnings announcement, scale with earnings-reaction strength, and notably do not appear around FOMC announcements.',
    pdf: '/papers/wshape-iv.pdf',
    ssrn: 'https://www.ssrn.com/',
  },
  {
    title: 'Cross-firm implied volatility spillovers at earnings announcements',
    authorship: 'Sole author',
    status: 'Under review at <em>Journal of Financial Markets</em>, 2025',
    abstract:
      'When a firm announces earnings, the implied volatility of industry-peer firms moves with the announcer&rsquo;s implied volatility. Using U.S.&nbsp;equity option data (2010&ndash;2024) and GICS peer groupings, spillovers are statistically significant even with date fixed effects. Controlling for industry-date averages, the spillover operates at the industry level rather than through firm-specific signals. Two tests suggest the spillover carries information about future uncertainty: it persists into the peer&rsquo;s own subsequent earnings announcement &mdash; particularly when the peer reports shortly after &mdash; and it does not dissipate across the earnings season.',
    pdf: '/papers/cross-firm-iv-spillover.pdf',
    ssrn: 'https://www.ssrn.com/',
  },
  {
    title: 'Crisis-type heterogeneity in sector volatility spillovers',
    authorship: 'With co-author',
    status: 'Under review at <em>International Journal of Finance &amp; Economics</em>, 2025',
    abstract:
      'A quantile-VAR connectedness framework on sector-ETF implied volatility from 2018&ndash;2024 documents that spillover behavior differs systematically across crisis regimes. COVID, inflation, and banking-stress episodes generate distinct connectedness patterns at different points of the conditional distribution. We introduce a regime-purity metric to quantify window contamination, panel-regression interactions to test heterogeneity formally, and bootstrap inference for connectedness measures.',
    pdf: '/papers/crisis-type-spillover.pdf',
    ssrn: 'https://www.ssrn.com/',
  },
];

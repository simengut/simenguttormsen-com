export interface ProjectLink {
  href: string;
  label: string;
}

export interface Project {
  name: string;
  /** Short tagline, e.g., "Hardware · founder · in development" */
  meta: string;
  /** One-paragraph description */
  description: string;
  /** Outbound links — App Store, website, GitHub, etc. */
  links?: ProjectLink[];
}

export const projects: Project[] = [
  {
    name: 'NovaSpeed',
    meta: 'Hardware · founder · in development',
    description:
      'A laser-based precision speed-measurement device for athletes and coaches. Sole founder; running product, hardware, firmware, and go-to-market.',
    links: [{ href: 'https://getnovaspeed.com', label: 'getnovaspeed.com' }],
  },
  {
    name: 'PlateMates',
    meta: 'iOS app · sole developer · on the App Store',
    description:
      'A meal-planning app for mixed-diet couples and households — one shared base recipe with diet-specific add-ons, so a vegan and an omnivore can share a meal, shop from a single grocery list, and skip cooking twice.',
    links: [
      {
        href: 'https://apps.apple.com/us/app/platemates-one-meal-two-ways/id6761481608',
        label: 'App Store',
      },
    ],
  },
  {
    name: 'VAULT',
    meta: 'iOS app · sole developer · 1,000+ downloads',
    description:
      'An iOS app supporting the training, technique notation, and competition workflow used in elite pole vault. Used by athletes and coaches across the international pole-vault community.',
    links: [
      {
        href: 'https://apps.apple.com/us/app/vault-pole-vault-tracker/id6746421630',
        label: 'App Store',
      },
      { href: 'https://stavhopp.no/vault/', label: 'stavhopp.no/vault' },
    ],
  },
];

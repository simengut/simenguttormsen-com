export interface ProjectLink {
  href: string;
  label: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  /**
   * 'screenshot' = portrait phone screenshot, side column
   * 'logo' = centered icon on soft background
   * 'wide' = full-card-width hero (App Store marketing composite, etc.)
   */
  kind: 'screenshot' | 'logo' | 'wide';
}

export interface Project {
  name: string;
  /** Short tagline, e.g., "Hardware · founder · in development" */
  meta: string;
  /** One-paragraph description */
  description: string;
  /** Featured image */
  image?: ProjectImage;
  /** Outbound links — App Store, website, GitHub, etc. */
  links?: ProjectLink[];
}

export const projects: Project[] = [
  {
    name: 'NovaSpeed',
    meta: 'Hardware · founder · in development',
    description:
      'A laser-based precision speed-measurement device for athletes and coaches. Sole founder; running product, hardware, firmware, and go-to-market.',
    image: {
      src: '/projects/novaspeed.png',
      alt: 'NovaSpeed brand mark',
      kind: 'logo',
    },
    links: [{ href: 'https://getnovaspeed.com', label: 'getnovaspeed.com' }],
  },
  {
    name: 'PlateMates',
    meta: 'iOS app · sole developer · on the App Store',
    description:
      'A meal-planning app for mixed-diet couples and households — one shared base recipe with diet-specific add-ons, so a vegan and an omnivore can share a meal, shop from a single grocery list, and skip cooking twice.',
    image: {
      src: '/projects/platemates.jpg',
      alt: 'PlateMates — App Store marketing screens',
      kind: 'wide',
    },
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
    image: {
      src: '/projects/vault.jpg',
      alt: 'VAULT — App Store marketing screens',
      kind: 'wide',
    },
    links: [
      {
        href: 'https://apps.apple.com/us/app/vault-pole-vault-tracker/id6746421630',
        label: 'App Store',
      },
      { href: 'https://stavhopp.no/vault/', label: 'stavhopp.no/vault' },
    ],
  },
];

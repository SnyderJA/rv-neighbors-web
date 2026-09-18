/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // "Desert Night" — the same palette the app uses
        // (rv-neighbors-app/tailwind.config.js), anchored on the logo gold.
        // Keep the two in sync: the site and the app should not look like
        // different products.
        //
        // The site previously ran a palette of its own with accent #E8734A
        // (a salmon orange) and slate #4A6FA5 (a blue that appears nowhere
        // in the brand). The logo is gold — #DA9902 in both
        // rvn-logo-full-reversed.svg and favicon.svg, and the single most
        // used colour in the brand kit.

        // Grounds, darkest to lightest
        ink:        '#0F2419',  // page ground; app `background`
        'ink-deep': '#0A1A12',  // footer, wells
        surface:    '#163324',  // app `card`
        'surface-deep': '#0E2117', // cards, which sit *below* the ground
        'surface-raised': '#1C422E', // app `input`
        line:       '#2A4F3A',  // app `border`

        // Brand gold — the logo colour
        gold:         '#DA9902',
        'gold-light': '#F5A623', // app `accent`

        // Warm amber, the secondary warm hue
        amber:         '#DF8B29', // app `primary`
        'amber-light': '#F0A76A',

        // Greens and neutrals
        forest:       '#2D5A42', // app `secondary`
        sage:         '#7AA28E', // app muted foreground
        'sage-light': '#A8C9B6',
        cream:        '#F5F5F0', // app `foreground`

        // The old palette's token names are gone with the components that used
        // them (Hero, Features, HowItWorks, Screenshots, DownloadCTA,
        // AppStoreBadges were all unreachable from App.tsx). Nothing is left
        // carrying a name that describes a colour it no longer is.
      },
      fontFamily: {
        // The app's faces: Figtree for body, Space Grotesk for headings.
        sans: ['"Figtree"', 'system-ui', 'sans-serif'],
        heading: ['"Space Grotesk"', '"Figtree"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        // Dark forest, not the old gradient that climbed to #3D7A52 and left
        // cards lighter than the ground they sat on.
        'hero-gradient': 'linear-gradient(165deg, #0F2419 0%, #142B1D 55%, #18351F 100%)',
        'cta-gradient':  'linear-gradient(135deg, #0A1A12 0%, #163324 100%)',
      },
    },
  },
  plugins: [],
}

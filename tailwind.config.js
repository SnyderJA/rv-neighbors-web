/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // From the app's constants/colors.ts
        primary:   '#2D5A3D',
        'primary-light': '#3D7A52',
        'primary-dark':  '#1E3D2A',
        secondary: '#8B6F47',
        'secondary-light': '#A68B63',
        accent:    '#E8734A',
        'accent-light': '#F09070',
        slate:     '#4A6FA5',
        bg:        '#FDF8F0',
        'bg-alt':  '#F5EDE0',
        border:    '#E8E0D4',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1E3D2A 0%, #2D5A3D 50%, #3D7A52 100%)',
        'cta-gradient':  'linear-gradient(135deg, #1E3D2A 0%, #2D5A3D 100%)',
      },
    },
  },
  plugins: [],
}

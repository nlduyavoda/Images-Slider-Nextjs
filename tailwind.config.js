/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        red: 'var(--icon-brand-primary)',
        white: 'var(--white-mochimalist)',
        gray: 'var(--gray-100)',
      },
    },
  },
  plugins: [],
}

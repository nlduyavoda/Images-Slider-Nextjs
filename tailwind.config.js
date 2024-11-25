/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        red: 'var(--red-100)',
        white: 'var(--white-mochimalist)',
        gray: 'var(--gray-100)',
        ['black-100']: 'var(--black-100)',
      },
    },
  },
  safelist: [
    'bg-red-500',
    'text-white',
    'hover:bg-gray-200',
    'bg-gray-100',
    'bg-black-100',
  ],
  plugins: [],
}

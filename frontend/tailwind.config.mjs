/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "var(--white)",
        blue: "var(--blue)",
        dark: "var(--dark)",
        bright: "var(--bright)",
        active: "var(--active-blue)",
        'blue-opacity': "var(--blue-opacity)",
        'active-blue-opacity': "var(--active-blue-opacity)",
        'bright-opacity': "var(--bright-opacity)"
      },
      boxShadow: {
        base: '8px 8px 21px rgba(0, 0, 0, 0.08)',
      },
      fontFamily: {
        sans: ['"Montserrat"', 'sans-serif'],
        title: ['"Unbounded"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        egg: "#fefdfc",
        button: "#f0eeea",
      },
    },
  },
  plugins: [],
};

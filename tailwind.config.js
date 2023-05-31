/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "darkblue-900": "#0e1f33",
        "darkblue-800": "#152943",
      },
    },
  },
  plugins: [],
};

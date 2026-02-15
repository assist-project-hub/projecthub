/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        "indigo-glow": "0 0 40px -8px rgba(99, 102, 241, 0.35)",
      },
    },
  },
  plugins: [],
}


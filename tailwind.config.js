/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        correct: {
          "0%, 22%, 42%": { background: "#fde047" },
          "20%, 40%, 60%": { background: "linear-gradient(#fde047, #ffce3e)" },
          "62%, 100%": { background: "#00821f" },
        },
        wrong: {
          "0%, 22%, 42%": { background: "#fde047" },
          "20%, 40%, 60%": { background: "linear-gradient(#fde047, #ffce3e)" },
          "62%, 100%": { background: "#dc2626" },
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./scripts/**/*.js", "./*.html"],
  theme: {
    extend: {
      screens: {
        xs: "515px",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
        shake: {
          "10%, 90%": {
            transform: "translate3d(-1px, 0, 0)",
          },
          "20%, 80%": {
            transform: "translate3d(2px, 0, 0)",
          },
          "30%, 50%, 70%": {
            transform: "translate3d(-4px, 0, 0)",
          },
          "40%, 60%": {
            transform: "translate3d(4px, 0, 0)",
          },
        },
      },
      animation: {
        slideDown: "slideDown 0.3s ease-out forwards",
        slideUp: "slideUp 0.3s ease-out forwards",
        shake: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
      },
      colors: {
        "kw-green": "#008000",
        "kw-lightgreen": "#4db34d",
        "kw-menu": "#403B3B",
        "kw-grey": "#EFEFEF",
        "kw-disabled": "#eeeeee",
        "kw-text-disabled": "#ababab",
      },
      boxShadow: {
        "inner-md": "inset 2px 2px 6px -4px rgba(66, 68, 90, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

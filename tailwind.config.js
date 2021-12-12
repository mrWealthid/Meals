module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Quicksand: ["Quicksand", "serif"],
      Caudex: ["Caudex", "serif"],
      Lato: ["Lato", "serif"],
      // Ensure fonts with spaces have " " surrounding it.
    },
    color: {
      wheat: ["wheat"],
      button: ["rgb(91, 121, 162)"],
    },
    fontColor: {
      wheat: ["wheat"],
    },
    extend: {
      animation: {
        none: "none",
        spin: "spin 1s linear infinite",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1s infinite",
        rebounce: "rebounce 2s inifinte",
        float: "float 3s infinite",
        refloat: "refloat 3s infinite",
        like: "like 0.5s ease-in-out",
      },
      keyframes: {
        spin: {
          to: {
            transform: "rotate(360deg)",
          },
        },
        ping: {
          "75%, 100%": {
            transform: "scale(2)",
            opacity: 0,
          },
        },
        pulse: {
          "0%, 100%": {
            opacity: 0.5,
          },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0px)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },

        rebounce: {
          "0%, 100%": {
            transform: "translateY(0%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-25px)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },

        like: {
          "100%": {
            transform: "scale(2.0)",
            // -webkit-transform: "rotate(-15deg) scale(1.3)",
            // -moz-transform: "rotate(-15deg) scale(1.3)",
            // -ms-transform: "rotate(-15deg) scale(1.3)",
            // -o-transform: "rotate(-15deg) scale(1.3)",
            filter: "blur(0.5px)",
            // -webkit-filter: "blur(0.5px)",
          },
        },
        float: {
          "0%": {
            transform: "translateY(0px)",
            animationTimingFunction: "ease-in-out",
          },
          "50%": {
            transform: "translateY(-20px)",
            animationTimingFunction: "ease-in-out",
          },
          "100%": {
            transform: "translateY(0px)",
            animationTimingFunction: "ease-in-out",
          },
        },
        refloat: {
          "0%": {
            transform: "translateY(-20px)",
            animationTimingFunction: "ease-in-out",
          },
          "50%": {
            transform: "translateY(0px)",
            animationTimingFunction: "ease-in-out",
          },
          "100%": {
            transform: "translateY(-20px)",
            animationTimingFunction: "ease-in-out",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};

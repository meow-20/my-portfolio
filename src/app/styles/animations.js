const keyframes = {
  shake: {
    "0%, 100%": { transform: "translateX(0)" },
    "25%": { transform: "translateX(-2px)" },
    "75%": { transform: "translateX(2px)" },
  },
  fadeIn: {
    "0%": { opacity: "0" },
    "100%": { opacity: "1" },
  },
  rocket: {
    "0%": { transform: "translate(0, 0) scale(1)", opacity: 1 },
    "100%": { transform: "translate(700px, -400px) scale(1.6)", opacity: 0 },
  },
  bounceAround: {
    "0%": { transform: "translate(0, 0)" },
    "25%": { transform: "translate(80%, -20%)" },
    "50%": { transform: "translate(-60%, 40%)" },
    "75%": { transform: "translate(40%, -50%)" },
    "100%": { transform: "translate(0, 0)" },
  },
  bounce: {
    "0%": {
      top: "25%",
      transform: "scaleX(79.5%) scaleY(65%)",
    },
    "100%": {
      top: "55%",
      transform: "scaleX(100%) scaleY(100%)", // Reset scale to normal at the end
    },
  },
  shadow: {
    "0%": {
      opacity: "0",
      transform: "scale(0)",
    },
    "100%": {
      opacity: ".5",
      transform: "scale(1)", // scale to normal size
    },
  },
};

const animations = {
  shake: "shake 0.3s ease-in-out",
  fadeIn: "fadeIn 0.5s ease-in",
  rocket: "rocket 2s ease-in-out forwards",
  bounceAround: "bounceAround 5s infinite ease-in-out",
  bounce: "bounce 1s ease-in-out infinite alternate both",
  shadow: 'shadow 1s ease-in-out forwards', 
};

const animationConfig = {
  extend: {
    keyframes,
    animation: animations,
  },
};

export default animationConfig;

const keyframes = {
  shake: {
    '0%, 100%': { transform: 'translateX(0)' },
    '25%': { transform: 'translateX(-2px)' },
    '75%': { transform: 'translateX(2px)' },
  },
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  rocket: {
    '0%': { transform: 'translate(0, 0) scale(1)', opacity: 1 },
    '100%': { transform: 'translate(700px, -400px) scale(1.6)', opacity: 0 },
  },
};

const animations = {
  shake: 'shake 0.3s ease-in-out',
  fadeIn: 'fadeIn 0.5s ease-in',
  rocket: 'rocket 2s ease-in-out forwards',
};

const animationConfig = {
  extend: {
    keyframes,
    animation: animations,
  },
};

export default animationConfig;

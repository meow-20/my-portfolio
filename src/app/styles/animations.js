export const keyframes = {
    shake: {
      '0%, 100%': { transform: 'translateX(0)' },
      '25%': { transform: 'translateX(-2px)' },
      '75%': { transform: 'translateX(2px)' },
    },
    fadeIn: {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' },
    },
  };
  
  export const animations = {
    shake: 'shake 0.3s ease-in-out',
    fadeIn: 'fadeIn 0.5s ease-in',
  };
  
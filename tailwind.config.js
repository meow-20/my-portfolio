import animationConfig  from './src/app/styles/animations';

const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      ...animationConfig.extend,
    },
  },
  plugins: [],
};

export default config;

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        customNav: '#18222f',
        customPage: '#2b3441',
        customCard: '#47566a',
        customCardHover: '#4f5e74',
        customText: '#f1f3f5',
      },
    },
  },
  plugins: [],
};
export default config;

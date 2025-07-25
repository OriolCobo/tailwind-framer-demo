import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Puedes personalizar colores, fuentes, etc. aquí
    },
  },
  plugins: [],
};

export default config;

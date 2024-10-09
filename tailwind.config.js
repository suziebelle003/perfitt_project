/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        filterReset: {
          '0%': { filter: 'contrast(0) brightness(2)' },
          '100%': { filter: 'contrast(1) brightness(1)' },
        },
        footprint: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        footprint1: 'footprint 3s ease-in-out 0s 1',
        footprint2: 'footprint 3s ease-in-out 0.5s 1',
        footprint3: 'footprint 3s ease-in-out 1s 1',
        footprint4: 'footprint 3s ease-in-out 1.5s 1',
        footprint5: 'footprint 3s ease-in-out 2s 1',
        footprint6: 'footprint 3s ease-in-out 2.5s 1',
        perfittFilter: 'filterReset 5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};

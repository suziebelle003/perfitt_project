/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'shadow-top': '0 -2px 2px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        'drop-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0)',
            animationTimingFunction: 'cubic-bezier(0.34, 1.61, 0.7, 1)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
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
        fadeIn: 'fade-in 1s ease-in-out 0.25s 1',
        dropIn: 'drop-in 0.5s ease-in-out 0.25s 1',
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
  plugins: [require('tailwind-scrollbar-hide')],
};

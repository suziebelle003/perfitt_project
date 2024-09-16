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
      },
      animation: {
        fadeIn: 'fade-in 1s ease-in-out 0.25s 1',
        dropIn: 'drop-in 0.5s ease-in-out 0.25s 1',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};

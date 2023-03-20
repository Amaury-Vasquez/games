/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'transparent-black': 'rgba(0, 0, 0, 0.6)',
        'transparent-white': 'rgba(255, 255, 255, 0.3)',
        'primary-dark': '#171717',
        'theme-primary': '#fb923c',
        'theme-secondary': '#f97316',
        gray: '#2a2b38',
        'contrast-light': '#334155',
        'contrast-dark': '#1f2029',
        light: '#fefefe',
      },
      screens: {
        mobileXS: '320px',
        mobile: '600px',
        tablet: '900px',
        tabletXL: '1024px',
        laptop: '1400px',
      },
      keyframes: {
        skeleton: {
          '0%': { backgroundColor: '#e1e4e8' },
          '100%': { backgroundColor: 'primary-light' },
        },
        'scroll-down': {
          '0%': { transform: 'translateY(-100%)', transform: 'scaleY(0)' },
          '100%': { transform: 'translateY(0)', transform: 'scaleY(1)' },
        },
        'scroll-up': {
          '0%': { transform: 'translateY(0)', transform: 'scaleY(1)' },
          '100%': { transform: 'translateY(-100%)', transform: 'scaleY(0)' },
        },
        'appear-right': {
          '0%': { transform: 'translateX(-100%)', transform: 'scaleX(0)' },
          '100%': { transform: 'translateX(0)', transform: 'scaleX(1)' },
        },
        'dissapear-left': {
          '0%': { transform: 'translateX(0)', transform: 'scaleX(1)' },
          '100%': { transform: 'translateX(-110%)', transform: 'scaleX(0)' },
        },
        'rotate-90': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(90deg)' },
        },
        'rotate-from-90': {
          '0%': { transform: 'rotate(90deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'rotate-180': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },
        'rotate-from-180': {
          '0%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'fade-in': {
          '0%': { opacity: '0', filter: 'blur(5px)' },
          '100%': { opacity: '1', filter: 'blur(0)' },
        },
        'fade-out': {
          '0%': { opacity: '1', filter: 'blur(0)' },
          '100%': { opacity: '0', filter: 'blur(5px)' },
        },
        'toggle-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'toggle-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        skeleton: 'skeleton 1s ease-in-out infinite alternate',
        'to-bottom': 'scroll-down 0.3s ease',
        'to-top': 'scroll-up 0.3s ease',
        'appear-right': 'appear-right 0.3s ease',
        'dissapear-left': 'dissapear-left 0.3s ease',
        'rotate-90': 'rotate-90 0.3s ease',
        'rotate-from-90': 'rotate-from-90 0.3s ease',
        'rotate-180': 'rotate-180 0.3s ease',
        'rotate-from-180': 'rotate-from-180 0.3s ease',
        'fade-in': 'fade-in 0.3s ease',
        'fade-in-05': 'fade-in 0.5s ease',
        'fade-in-1': 'fade-in 1s ease',
        'fade-out': 'fade-out 0.3s ease',
        'spin-avg': 'spin 1s linear infinite',
        'spin-fast': 'spin 0.5s linear infinite',
        'toggle-left': 'toggle-left 0.2s ease',
        'toggle-right': 'toggle-right 0.2s ease',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
  variants: {
    scrollbar: ['rounded'],
  },
};

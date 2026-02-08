/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,scss}', './libs/**/*.{html,ts,scss}'],
  theme: {
    extend: {
      colors: {
        customGrey: '#9197B3',
        customGreyFont: '#ACACAC',
        primary: {
          light: '#7e22ce', // purple-700-ish
          DEFAULT: '#6b21a8', // purple-800
          dark: '#581c87', // purple-900
        },
        surface: {
          light: '#ffffff',
          dim: '#f3f4f6', // gray-100
        },
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'soft-hover': '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      },
    },
  },
  plugins: [],
};

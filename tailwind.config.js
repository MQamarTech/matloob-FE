// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust the path according to your project structure
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-img':
          "url('https://images.stockcake.com/public/f/9/0/f9084fec-738d-4d9b-9d1f-9668e32e7ca8_large/airport-departure-rush-stockcake.jpg')",
        'section-img':
          "url('https://images.stockcake.com/public/7/7/5/7752f3fd-b5ae-4e60-866d-d63893a7d59b_large/elegant-hotel-lobby-stockcake.jpg')",
      },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'slide-left-infinite': 'slide-left 10s linear infinite',
      },
    },
  },
  plugins: [],
};

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        glow: '0 24px 80px rgba(14, 165, 233, 0.18)'
      }
    }
  },
  plugins: []
};

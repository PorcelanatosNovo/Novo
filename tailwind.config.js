module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      animation: {
        'pulse-slow': 'pulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes:{
        float:{
          '0%':{ transform: 'translatey(0px)' },
          '50%' :{ transform: 'translatey(-20px)'},
          '100% ':{ transform: 'translatey(0px)'}
        }
      },
    },
  },
  plugins: [],
}
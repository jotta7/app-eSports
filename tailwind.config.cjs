/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundImage:{
        galaxy: "url('./background-galaxy.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 25.08%, #43E7AD 70.94%, #E1D55D 90.08% )',
        'game-gradient': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 67.08%)',
      },
      borderRadius:{} 
    },
  },
  plugins: [],
}

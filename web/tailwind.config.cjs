/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        
      },
      backgroundImage: {
        background: "url('img/bg-galaxy.svg')",
        'gradient-game': 'linear-gradient(89.86deg, #9572FC 13.08%, #43E7AD 63.94%, #E1D55D 90.57%)',
        'gradient-card': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
      },
    },
  },
  plugins: [],
}

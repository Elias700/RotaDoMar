// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // --- Paleta Monocromática ---
        'primary': '#1976D2',
        'secondary': '#2196F3',
        'accent': '#BBDEFB',
        'background-light': '#E3F2FD',

        // --- Paleta Análoga ---
        'analogous-blue': '#1976D2',
        'analogous-teal': '#00796B',
        'analogous-cyan': '#4DD0E1',
        'analogous-indigo': '#3F51B5',

        // --- Paleta Triádica ---
        'triadic-blue': '#1976D2',
        'triadic-lime': '#CDDC39',
        'triadic-red-orange': '#FF5722',

        // --- Paleta Complementar Dividida ---
        'split-comp-blue': '#1976D2',
        'split-comp-orange': '#FFB74D',
        'split-comp-pink': '#F48FB1',
        'split-comp-gray': '#CFD8DC',
        
        // --- Paleta da Natureza ---
        'nature-blue': '#1976D2',
        'nature-sand': '#FBC02D',
        'nature-brown': '#795548',
        'nature-white': '#ECEFF1',
      },
    },
  },
  plugins: [],
}
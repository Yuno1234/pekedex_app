/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/CompareContainer.js",
    "./src/components/Loader.js",
    "./src/components/Navbar.js",
    "./src/components/PokemonCard.js",
    "./src/components/PokemonList.js",
    "./src/components/PokemonNav.js",
    "./src/content/Pokemon/CapableMoves.js",
    "./src/content/Pokemon/Description.js",
    "./src/content/Pokemon/Evolution.js",
    "./src/content/Compare.js",
    "./src/content/Pokemon.js",
    "./src/content/Search.js",
    "./src/App.js",
    "./src/index.js",
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
  safelist: [
    'from-[#919aa2]',
    'from-[#ff9d53]',
    'from-[#3692dc]',
    'from-[#fbd100]',
    'from-[#60ba53]',
    'from-[#4cd1c0]',
    'from-[#e0306a]',
    'from-[#b567ce]',
    'from-[#e87236]',
    'from-[#8fa8dd]',
    'from-[#ff6675]',
    'from-[#90c12d]',
    'from-[#c8b686]',
    'from-[#5469ad]',
    'from-[#096ac1]',
    'from-[#5b5466]',
    'from-[#5a8ea2]',
    'from-[#fb89eb]',
  ],
  plugins: [],
}


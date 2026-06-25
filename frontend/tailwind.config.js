module.exports = {
  content: [
    "./index.html",
    "./*.{js,jsx,ts,tsx}",
    "./Pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./services/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#faf7f0',
          100: '#f5eee2',
          200: '#ebdbbf',
          300: '#e0c99f',
          400: '#d4b884',
          500: '#c9a96e',
          600: '#b89450',
          700: '#a07e3e',
          800: '#8a6930',
          900: '#6e5630',
        },
        navy: {
          50: '#f0f2f7',
          100: '#dce2ec',
          200: '#b8c4d4',
          300: '#8fa0b8',
          400: '#6b7d96',
          500: '#4a5a72',
          600: '#2d3a4e',
          700: '#1a2332',
          800: '#121924',
          900: '#0c0f15',
        },
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.7s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.7s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
}

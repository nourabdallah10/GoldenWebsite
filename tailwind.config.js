/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          600: '#d97706', // amber-600
        },
        secondary: {
          900: '#0f172a', // slate-900
        },
      },
      fontFamily: {
        sans: ['Gotham', 'Verdana', 'sans-serif'],
        serif: ['Playfair Display', 'Cormorant Garamond', 'serif'],
        display: ['Playfair Display', 'serif'],
        elegant: ['Cormorant Garamond', 'serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleHover: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideUp: 'slideUp 0.5s ease-out',
        scaleHover: 'scaleHover 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
}



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D2C54',
          hover: '#081E3A',
          light: '#1A457D',
          dark: '#071A33',
        },
        secondary: {
          DEFAULT: '#18A766',
          hover: '#138A53',
          light: '#22C55E',
          soft: '#E8F8F0',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          subtle: '#F4F7FB',
          card: '#FFFFFF',
          border: '#E2E8F0',
        },
        content: {
          primary: '#1F2937',
          secondary: '#4B5563',
          muted: '#9CA3AF',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(13, 44, 84, 0.06)',
        'floating': '0 12px 32px -4px rgba(13, 44, 84, 0.12)',
        'glow-green': '0 8px 24px -4px rgba(24, 167, 102, 0.35)',
        'glow-navy': '0 8px 24px -4px rgba(13, 44, 84, 0.25)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
      animation: {
        'float-slow': 'float 5s ease-in-out infinite',
        'float-reverse': 'float-reverse 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.75', transform: 'scale(1.05)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        }
      }
    },
  },
  plugins: [],
}

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        'phantom-dark': '#0F172A',
        'phantom-cyan': '#00E5FF',
        'phantom-purple': '#B026FF',
        'phantom-accent': '#FF006E',
      },
      backgroundImage: {
        'gradient-phantom': 'linear-gradient(135deg, #0F172A 0%, #00E5FF 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0F172A 0%, #1A1F3A 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 10px rgba(0, 229, 255, 0.5)' },
          '50%': { textShadow: '0 0 20px rgba(0, 229, 255, 1)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        base: ['18px', '1.5'],
      },
      fontFamily: {
        sans: ['var(--font-rosario)'],
        caladea: ['var(--font-caladea)', 'serif'],
      },
      keyframes: {
        "collapsible-down": {
          from: { 
            height: "0",
            opacity: 0,
            transform: "translateY(-10px)"
          },
          "50%": {
            opacity: 0.5
          },
          to: { 
            height: "var(--radix-collapsible-content-height)",
            opacity: 1,
            transform: "translateY(0)"
          },
        },
        "collapsible-up": {
          from: { 
            height: "var(--radix-collapsible-content-height)",
            opacity: 1,
            transform: "translateY(0)"
          },
          "50%": {
            opacity: 0.5
          },
          to: { 
            height: "0",
            opacity: 0,
            transform: "translateY(-10px)"
          },
        }
      },
      animation: {
        "collapsible-down": "collapsible-down 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "collapsible-up": "collapsible-up 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
} 
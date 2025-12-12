/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'psie-blue-primary': '#005B96',
        'psie-blue-secondary': '#00A3E0',
        'psie-blue-light': '#E6F4FA',
        'psie-blue-dark': '#003D66',
        'psie-green': '#008751',
        'psie-green-light': '#E6F7F0',
        'psie-green-dark': '#005C36',
        'psie-yellow': '#FCD116',
        'psie-yellow-light': '#FFF9E6',
        'psie-yellow-dark': '#D4A000',
        'psie-black': '#1A1A1A',
        'psie-gray': {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        'psie-success': '#008751',
        'psie-warning': '#FCD116',
        'psie-error': '#DC2626',
        'psie-info': '#00A3E0',
      },
      boxShadow: {
        'psie-sm': '0 1px 2px 0 rgba(0, 91, 150, 0.05)',
        'psie-md': '0 4px 6px -1px rgba(0, 91, 150, 0.1), 0 2px 4px -1px rgba(0, 91, 150, 0.06)',
        'psie-lg': '0 10px 15px -3px rgba(0, 91, 150, 0.1), 0 4px 6px -2px rgba(0, 91, 150, 0.05)',
        'psie-xl': '0 20px 25px -5px rgba(0, 91, 150, 0.1), 0 10px 10px -5px rgba(0, 91, 150, 0.04)',
      },
    },
  },
  plugins: [],
}

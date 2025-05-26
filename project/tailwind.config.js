/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f5ff',
          100: '#e0ebff',
          200: '#c5d6fe',
          300: '#a1b8fc',
          400: '#7a90f8',
          500: '#5e68f0',
          600: '#4b48e0',
          700: '#3f38c0',
          800: '#35309c',
          900: '#0F172A',
        },
        secondary: {
          50: '#f5f8fa',
          100: '#eaf0f5',
          200: '#d0dde9',
          300: '#a7c0d7',
          400: '#769dbe',
          500: '#557da6',
          600: '#3f6288',
          700: '#324d6d',
          800: '#2a405b',
          900: '#25364d',
        },
        accent: {
          50: '#fff8f0',
          100: '#ffecd6',
          200: '#ffd6ad',
          300: '#ffba75',
          400: '#ff973d',
          500: '#FF7A00',
          600: '#e86100',
          700: '#c24b00',
          800: '#9c3c06',
          900: '#7e330c',
        },
        success: {
          100: '#dcfce7',
          500: '#22c55e',
          900: '#14532d',
        },
        warning: {
          100: '#fef9c3',
          500: '#eab308',
          900: '#713f12',
        },
        error: {
          100: '#fee2e2',
          500: '#ef4444',
          900: '#7f1d1d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px 0 rgba(0, 0, 0, 0.05)',
        'card': '0 10px 30px 0 rgba(0, 0, 0, 0.08)',
        'highlight': '0 0 15px 1px rgba(255, 122, 0, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
};
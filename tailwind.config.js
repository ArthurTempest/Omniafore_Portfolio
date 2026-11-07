/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        background: {
          DEFAULT: '#1e1e2e',
          secondary: '#232136',
          tertiary: '#181825',
        },
        surface: {
          DEFAULT: '#303446',
          card: '#292c3c',
          cardHover: '#363a4f',
          glass: 'rgba(48, 52, 70, 0.45)',
          border: 'rgba(165, 173, 206, 0.12)',
          borderHover: 'rgba(189, 147, 249, 0.35)',
        },
        primary: {
          DEFAULT: '#c6d0f5',
          muted: '#a5adce',
          dim: '#737994',
        },
        accent: {
          purple: '#bd93f9',
          pink: '#ff79c6',
          cyan: '#8be9fd',
          blue: '#8caaee',
          green: '#50fa7b',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Syne', 'Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-gradient': 'linear-gradient(135deg, rgba(189, 147, 249, 0.15) 0%, rgba(139, 233, 253, 0.08) 50%, rgba(255, 121, 198, 0.12) 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'glow-line': 'linear-gradient(90deg, transparent, rgba(189, 147, 249, 0.6), rgba(139, 233, 253, 0.6), transparent)',
      },
      boxShadow: {
        'neon-purple': '0 0 25px -5px rgba(189, 147, 249, 0.3)',
        'neon-cyan': '0 0 25px -5px rgba(139, 233, 253, 0.3)',
        'neon-pink': '0 0 25px -5px rgba(255, 121, 198, 0.3)',
        'card-glow': '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 0 0 1px rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'grid-scroll': 'gridMove 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gridMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '50px 50px' },
        }
      }
    },
  },
  plugins: [],
}

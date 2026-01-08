import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
        extend: {
                colors: {
                        // JobsForCareer Design System Colors
                        primary: {
                                DEFAULT: '#FF6F00',
                                50: '#FFF8E1',
                                100: '#FFECB3',
                                200: '#FFE082',
                                300: '#FFD54F',
                                400: '#FFCA28',
                                500: '#FFC107',
                                600: '#FF6F00',
                                700: '#E65100',
                                800: '#BF360C',
                                900: '#3E2723',
                        },
                        secondary: {
                                DEFAULT: '#FFF3E0',
                                foreground: '#424242',
                        },
                        accent: {
                                DEFAULT: '#424242',
                                foreground: '#FFFFFF',
                        },
                        background: 'hsl(var(--background))',
                        foreground: 'hsl(var(--foreground))',
                        card: {
                                DEFAULT: 'hsl(var(--card))',
                                foreground: 'hsl(var(--card-foreground))'
                        },
                        popover: {
                                DEFAULT: 'hsl(var(--popover))',
                                foreground: 'hsl(var(--popover-foreground))'
                        },
                        muted: {
                                DEFAULT: 'hsl(var(--muted))',
                                foreground: 'hsl(var(--muted-foreground))'
                        },
                        destructive: {
                                DEFAULT: 'hsl(var(--destructive))',
                                foreground: 'hsl(var(--destructive-foreground))'
                        },
                        border: 'hsl(var(--border))',
                        input: 'hsl(var(--input))',
                        ring: 'hsl(var(--ring))',
                        chart: {
                                '1': 'hsl(var(--chart-1))',
                                '2': 'hsl(var(--chart-2))',
                                '3': 'hsl(var(--chart-3))',
                                '4': 'hsl(var(--chart-4))',
                                '5': 'hsl(var(--chart-5))'
                        }
                },
                borderRadius: {
                        lg: '16px',
                        md: '12px',
                        sm: '8px',
                        xl: '20px',
                        '2xl': '24px',
                        '3xl': '32px',
                },
                fontFamily: {
                        sans: ['Inter', 'system-ui', 'sans-serif'],
                        poppins: ['Poppins', 'system-ui', 'sans-serif'],
                },
                boxShadow: {
                        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
                        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                        'strong': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 4px 25px -5px rgba(0, 0, 0, 0.1)',
                },
                animation: {
                        'fade-in': 'fadeIn 0.5s ease-in-out',
                        'slide-up': 'slideUp 0.3s ease-out',
                        'bounce-soft': 'bounceSoft 0.6s ease-out',
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
                        bounceSoft: {
                                '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0,0,0)' },
                                '40%, 43%': { transform: 'translate3d(0, -15px, 0)' },
                                '70%': { transform: 'translate3d(0, -7px, 0)' },
                                '90%': { transform: 'translate3d(0, -2px, 0)' },
                        },
                },
        }
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Nếu bạn dùng thư mục pages
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Font chữ mặc định
        // Thêm các font chữ tùy chỉnh nếu cần
        // mono: ['"Press Start 2P"', 'monospace'], // Ví dụ font cho game
      },
      colors: {
        // Định nghĩa màu sắc chủ đạo cho portfolio
        primary: '#0D9488', // Teal-600
        'primary-hover': '#0F766E', // Teal-700
        secondary: '#4B5563', // Gray-600
        background: '#F9FAFB', // Gray-50
        card: '#FFFFFF',
        text: '#1F2937', // Gray-800
        'text-secondary': '#6B7280', // Gray-500
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;

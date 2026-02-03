/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"] ,
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef7ff",
          100: "#d9ecff",
          200: "#b5d9ff",
          300: "#86bfff",
          400: "#4e99ff",
          500: "#1e6dff",
          600: "#154fe6",
          700: "#163bb5",
          800: "#1a348c",
          900: "#1a2d6e"
        }
      },
      boxShadow: {
        glow: "0 20px 80px -40px rgba(30, 109, 255, 0.65)"
      }
    }
  },
  plugins: []
};

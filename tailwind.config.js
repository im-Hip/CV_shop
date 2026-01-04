module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: { 
    extend: {
      animation: {
        blob: "blob 7s infinite",
        ping: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
      },
    }
  },
  plugins: [],
};


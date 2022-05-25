module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        mobile: "9 / 16",
      },
      colors: {
        "metallic-seaweed": "#007E95",
        "blue-sapphire": "#005F6F",
        "middle-blue": "#58C2D5",
        "cadet-blue": "#4DA1A9",
        "princeton-orange": "#ff832b",
        "alloy-orange": "#c96318",
        cultured: "#eeeeee",
      },
    },
  },
  plugins: [],
};

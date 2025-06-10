import { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      height: {
        screen: "100vh",
      },
      borderRadius: {
        "button-radius": "30px",
        "card-radius": "20px",
      },
      boxShadow: {
        DEFAULT: "0px 2px 4px 0px rgba(0, 0, 0, 0.20)",
      },
    },
    colors: {
      "point-color": "var(--point-color)",
      "white-color": "var(--white-color)",
      "black-color": "var(--black-color)",
      "red-color": "var(--red-color)",
      "gray-color": "var(--gray-color)",
    },
  },
};

export default config;

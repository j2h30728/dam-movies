export type CustomTheme = typeof darkTheme;

export const darkTheme = {
  color: {
    background: "rgb(20, 20, 20)",
    neutral: "#333333",
    point: "#FF4757",
    primary: "#1E90FF",
    secondary: "#555555",
    text: "#FFFFFF",
  },
};

export const whiteTheme: CustomTheme = {
  color: {
    background: "#FFFFFF",
    neutral: "#F0F0F0",
    point: "#FF4757",
    primary: "#1E90FF",
    secondary: "#CCCCCC",
    text: "#000000",
  },
};

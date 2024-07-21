export type CustomTheme = typeof darkTheme;

export const darkTheme = {
  color: {
    background: "#141518",
    backdrop: "rgba(0, 0, 0, 0.7)",
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
    backdrop: "rgba(0, 0, 0, 0.4)",
    neutral: "#F0F0F0",
    point: "#FF4757",
    primary: "#1E90FF",
    secondary: "#CCCCCC",
    text: "#000000",
  },
};

import useStoreLocalStorage from "./useStoreLocalStorage";

export const DARK_MODE = {
  DARK: "DARK",
  LIGHT: "LIGHT",
} as const;

const useDarkMode = () => {
  const { localStorageValue, setValueInLocalStorage } = useStoreLocalStorage("darkMode");

  const handleToggleDarkMode = () => {
    setValueInLocalStorage(localStorageValue === DARK_MODE.DARK ? DARK_MODE.LIGHT : DARK_MODE.DARK);
  };

  return { handleToggleDarkMode, isCurrentDarkMode: localStorageValue === DARK_MODE.DARK };
};

export default useDarkMode;

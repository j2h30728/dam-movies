import { SyntheticEvent } from "react";
import defaultImg from "../assets/default-img.png";

const setDefaultImageOnError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.onerror = null;
  e.currentTarget.src = defaultImg;
  e.currentTarget.style.objectFit = "cover";
};

export default setDefaultImageOnError;

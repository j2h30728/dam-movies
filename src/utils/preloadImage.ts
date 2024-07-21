const preloadImage = (src: string) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = resolve;
  });
};

export default preloadImage;

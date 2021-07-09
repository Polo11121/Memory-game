export const getRandomImages = (numberOfImages) => {
  const images = [];
  while (images.length !== numberOfImages) {
    let image = Math.floor(Math.random() * 70) + 8;
    if (!images.includes(image)) {
      images.push(image);
    }
  }
  return images;
};

export const getRandomNumber = () => {
  return Math.floor(Math.random() * 80);
};

export const test = () => {
  return 5;
};

export const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export const getRandomInt = (max: number) : number => {
  return Math.floor(Math.random() * Math.floor(max));
}

export const randomAnimation = (nr: number): string => {
  const index = getRandomInt(nr);
  return index === 0 ? "Scale-fade-in 1 0.5s linear" : '';
}


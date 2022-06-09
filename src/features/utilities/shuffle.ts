export function shuffle(array: Array<any>) {
  const copy = [...array];
  return copy.sort(() => Math.random() - 0.5);
}

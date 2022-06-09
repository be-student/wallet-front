export function shuffle(array: Array<any>) {
  return array.sort(() => Math.random() - 0.5);
}

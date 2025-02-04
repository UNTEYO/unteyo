let currentValue = 0;

export function generateSequentialNumber() {
  currentValue++;
  if (currentValue > 3) {
    currentValue = 1;
  }
  return currentValue;}
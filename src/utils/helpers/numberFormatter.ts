export function numberFormatter(number: number) {
  return new Intl.NumberFormat('en-US').format(number);
}

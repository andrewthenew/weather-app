export const addLeadZeros = (num: number, len: number) => {
  return String(num).padStart(len, '0');
}

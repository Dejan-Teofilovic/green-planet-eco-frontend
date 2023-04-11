/**
 * Convert number to a readable string
 * @param amount 12345.6789
 * @param decimal 2
 * @returns 123,45.67
 */
export const getVisibleAmount = (amount: number, decimal?: number): string => {
  let strAmount = amount.toFixed(decimal || 2);
  let intPart = parseInt(strAmount);
  let floatPart = strAmount.split(".")[1];
  let strInt = intPart.toLocaleString();

  return `${strInt}.${floatPart}`;
};

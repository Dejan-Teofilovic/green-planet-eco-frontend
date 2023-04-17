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

/**
 * Show the first letters corresponding the length as param
 * @param str abcdefghi
 * @param lengthToShow 3
 * @returns abc...
 */
export const showFirstLetters = (str: string, lengthToShow: number): string => {
  if (str.length <= lengthToShow) {
    return str;
  } else {
    return str.slice(0, lengthToShow) + "...";
  }
};

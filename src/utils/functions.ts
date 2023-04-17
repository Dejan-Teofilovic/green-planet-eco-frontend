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

export const getVisibleDateTime = (datetime: Date): string => {
  let date = datetime.toDateString();
  let time = datetime.toTimeString();
  let _time = `${time.split(":")[0]}:${time.split(":")[1]}`;
  let _date = `${date.split(" ")[1]} ${date.split(" ")[2]}, ${
    date.split(" ")[3]
  }`;
  return `${_time} ${_date}`;
};

export const getVisibleDate = (datetime: Date): string => {
  let date = datetime.toDateString();
  let _date = `${date.split(" ")[1]} ${date.split(" ")[2]}, ${
    date.split(" ")[3]
  }`;
  return `${_date}`;
};

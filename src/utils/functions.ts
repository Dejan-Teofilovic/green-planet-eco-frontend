import { lazy } from "react";
import { AFFILIATE_TOKEN } from "./constants";

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

/**
 * Lazy load of components including retry mode
 * @param importer
 * @returns
 */
// export const lazyWithRetries: typeof lazy = (importer) => {
//   const retryImport = async () => {
//     try {
//       return await importer();
//     } catch (error: any) {
//       // retry 5 times with 2 second delay and backoff factor of 2 (2, 4, 8, 16, 32 seconds)
//       for (let i = 0; i < 5; i++) {
//         await new Promise((resolve) => setTimeout(resolve, 1000 * 2 ** i));
//         // this assumes that the exception will contain this specific text with the url of the module
//         // if not, the url will not be able to parse and we'll get an error on that
//         // eg. "Failed to fetch dynamically imported module: https://example.com/assets/Home.tsx"
//         const url = new URL(
//           error.message
//             .replace("Failed to fetch dynamically imported module: ", "")
//             .trim()
//         );
//         // add a timestamp to the url to force a reload the module (and not use the cached version - cache busting)
//         url.searchParams.set("t", `${+new Date()}`);

//         try {
//           return await import(url.href);
//         } catch (e) {
//           console.log("retrying import");
//         }
//       }
//       throw error;
//     }
//   };
//   return lazy(retryImport);
// };

export const setItemOfLocalStorage = (name: string, value: string) => {
  return localStorage.setItem(name, value);
};

export const getItemOfLocalStorage = (name: string): string | null => {
  return localStorage.getItem(name);
};

export const removeItemOfLocalStorage = (name: string) => {
  return localStorage.removeItem(name);
};

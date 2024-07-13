/**
 * Converts a string to lowercase.
 *
 * @param {string} str - The string to convert.
 * @returns {string} The converted lowercase string.
 */
export const lowerCase = (str: string): string => str.toLowerCase();

/**
 * Converts a string to uppercase.
 *
 * @param {string} str - The input string.
 * @returns {string} The uppercase string.
 */
export const upperCase = (str: string): string => str.toUpperCase();

/**
 * Converts a string to title case.
 *
 * @param {string} str - The input string.
 * @returns {string} The string converted to title case.
 */
export const titleCase = (str: string): string => {
  return str.replace(
    /(^|[^a-zA-Z\u00C0-\u017F'])([a-zA-Z\u00C0-\u017F])/g,
    function (c) {
      return c.toUpperCase();
    }
  );
};

/**
 * Reverses the title case of a string.
 *
 * @param {string} str - The input string.
 * @returns {string} The reversed title case string.
 */
export const reverseTitleCase = (str: string): string => {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (item: string): string {
      return item.slice(0, -1) + item.slice(-1).toUpperCase();
    })
    .join(" ");
};

/**
 * Inverts the case of each character in a given string.
 *
 * @param {string} str - The input string.
 * @returns {string} The inverted string.
 */
export const invertCase = (str: string): string => {
  return str.replace(/./g, (c) =>
    c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
  )
};

/**
 * Converts a string to camel case.
 *
 * @param {string} str - The input string.
 * @returns {string} The camel case version of the input string.
 */
export const camelCase = (str: string): string => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
};

/**
 * Converts a string to PascalCase.
 *
 * @param {string} str - The input string.
 * @returns {string} The PascalCase string.
 */
export const pascalCase = (str: string): string => {
  return `${str}`
    .replace(new RegExp(/[-_]+/, "g"), " ")
    .replace(new RegExp(/[^\w\s]/, "g"), "")
    .replace(
      new RegExp(/\s+(.)(\w*)/, "g"),
      ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
    )
    .replace(new RegExp(/\w/), (s) => s.toUpperCase());
};

/**
 * Converts a string to kebab case.
 *
 * @param {string} str - The input string.
 * @returns {string} The kebab cased string.
 */
export const kebabCase = (str: string): string => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
};

/**
 * Converts a string to snake case.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The snake cased string.
 */
export const snakeCase = (str: string): string => {
  const strArr = str.split(" ");
  const snakeArr = strArr.reduce((acc: string[], val: string) => {
    return acc.concat(val.toLowerCase());
  }, []);
  return snakeArr.join("_");
};

/**
 * Converts a string to Pascal Snake Case.
 *
 * @param {string} str - The input string.
 * @returns {string} The string converted to Pascal Snake Case.
 */
export const pascalSnakeCase = (str: string): string => {
  const strArr: string[] = str.split(" ");
  return strArr.reduce((acc: string[], val: string) => {
    return acc.concat(
      val
        .replace(new RegExp(/[-_]+/, "g"), " ")
        .replace(new RegExp(/[^\w\s]/, "g"), "")
        .replace(
          new RegExp(/\s+(.)(\w*)/, "g"),
          ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
        )
        .replace(new RegExp(/\w/), (s) => s.toUpperCase())
    );
  }, []).join("_");
};

/**
 * Converts a string to train case.
 * Train case is a case where each word is capitalized and separated by a hyphen.
 * @param {string} str - The string to convert to train case.
 * @returns {string} The string converted to train case.
 */
export const trainCase = (str: string): string => {
  const strArr: string[] = str.split(" ");
  return strArr.reduce((acc: string[], val: string) => {
    return acc.concat(
      val
        .replace(new RegExp(/[-_]+/, "g"), " ")
        .replace(new RegExp(/[^\w\s]/, "g"), "")
        .replace(
          new RegExp(/\s+(.)(\w*)/, "g"),
          ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
        )
        .replace(new RegExp(/\w/), (s) => s.toUpperCase())
    );
  }, []).join("-");
};

/**
 * Converts a string to constant case.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The converted string in constant case.
 */
export const constantCase = (str: string): string => {
  const strArr = str.split(" ");
  return strArr.reduce((acc: string[], val: string) => {
    return acc.concat(val.toUpperCase());
  }, []).join("_");
};

/**
 * Converts a string to dot case.
 *
 * @param {string} str - The input string.
 * @returns {string} The dot cased string.
 */
export const dotCase = (str: string): string => {
  const strArr = str.split(" ");
  return strArr.reduce((acc: string[], val) => {
    return acc.concat(val.toLowerCase());
  }, []).join(".");
};

/**
 * Converts a string to path case.
 *
 * @param {string} str - The input string to be converted.
 * @returns {string} The converted string in path case.
 */
export const pathCase = (str: string): string => {
  const strArr = str.split(" ");
  return strArr.reduce((acc: string[], val) => {
    return acc.concat(val.toLowerCase());
  }, []).join("/");
};

/**
 * Converts the characters of a string to alternate case.
 *
 * @param {string} str - The input string.
 * @returns {string} The string with characters converted to alternate case.
 */
export const alternateCase1 = (str: string): string => {
  var newText = str.toLowerCase().split("");
  for (var i = 0; i < newText.length; i += 2) {
    newText[i] = newText[i].toUpperCase();
  }
  return newText.join("");
};

/**
 * Converts the characters of a string to alternate case.
 *
 * @param {string} str - The input string.
 * @returns {string} The string with characters converted to alternate case.
 */
export const alternateCase2 = (str: string): string => {
  var newText = str.toUpperCase().split("");
  for (var i = 0; i < newText.length; i += 2) {
    newText[i] = newText[i].toLowerCase();
  }
  return newText.join("");
};

/**
 * Converts the case of a string by toggling the case of each word.
 *
 * @param {string} str - The input string.
 * @returns {string} The modified string with toggled case.
 */
export const toggleCase = (str: string): string => {
  return str
    .toUpperCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toLowerCase() + word.slice(1);
    })
    .join(" ");
};

/**
 * Converts a string to sponge case.
 *
 * @param {string} str - The input string.
 * @returns {string} The string converted to sponge case.
 */
export const spongeCase = (str: string): string => {
  let result = "";
  for (const char of str) {
    result += Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase();
  }
  return result;
};

var hasSpace = /\s/;
var hasSeparator = /(_|-|\.|:)/;
var hasCamel = /([a-z][A-Z]|[A-Z][a-z])/;

/**
 * Remove any starting case from a `string`, like camel or snake, but keep
 * spaces and punctuation that may be important otherwise.
 *
 * @param {String} string
 * @return {String}
 */

export const noCase = (str: string): string => {
  if (hasSpace.test(str)) return str.toLowerCase();
  if (hasSeparator.test(str)) return (unseparate(str) || str).toLowerCase();
  if (hasCamel.test(str)) return uncamelize(str).toLowerCase();
  return str.toLowerCase();
};

/**
 * Separator splitter.
 */

var separatorSplitter = /[\W_]+(.|$)/g;

/**
 * Un-separate a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function unseparate(string: string): string {
  return string.replace(separatorSplitter, function (m, next) {
    return next ? " " + next : "";
  });
}

/**
 * Camelcase splitter.
 */

var camelSplitter = /(.)([A-Z]+)/g;

/**
 * Un-camelcase a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function uncamelize(string: string): string {
  return string.replace(camelSplitter, function (m, previous, uppers) {
    return previous + " " + uppers.toLowerCase().split("").join(" ");
  });
}

/**
 * Converts a paragraph into sentence case.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The converted string in sentence case.
 */
export const sentenceCase = (str: string): string => {
  return str
    .split(/(\S.+?[.!?])(?=\s+|$)/)
    .filter((sentence) => sentence.length > 0)
    .map((sentence) => {
      return (
        sentence.charAt(0).toUpperCase() + sentence.substr(1).toLowerCase()
      );
    })
    .join("");
};

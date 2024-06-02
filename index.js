/**
 * Converts a string to lowercase.
 *
 * @param {string} str - The string to convert.
 * @returns {string} The converted lowercase string.
 */
const lowerCase = (str) => str.toLowerCase();

/**
 * Converts a string to uppercase.
 *
 * @param {string} str - The input string.
 * @returns {string} The uppercase string.
 */
const upperCase = (str) => str.toUpperCase();

/**
 * Converts a string to title case.
 *
 * @param {string} str - The input string.
 * @returns {string} The string converted to title case.
 */
const titleCase = (str) => {
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
const reverseTitleCase = (str) => {
  const reversedTitleStr = str
    .toLowerCase()
    .split(" ")
    .map(function (item) {
      return item.slice(0, -1) + item.slice(-1).toUpperCase();
    })
    .join(" ");
  return reversedTitleStr;
};

/**
 * Inverts the case of each character in a given string.
 *
 * @param {string} str - The input string.
 * @returns {string} The inverted string.
 */
const invertCase = (str) => {
  const invertedStr = str.replace(/./g, (c) =>
    c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
  );

  return invertedStr;
};

/**
 * Converts a string to camel case.
 *
 * @param {string} str - The input string.
 * @returns {string} The camel case version of the input string.
 */
const camelCase = (str) => {
  function camelize(str) {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");
  }
  const camelizedStr = camelize(str);
  return camelizedStr;
};

/**
 * Converts a string to PascalCase.
 *
 * @param {string} str - The input string.
 * @returns {string} The PascalCase string.
 */
const pascalCase = (str) => {
  function toPascalCase(str) {
    return `${str}`
      .replace(new RegExp(/[-_]+/, "g"), " ")
      .replace(new RegExp(/[^\w\s]/, "g"), "")
      .replace(
        new RegExp(/\s+(.)(\w*)/, "g"),
        ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
      )
      .replace(new RegExp(/\w/), (s) => s.toUpperCase());
  }
  const pascalCasedStr = toPascalCase(str);
  return pascalCasedStr;
};

/**
 * Converts a string to kebab case.
 *
 * @param {string} str - The input string.
 * @returns {string} The kebab cased string.
 */
const kebabCase = (str) => {
  const kebabCase = (str) =>
    str
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[\s_]+/g, "-")
      .toLowerCase();

  const kebabCasedStr = kebabCase(str);
  return kebabCasedStr;
};

/**
 * Converts a string to snake case.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The snake cased string.
 */
const snakeCase = (str) => {
  const toSnakeCase = (str = "") => {
    const strArr = str.split(" ");
    const snakeArr = strArr.reduce((acc, val) => {
      return acc.concat(val.toLowerCase());
    }, []);
    return snakeArr.join("_");
  };
  const snakeCasedStr = toSnakeCase(str);
  return snakeCasedStr;
};

/**
 * Converts a string to dot case.
 *
 * @param {string} str - The input string.
 * @returns {string} The dot cased string.
 */
const dotCase = (str) => {
  const toDotCase = (str = "") => {
    const strArr = str.split(" ");
    const snakeArr = strArr.reduce((acc, val) => {
      return acc.concat(val.toLowerCase());
    }, []);
    return snakeArr.join(".");
  };
  const dotCasedStr = toDotCase(str);
  return dotCasedStr;
};

/**
 * Converts a string to path case.
 *
 * @param {string} str - The input string to be converted.
 * @returns {string} The converted string in path case.
 */
const pathCase = (str) => {
  const toPathCase = (str = "") => {
    const strArr = str.split(" ");
    const snakeArr = strArr.reduce((acc, val) => {
      return acc.concat(val.toLowerCase());
    }, []);
    return snakeArr.join("/");
  };
  const pathCasedStr = toPathCase(str);
  return pathCasedStr;
};

/**
 * Converts the characters of a string to alternate case.
 *
 * @param {string} str - The input string.
 * @returns {string} The string with characters converted to alternate case.
 */
const alternateCase1 = (str) => {
  var newText = str.toLowerCase().split("");
  for (var i = 0; i < newText.length; i += 2) {
    newText[i] = newText[i].toUpperCase();
  }
  const alternateCasedStr = newText.join("");
  return alternateCasedStr;
};

/**
 * Converts the characters of a string to alternate case.
 *
 * @param {string} str - The input string.
 * @returns {string} The string with characters converted to alternate case.
 */
const alternateCase2 = (str) => {
  var newText = str.toUpperCase().split("");
  for (var i = 0; i < newText.length; i += 2) {
    newText[i] = newText[i].toLowerCase();
  }
  const alternateCasedStr = newText.join("");
  return alternateCasedStr;
};

/**
 * Converts the case of a string by toggling the case of each word.
 *
 * @param {string} str - The input string.
 * @returns {string} The modified string with toggled case.
 */
const toggleCase = (str) => {
  const newText = str
    .toUpperCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toLowerCase() + word.slice(1);
    })
    .join(" ");
  return newText;
};

module.exports = {
  lowerCase,
  upperCase,
  titleCase,
  reverseTitleCase,
  invertCase,
  camelCase,
  pascalCase,
  kebabCase,
  snakeCase,
  dotCase,
  pathCase,
  alternateCase1,
  alternateCase2,
  toggleCase,
};

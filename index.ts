/**
 * Converts a string to lowercase.
 *
 * @param {string} str - The string to convert.
 * @returns {string} The converted lowercase string.
 */
const lowerCase = (str: string) => str.toLowerCase();

/**
 * Converts a string to uppercase.
 *
 * @param {string} str - The input string.
 * @returns {string} The uppercase string.
 */
const upperCase = (str: string) => str.toUpperCase();

/**
 * Converts a string to title case.
 *
 * @param {string} str - The input string.
 * @returns {string} The string converted to title case.
 */
const titleCase = (str: string) => {
  const titledStr = str.replace(
    /(^|[^a-zA-Z\u00C0-\u017F'])([a-zA-Z\u00C0-\u017F])/g,
    function (c) {
      return c.toUpperCase();
    }
  );
  return titledStr;
};

/**
 * Reverses the title case of a string.
 *
 * @param {string} str - The input string.
 * @returns {string} The reversed title case string.
 */
const reverseTitleCase = (str: string) => {
  const reversedTitleStr = str
    .toLowerCase()
    .split(" ")
    .map(function (item: string): string {
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
const invertCase = (str: string) => {
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
const camelCase = (str: string) => {
  function camelize(str: string) {
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
const pascalCase = (str: string) => {
  function toPascalCase(str: string) {
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
const kebabCase = (str: string) => {
  const kebabCase = (str: string) =>
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
const snakeCase = (str: string) => {
  const toSnakeCase = (str = "") => {
    const strArr = str.split(" ");
    const snakeArr = strArr.reduce((acc: string[], val: string) => {
      return acc.concat(val.toLowerCase());
    }, []);
    return snakeArr.join("_");
  };
  const snakeCasedStr = toSnakeCase(str);
  return snakeCasedStr;
};

/**
 * Converts a string to Pascal Snake Case.
 *
 * @param {string} str - The input string.
 * @returns {string} The string converted to Pascal Snake Case.
 */
const pascalSnakeCase = (str: string) => {
  const toPascalSnakeCase = (str: string = ""): string => {
    const strArr: string[] = str.split(" ");
    const snakeArr = strArr.reduce((acc: string[], val: string) => {
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
    }, []);
    return snakeArr.join("_");
  };
  const pascalSnakeCasedStr = toPascalSnakeCase(str);
  return pascalSnakeCasedStr;
};

/**
 * Converts a string to constant case.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The converted string in constant case.
 */
const constantCase = (str: string) => {
  const toConstantCase = (str = "") => {
    const strArr = str.split(" ");
    const snakeArr = strArr.reduce((acc: string[], val: string) => {
      return acc.concat(val.toUpperCase());
    }, []);
    return snakeArr.join("_");
  };
  const constantCasedStr = toConstantCase(str);
  return constantCasedStr;
};

/**
 * Converts a string to dot case.
 *
 * @param {string} str - The input string.
 * @returns {string} The dot cased string.
 */
const dotCase = (str: string) => {
  const toDotCase = (str = "") => {
    const strArr = str.split(" ");
    const snakeArr = strArr.reduce((acc: string[], val) => {
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
const pathCase = (str: string) => {
  const toPathCase = (str = "") => {
    const strArr = str.split(" ");
    const snakeArr = strArr.reduce((acc: string[], val) => {
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
const alternateCase1 = (str: string) => {
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
const alternateCase2 = (str: string) => {
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
const toggleCase = (str: string) => {
  const newText = str
    .toUpperCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toLowerCase() + word.slice(1);
    })
    .join(" ");
  return newText;
};

/**
 * Converts a string to sponge case.
 *
 * @param {string} str - The input string.
 * @returns {string} The string converted to sponge case.
 */
const spongeCase = (str: string) => {
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

function noCase(str: string) {
  if (hasSpace.test(str)) return str.toLowerCase();
  if (hasSeparator.test(str)) return (unseparate(str) || str).toLowerCase();
  if (hasCamel.test(str)) return uncamelize(str).toLowerCase();
  return str.toLowerCase();
}

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

function unseparate(string: string) {
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

function uncamelize(string: string) {
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
const sentenceCase = (str: string) => {
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

module.exports = {
  lowerCase,
  upperCase,
  titleCase,
  reverseTitleCase,
  invertCase,
  camelCase,
  pascalCase,
  kebabCase,
  constantCase,
  pascalSnakeCase,
  snakeCase,
  dotCase,
  pathCase,
  alternateCase1,
  alternateCase2,
  toggleCase,
  spongeCase,
  noCase,
  sentenceCase,
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sentenceCase = exports.noCase = exports.spongeCase = exports.toggleCase = exports.alternateCase2 = exports.alternateCase1 = exports.pathCase = exports.dotCase = exports.constantCase = exports.trainCase = exports.pascalSnakeCase = exports.snakeCase = exports.kebabCase = exports.pascalCase = exports.camelCase = exports.invertCase = exports.reverseTitleCase = exports.titleCase = exports.upperCase = exports.lowerCase = void 0;
/**
 * Converts a string to lowercase.
 *
 * @param {string} str - The string to convert.
 * @returns {string} The converted lowercase string.
 */
const lowerCase = (str) => str.toLowerCase();
exports.lowerCase = lowerCase;
/**
 * Converts a string to uppercase.
 *
 * @param {string} str - The input string.
 * @returns {string} The uppercase string.
 */
const upperCase = (str) => str.toUpperCase();
exports.upperCase = upperCase;
/**
 * Converts a string to title case.
 *
 * @param {string} str - The input string.
 * @returns {string} The string converted to title case.
 */
const titleCase = (str) => {
    return str.replace(/(^|[^a-zA-Z\u00C0-\u017F'])([a-zA-Z\u00C0-\u017F])/g, function (c) {
        return c.toUpperCase();
    });
};
exports.titleCase = titleCase;
/**
 * Reverses the title case of a string.
 *
 * @param {string} str - The input string.
 * @returns {string} The reversed title case string.
 */
const reverseTitleCase = (str) => {
    return str
        .toLowerCase()
        .split(" ")
        .map(function (item) {
        return item.slice(0, -1) + item.slice(-1).toUpperCase();
    })
        .join(" ");
};
exports.reverseTitleCase = reverseTitleCase;
/**
 * Inverts the case of each character in a given string.
 *
 * @param {string} str - The input string.
 * @returns {string} The inverted string.
 */
const invertCase = (str) => {
    return str.replace(/./g, (c) => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase());
};
exports.invertCase = invertCase;
/**
 * Converts a string to camel case.
 *
 * @param {string} str - The input string.
 * @returns {string} The camel case version of the input string.
 */
const camelCase = (str) => {
    return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
        .replace(/\s+/g, "");
};
exports.camelCase = camelCase;
/**
 * Converts a string to PascalCase.
 *
 * @param {string} str - The input string.
 * @returns {string} The PascalCase string.
 */
const pascalCase = (str) => {
    return `${str}`
        .replace(new RegExp(/[-_]+/, "g"), " ")
        .replace(new RegExp(/[^\w\s]/, "g"), "")
        .replace(new RegExp(/\s+(.)(\w*)/, "g"), ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`)
        .replace(new RegExp(/\w/), (s) => s.toUpperCase());
};
exports.pascalCase = pascalCase;
/**
 * Converts a string to kebab case.
 *
 * @param {string} str - The input string.
 * @returns {string} The kebab cased string.
 */
const kebabCase = (str) => {
    return str
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[\s_]+/g, "-")
        .toLowerCase();
};
exports.kebabCase = kebabCase;
/**
 * Converts a string to snake case.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The snake cased string.
 */
const snakeCase = (str) => {
    const strArr = str.split(" ");
    const snakeArr = strArr.reduce((acc, val) => {
        return acc.concat(val.toLowerCase());
    }, []);
    return snakeArr.join("_");
};
exports.snakeCase = snakeCase;
/**
 * Converts a string to Pascal Snake Case.
 *
 * @param {string} str - The input string.
 * @returns {string} The string converted to Pascal Snake Case.
 */
const pascalSnakeCase = (str) => {
    const strArr = str.split(" ");
    return strArr.reduce((acc, val) => {
        return acc.concat(val
            .replace(new RegExp(/[-_]+/, "g"), " ")
            .replace(new RegExp(/[^\w\s]/, "g"), "")
            .replace(new RegExp(/\s+(.)(\w*)/, "g"), ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`)
            .replace(new RegExp(/\w/), (s) => s.toUpperCase()));
    }, []).join("_");
};
exports.pascalSnakeCase = pascalSnakeCase;
/**
 * Converts a string to train case.
 * Train case is a case where each word is capitalized and separated by a hyphen.
 * @param {string} str - The string to convert to train case.
 * @returns {string} The string converted to train case.
 */
const trainCase = (str) => {
    const strArr = str.split(" ");
    return strArr.reduce((acc, val) => {
        return acc.concat(val
            .replace(new RegExp(/[-_]+/, "g"), " ")
            .replace(new RegExp(/[^\w\s]/, "g"), "")
            .replace(new RegExp(/\s+(.)(\w*)/, "g"), ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`)
            .replace(new RegExp(/\w/), (s) => s.toUpperCase()));
    }, []).join("-");
};
exports.trainCase = trainCase;
/**
 * Converts a string to constant case.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The converted string in constant case.
 */
const constantCase = (str) => {
    const strArr = str.split(" ");
    return strArr.reduce((acc, val) => {
        return acc.concat(val.toUpperCase());
    }, []).join("_");
};
exports.constantCase = constantCase;
/**
 * Converts a string to dot case.
 *
 * @param {string} str - The input string.
 * @returns {string} The dot cased string.
 */
const dotCase = (str) => {
    const strArr = str.split(" ");
    return strArr.reduce((acc, val) => {
        return acc.concat(val.toLowerCase());
    }, []).join(".");
};
exports.dotCase = dotCase;
/**
 * Converts a string to path case.
 *
 * @param {string} str - The input string to be converted.
 * @returns {string} The converted string in path case.
 */
const pathCase = (str) => {
    const strArr = str.split(" ");
    return strArr.reduce((acc, val) => {
        return acc.concat(val.toLowerCase());
    }, []).join("/");
};
exports.pathCase = pathCase;
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
    return newText.join("");
};
exports.alternateCase1 = alternateCase1;
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
    return newText.join("");
};
exports.alternateCase2 = alternateCase2;
/**
 * Converts the case of a string by toggling the case of each word.
 *
 * @param {string} str - The input string.
 * @returns {string} The modified string with toggled case.
 */
const toggleCase = (str) => {
    return str
        .toUpperCase()
        .split(" ")
        .map(function (word) {
        return word.charAt(0).toLowerCase() + word.slice(1);
    })
        .join(" ");
};
exports.toggleCase = toggleCase;
/**
 * Converts a string to sponge case.
 *
 * @param {string} str - The input string.
 * @returns {string} The string converted to sponge case.
 */
const spongeCase = (str) => {
    let result = "";
    for (const char of str) {
        result += Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase();
    }
    return result;
};
exports.spongeCase = spongeCase;
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
const noCase = (str) => {
    if (hasSpace.test(str))
        return str.toLowerCase();
    if (hasSeparator.test(str))
        return (unseparate(str) || str).toLowerCase();
    if (hasCamel.test(str))
        return uncamelize(str).toLowerCase();
    return str.toLowerCase();
};
exports.noCase = noCase;
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
function unseparate(string) {
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
function uncamelize(string) {
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
const sentenceCase = (str) => {
    return str
        .split(/(\S.+?[.!?])(?=\s+|$)/)
        .filter((sentence) => sentence.length > 0)
        .map((sentence) => {
        return (sentence.charAt(0).toUpperCase() + sentence.substr(1).toLowerCase());
    })
        .join("");
};
exports.sentenceCase = sentenceCase;

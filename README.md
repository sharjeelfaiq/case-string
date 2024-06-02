## case-string: String Manipulation Utility for JavaScript

case-string is a versatile JavaScript package that provides a comprehensive set of functions to manipulate string cases for both frontend and backend applications.

**DOCUMENTATION** https://t.ly/NJGH3

### Installation

Install case-string using npm, pnpm or yarn:

```bash
npm install case-string --save-dev
```

```bash
pnpm add case-string -D
```

```bash
yarn add case-string -D
```

### Usage

Import the specific functions:

```javascript
// ES5 Import
const { reverseTitleCase, camelCase } = require("case-string");

// ES6 Import
import { reverseTitleCase, camelCase } from "case-string";
```

or import the entire case-string library:

```javascript
// ES5 Import
const caseString = require("case-string");

// ES6 Import
import caseString from "case-string";
```

### Available Functions

case-string offers a wide range of functions for various string case manipulation tasks. Here's a brief description of each function:

```javascript
const string = "The quick brown fox jumps over the lazy dog.";

caseString.reverseTitleCase(string); // thE quicK browN foX jumpS oveR thE lazY dog.
caseString.invertCase(string); // theQuickBrownFoxJumpsOverTheLazyDog.
caseString.camelCase(string); // TheQuickBrownFoxJumpsOverTheLazyDog
caseString.pascalCase(string); // TheQuickBrownFoxJumpsOverTheLazyDog
caseString.kebabCase(string); // the-quick-brown-fox-jumps-over-the-lazy-dog.
caseString.snakeCase(string); // the_quick_brown_fox_jumps_over_the_lazy_dog.
caseString.alternateCase1(string); // ThE QuIcK BrOwN FoX JuMpS OvEr tHe lAzY DoG.
caseString.alternateCase2(string); // tHe qUiCk bRoWn fOx jUmPs oVeR ThE LaZy dOg.
```

### Support

Feel free to contribute and make case-string a better choice.

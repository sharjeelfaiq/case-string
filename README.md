## case-string: [DEMO](https://case-string-demo.netlify.app/)

case-string is a versatile npm library that provides a comprehensive set of functions to manipulate string cases for both frontend and backend applications.

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
const string = "The quick brown fox jumps over the lazy dog";

1. caseString.upperCase(string); // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG

2. caseString.lowerCase(string); // the quick brown fox jumps over the lazy dog

3. caseString.titleCase(string); // The Quick Brown Fox Jumps Over The Lazy Dog

4. caseString.reverseTitleCase(string); // thE quicK browN foX jumpS oveR thE lazY dog

5. caseString.invertCase(string); // tHE QUICK BROWN FOX JUMPS OVER THE LAZY DOG

6. caseString.camelCase(string); // theQuickBrownFoxJumpsOverTheLazyDog

7. caseString.pascalCase(string); // TheQuickBrownFoxJumpsOverTheLazyDog

8. caseString.kebabCase(string); // the-quick-brown-fox-jumps-over-the-lazy-dog

9. caseString.dotCase(string); // the.quick.brown.fox.jumps.over.the.lazy.dog

10. caseString.pathCase(string); // the/quick/brown/fox/jumps/over/the/lazy/dog

11. caseString.snakeCase(string); // the_quick_brown_fox_jumps_over_the_lazy_dog

12. caseString.pascalSnakeCase(string); // The_Quick_Brown_Fox_Jumps_Over_The_Lazy_Dog

13. caseString.trainCase(string); // The-Quick-Brown-Fox-Jumps-Over-The-Lazy-Dog

14. caseString.constantCase(string); // THE_QUICK_BROWN_FOX_JUMPS_OVER_THE_LAZY_DOG

15. caseString.alternateCase1(string); // ThE QuIcK BrOwN FoX JuMpS OvEr tHe lAzY DoG

16. caseString.alternateCase2(string); // tHe qUiCk bRoWn fOx jUmPs oVeR ThE LaZy dOg

17. caseString.toggleCase(string); // tHE qUICK bROWN fOX jUMPS oVER tHE lAZY dOG

18. caseString.spongeCase(string); // the QUIcK broWN foX JuMPS ovEr thE Lazy dOg

19. caseString.noCase(string); // the quick brown fox jumps over the lazy dog

20. caseString.sentenceCase("tHE qUICK bROWN fOX jUMPS oVER tHE lAZY dOG"); // The quick brown fox jumps over the lazy dog
```

### Support

Feel free to contribute and make case-string a better choice.

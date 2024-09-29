/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

const makeCaze = function (input, caze) {
  // Put your solution here
  const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

  const toCamel = (str) => {
    return str
      .split(' ').map((word, index) => (index === 0 ? word.toLowerCase() : capitalize(word))).join('');
  };

  const toPascal = (str) => {
    return str.split(' ').map(word => capitalize(word)).join('');
  };

  const toSnake = (str) => {
    return str.toLowerCase().split(' ').join('_');
  };

  const toKebab = (str) => {
    return str.toLowerCase().split(' ').join('-');
  };

  const toTitle = (str) => {
    return str
      .split(' ').map(word => capitalize(word)).join(' ');
  };

  const toVowelCase = (str) => {
    return str.replace(/[aeiou]/gi, match => match.toUpperCase());
  };

  const toConsonantCase = (str) => {
    return str.replace(/[^aeiou\s]/gi, match => match.toUpperCase());
  };

  const toUpper = (str) => str.toUpperCase();

  const toLower = (str) => str.toLowerCase();

  let result = input.toLowerCase();

  if (Array.isArray(caze)) {
    caze.forEach(style => {
      if (style === 'camel') result = toCamel(result);
      if (style === 'pascal') result = toPascal(result);
      if (style === 'snake') result = toSnake(result);
      if (style === 'kebab') result = toKebab(result);
      if (style === 'title') result = toTitle(result);
    });
  } else {
    if (caze === 'camel') result = toCamel(result);
    if (caze === 'pascal') result = toPascal(result);
    if (caze === 'snake') result = toSnake(result);
    if (caze === 'kebab') result = toKebab(result);
    if (caze === 'title') result = toTitle(result);
  }

  if (Array.isArray(caze)) {
    caze.forEach(style => {
      if (style === 'vowel') result = toVowelCase(result);
      if (style === 'consonant') result = toConsonantCase(result);
    });
  } else {
    if (caze === 'vowel') result = toVowelCase(result);
    if (caze === 'consonant') result = toConsonantCase(result);
  }

  if (Array.isArray(caze)) {
    caze.forEach(style => {
      if (style === 'upper') result = toUpper(result);
      if (style === 'lower') result = toLower(result);
    });
  } else {
    if (caze === 'upper') result = toUpper(result);
    if (caze === 'lower') result = toLower(result);
  }

  return result;
};

console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

module.exports = makeCaze;

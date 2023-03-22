function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  
  function logTwoValues(value1, value2) {
    console.log(`The two values are ${value1} and ${value2}.`);
  }
  console.log(introduction("John")); // Output: Hi, my name is John.
  logTwoValues(3, 5); // Output: The two values are 3 and 5.
  function introductionWithLanguage(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  console.log(introductionWithLanguage("John")); // Output: Hi, my name is John and I am learning to program in JavaScript.
console.log(introductionWithLanguage("John", "JavaScript")); // Output: Hi, my name is John and I am learning to program in Python.
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  console.log(introductionWithLanguageOptional("John")); // Output: Hi, my name is John and I am learning to program in JavaScript.
console.log(introductionWithLanguageOptional("John", "JavaScript")); // Output: Hi, my name is John and I am learning to program in Python.



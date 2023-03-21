const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased(array) {
  const emptyArray = [];

  array.map((item) => {
    const variable = item.split(" ");

    const toCaps = variable.map((item) => {
      return item[0].toUpperCase() + item.slice(1);
    });
    let newVariable = toCaps.join(" ");
    return emptyArray.push(newVariable);
  });
  return emptyArray;
}

console.log(titleCased(tutorials));

// function titleCased(array) {
//   return array.map((item) => {
//     return item.replace(/\b\w/g, (char) => char.toUpperCase());
//   });
// }

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

function titleCased() {
  const emptyArray = [];

  tutorials.map((item) => {
    const variable = item.split(" ");

    const toCaps = variable.map((item) => {
      return item[0].toUpperCase() + item.slice(1);
    });
    return emptyArray.push(toCaps.join(" "));
  });

  return emptyArray;
}

// console.log(titleCased(tutorials));

// let titleCased = tutorials.map(function (item) {
//   return item.split(" ");
// });

// function titleCased(tutorials) {
//   return tutorials.map((item) => {
//     return item.replace(/\b\w/g, (char) => char.toUpperCase());
//   });
// }

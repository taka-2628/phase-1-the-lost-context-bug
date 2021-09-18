const messageConfig = {
  frontContent: "Happy Birthday, Odin One-Eye!",
  insideContent: "From Asgard to Nifelheim, you're the best all-father ever.\n\nLove,",
  closing: {
      Thor: "Admiration, respect, and love",
      Loki: "Your son"
  },
  signatories: [
      "Thor",
      "Loki"
  ]
};

const printCard = function () {
  console.log(this.frontContent);
  console.log(this.insideContent);
  this.signatories.forEach(function (signatory) {
    const message = `${this.closing[signatory]}, ${signatory}`;
    console.log(message);
  });
};

printCard.call(messageConfig);

// LOG: Happy Birthday, Odin One-Eye!
// LOG: From Asgard to Nifelheim, you're the best all-father ever. Love,
// Uncaught TypeError: Cannot read properties of undefined (reading 'Thor')
//    at index.js:18
//    at Array.forEach (<anonymous>)
//    at Object.printCard (index.js:17)
//    at index.js:23

/*
const printCard = function (messageConfig) {
  console.log(messageConfig.frontContent);
  console.log(messageConfig.insideContent);
  messageConfig.signatories.forEach(function (signatory) {
    const message = `${messageConfig.closing[signatory]}, ${signatory}`;
    console.log(message);
  });
};

printCard(messageConfig);

// LOG: Happy Birthday, Odin One-Eye!
// LOG: From Asgard to Nifelheim, you're the best all-father ever. Love,
// LOG: Admiration, respect, and love, Thor
// LOG: Your son, Loki
*/










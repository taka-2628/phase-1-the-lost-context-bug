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
  this.signatories.forEach(signatory => {
    const message = `${this.closing[signatory]}, ${signatory}`;
    console.log(message);
  })
};

printCard.call(messageConfig);

// LOG: Happy Birthday, Odin One-Eye!
// LOG: From Asgard to Nifelheim, you're the best all-father ever. Love,
// LOG: Admiration, respect, and love, Thor
// LOG: Your son, Loki



// WITH THIS - SOLUTION 2
/*
const printCard = function () {
  console.log(this.frontContent);
  console.log(this.insideContent);

  const outerContext = this;

  this.signatories.forEach(function (signatory) {
    const message = `${outerContext.closing[signatory]}, ${signatory}`;
    console.log(message);
  })
};

printCard.call(messageConfig);

// LOG: Happy Birthday, Odin One-Eye!
// LOG: From Asgard to Nifelheim, you're the best all-father ever. Love,
// LOG: Admiration, respect, and love, Thor
// LOG: Your son, Loki
*/


// WITH THIS - SOLUTION 1.2
/*
const printCard = function () {
  console.log(this.frontContent);
  console.log(this.insideContent);
  const contextBoundForEachExpr = function (signatory) {
    const message = `${this.closing[signatory]}, ${signatory}`;
    console.log(message);
  }.bind(this);

  this.signatories.forEach(contextBoundForEachExpr);
};

printCard.call(messageConfig);

// LOG: Happy Birthday, Odin One-Eye!
// LOG: From Asgard to Nifelheim, you're the best all-father ever. Love,
// LOG: Admiration, respect, and love, Thor
// LOG: Your son, Loki
*/


// WITH THIS - SOLUTION 1
/*
const printCard = function () {
  console.log(this.frontContent);
  console.log(this.insideContent);
  this.signatories.forEach(function (signatory) {
    const message = `${this.closing[signatory]}, ${signatory}`;
    console.log(message);
  },
  this);
};

printCard.call(messageConfig);

// LOG: Happy Birthday, Odin One-Eye!
// LOG: From Asgard to Nifelheim, you're the best all-father ever. Love,
// LOG: Admiration, respect, and love, Thor
// LOG: Your son, Loki
*/


// WITH THIS - DEBUG
/*
const printCard = function () {
  console.log(this.frontContent);
  console.log(this.insideContent);

  console.log("Debug Before forEach: " + this);
  this.signatories.forEach(function (signatory) {
    console.log("Debug Inside: " + this);
    // const message = `${this.closing[signatory]}, ${signatory}`;
    // console.log(message);
  })
};

printCard.call(messageConfig);

// LOG: Happy Birthday, Odin One-Eye!
// LOG: From Asgard to Nifelheim, you're the best all-father ever. Love,
// LOG: Debug Before forEach: [object Object]
// LOG: Debug Inside: [object Window]
// LOG: Debug Inside: [object Window]
*/


// WITH THIS - ERROR
/*
const printCard = function () {
  console.log(this.frontContent);
  console.log(this.insideContent);
  this.signatories.forEach(function (signatory) {
    const message = `${this.closing[signatory]}, ${signatory}`;
    console.log(message);
  })
};

// LOG: Happy Birthday, Odin One-Eye!
// LOG: From Asgard to Nifelheim, you're the best all-father ever. Love,
// Uncaught TypeError: Cannot read properties of undefined (reading 'Thor')
//    at index.js:18
//    at Array.forEach (<anonymous>)
//    at Object.printCard (index.js:17)
//    at index.js:23
*/


// WITHOUT THIS
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










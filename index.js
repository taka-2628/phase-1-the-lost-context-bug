const messageConfig = {
  frontContent: "Happy Birthday, Odin One-Eye!",
  insideContent: "From Asgard to Nifelheim, you're the best all-father ever.\n\nLove,",
  closing: {
      "Thor": "Admiration, respect, and love",
      "Loki": "Your son"
  },
  signatories: [
      "Thor",
      "Loki"
  ]
};

const printCard = function (messageConfig) {
  console.log(messageConfig.frontContent);
  console.log(messageConfig.insideContent);
  messageConfig.signatories.forEach(function (signatory) {
    const message = `${messageConfig.closing[signatory]}, ${signatory}`;
    console.log(message);
  });
};

printCard(messageConfig);

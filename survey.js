const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = [];

rl.question(`What's your name? Nicknames are also acceptable : `, (answer) => {
  answers.push(`Hi, my name is ${answer}`);
  rl.question(`What's an activity you like doing? `, (answer) => {
    answers.push(`I love to ${answer}`);
    rl.question('What do you listen to while doing that? ', (answer) => {
      answers.push(`I listen to ${answer}`);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (answer) => {
        answers.push(`${answer} is my favourit meal.`);
     
        rl.question(`What's your favourite thing to eat for that meal? `, (answer) => {
          answers.push(`I love to eat ${answer}`);
       
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            answers.push(`I love ${answer}`);
          
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              answers.push(`I have a supperpower! ${answer}`);
              console.log(answers);
              rl.close();
            });
          });
        });
      });  
    }); 
  });
});
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = [
  ['What\'s your name? Nicknames are also acceptable :)'],
  ['What\'s an activity you like doing?'],
  ['What do you listen to while doing that?'],
  ['Which meal is your favourite (eg: dinner, brunch, etc.)'],
  ['What\'s your favorite thing to eat for that meal?'],
  ['Which sport is your absolute favourite?'],
  ['What is your superpower? In a few words, tell us what you are amazing at!']
];
rl.question('What\'s your name? Nicknames are also acceptable :)', (answer) => {
  answers[0].push(answer);
  rl.question('What\'s an activity you like doing?', (answer) => {
    answers[1].push(answer);
    
    rl.question('What do you listen to while doing that?', (answer) => {
      answers[2].push(answer);
            
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
        answers[3].push(answer);
                  
        rl.question('What\'s your favorite thing to eat for that meal?', (answer) => {

          answers[4].push(answer);
             
          rl.question('Which sport is your absolute favourite?', (answer) => {
           
            answers[5].push(answer);

            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              
              answers[6].push(answer);

              for (let element of answers) {
                console.log(`${element[0]}: ${element[1]}`);
              }
              rl.close();
                   
            });
        
          });
  
        });
   
      });
    
    });
    
  });
  
});


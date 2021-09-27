const rs =require('readline-sync');
const chalk = require('chalk');

var playerName = rs.question(chalk.blue.bold("Who are you?\n"));

console.log(chalk.blue.bold("Hey, do you like quiz? If no, what about a quiz on your facourite topic? "));

console.log(chalk.blue.bold("Choose an option from below :: "));

let score = 0;
let marvelQuiz = [
	{
		que: "What is Captain America's shield made out of?",
		ans: ["vibranium"]		
	},
	{
		que: "What country are Scarlet Witch and Quicksilver from?",
		ans: ["sokovia"]		
	},
	{
		que: "Who can lift Thor's hammer?",
		ans: ["captain america"]		
	},
	{
		que: "What species did Loki discover he is?",
		ans: ["frost giant"]		
	},
	{
		que: "What kind of animal does Captain Marvel befriend?",
		ans: ["cat"]		
	}
];

let dcQuiz = [
	{
		que: "Who is Gotham’s Clown Prince of Crime?",
		ans: ["joker"]		
	},
	{
		que: "What is Superman’s weakness?",
		ans: ["kryptonite"]		
	},
	{
		que: "What is Batman’s secret identity?",
		ans: ["bruce wayne"]		
	},
	{
		que: "What is the main superhero team of the DC Universe?",
		ans: ["justice league"]		
	},
	{
		que: "Where does Wonder Woman come from?",
		ans: ["themyscira"]		
	}
];

let fav = rs.question(chalk.cyanBright.bold("1. Marvel OR 2. DC\n"));
let option = (fav == 1) ? marvelQuiz : dcQuiz;

for(let i=0;i<option.length;i++) 
{
	gamePlay(option[i].que, option[i].ans);
}

console.log('Final score is  : ' + score+"/"+option.length);    


function gamePlay(question , answer){
  var ans  = rs.question(chalk.cyanBright(question));
  if(answer.includes(ans.toLowerCase())){
    console.log(chalk.green('Correct'));    
    score++;
    console.log('Score  : ' + score);    
  }
  else{
    console.log(chalk.red('Wrong'));  
	score = (score == 0) ? 0 : score - 1;
    console.log('Score  : ' + score);    
  }
    console.log(chalk.blue('\n------------------------------\n'));    
} 

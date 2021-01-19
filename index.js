var readlineSync = require('readline-sync');
var chalk = require('chalk');
var animation = require('chalk-animation');
var score =0;

var username = readlineSync.question(chalk.cyan('What is your name  : ? ')).toUpperCase();
console.log("\n"+chalk.magentaBright("Welcome - ")+chalk.green(username)+
"\n\n"+(chalk.blueBright("How well do you know Rajat ? Lets take a quiz to find out.")));


console.log(chalk.keyword('orange')("\n This quiz has 10 questions."));
console.log(chalk.keyword('orange')("\n Each correct answer will earn you 1 point and 0 points for wrong answer."));
console.log(chalk.keyword('orange')("\n You will upgrade your level on giving 5 correct answer"));
console.log(chalk.keyword('orange')("\n You can press 0 if you don't know the answer"));

console.log(chalk.cyanBright("\n Lets Start the Quiz - \n"));


answer_one = ['Rajat Yadav', 'Rajat Sharma', 'Rajat Verma', 'Rajat Singh'];
answer_two = ['Tomb Raider', 'Call of Duty', 'CS Go', 'NFS'];
answer_three = ['Transformers', 'DC', 'Marvel', 'None'];
answer_four = ['KCM', 'Wilsonia', 'DPS', 'Tiny Tots'];
answer_five= ['Transformers 1', 'Transformers : Age of Extinction', 'Transformers : Dark of the Moon', 'Tranformers : The Last Knight'];
answer_six = ['Amity', 'LPU', 'Sharda', 'DU'];
answer_seven = ['Iron Man', 'Captain America', 'Loki', 'Hulk'];
answer_eight = ['Batman', 'Superman', 'Flash', 'Wonder-Women'];
answer_nine = ['Free Fire', 'Asphalt', 'PUBG', 'Candy Crush'];

answer_ten = ['Travelling', 'Swimming', 'Dancing', 'Hiking'];

Question_one = {
  question : "Q.1 What is my full name?",
  answer : 'Rajat Yadav',
  answerlist : answer_one
}

Question_two = {
  question : "Q.2 Which PC game I like most",
  answer : "Tomb Raider",
  answerlist : answer_two
}

Question_three = {
  question : "Q.3 Which movie universe I like the most?",
  answer : "Marvel",
  answerlist : answer_three
}

Question_four = {
  question : "Q.4 In which school do I used to study",
  answer : "Wilsonia",
  answerlist : answer_four
}

Question_five = {
  question : "Q.5 Which transformers movie i like the most?",
  answer : 'Transformers : Age of Extinction',
  answerlist : answer_five
}

Question_six = {
  question : "Q.6 In which university I am studying currently  ?",
  answer : "LPU",
  answerlist : answer_six
}

Question_seven = {
  question : "Q.7 Who MCU character I like most?",
  answer : "Captain America",
  answerlist : answer_seven
}

Question_eight = {
  question : "Q.8 Which DCU character I like most ? ",
  answer : "Batman",
  answerlist : answer_eight
}

Question_nine = {
  question : "Q.9 Which mobile game i like most ?",
  answer : 'PUBG',
  answerlist : answer_nine
}

Question_ten = {
  question : "Q.10 What do I like from the following?",
  answer : "Travelling",
  answerlist : answer_ten
}


/*Function play */
function play(Question,answer,Answer)
{
  console.log(chalk.cyanBright(Question));
  
  index = readlineSync.keyInSelect(Answer, 'Choose one option number : ');
  console.log('You have selected ' + Answer[index]);  
 
  var useranswer= Answer[index];
 
  if(useranswer==answer){
    score=score+1;
    console.log(chalk.green("Hurray, you answered correctly;"));
  }
  else
  {
    console.log(chalk.red("Oops! , you answer is wrong;"));
  }
   
}

/* Array of objects*/
var listquestion = [Question_one,Question_two,Question_three,Question_four,Question_five,Question_six,Question_seven,Question_eight,Question_nine,Question_ten]

/* Loop for showing questions*/
for(var i=0;i<listquestion.length;i++){
play(listquestion[i].question,listquestion[i].answer,listquestion[i].answerlist);
console.log("Your score is :",score);
console.log("-----------------------------------------");

if(score==5)
{
  console.log("----------------------------------------");
  console.log(chalk.bgHex('#DEADED').underline('Congratulations. You are now on level 2'));
  console.log("----------------------------------------");
}

if(score==10)
{
  console.log("----------------------------------------");
  console.log(chalk.bgHex('#DEADED').underline('Congratulations. You are now on level 2'));
  console.log("----------------------------------------");
}
}

console.log(chalk.green(username+" your final score is : "+score));

/* High Score*/

var oldUser= {
  name:'Yash',
  highScore:5,
}
var currentUser= {
  name: username,
  highScore: score,
}

/* High Score */
if(oldUser.highScore >currentUser.highScore){
  console.log(oldUser.name +"'s score : "+oldUser.highScore);
  console.log(currentUser.name +"'s score : "+currentUser.highScore)
  console.log(chalk.bold.cyanBright("You have failed to beat :- " + oldUser.name));
}
else{
  console.log(oldUser.name +"'s score : "+oldUser.highScore)
  console.log(currentUser.name +"'s score : "+currentUser.highScore)
  console.log(chalk.bold.cyanBright("You have beaten - " + oldUser.name));
}
console.log("----------------------------------------");